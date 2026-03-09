'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Bold from '@tiptap/extension-bold';
import Text from '@tiptap/extension-text';
import Link from '@tiptap/extension-link';
import CharacterCount from '@tiptap/extension-character-count';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import { BulletList, OrderedList, ListItem } from '@tiptap/extension-list';
import Image from '@tiptap/extension-image';
import FileHandler from '@tiptap/extension-file-handler';
import type { PressRelease } from '@/lib/types';
import styles from './page.module.css';

const PRESS_RELEASE_ID = 1;
const queryKey = ['press-release', PRESS_RELEASE_ID];
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8080';

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

/**
 * 画像をサーバーにアップロードし、長辺600px以下にリサイズされた data URL を取得する
 */
async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetch(`${BASE_URL}/images/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error((data as { message?: string }).message ?? '画像のアップロードに失敗しました');
  }

  const data = (await response.json()) as { src: string };
  return data.src;
}

function usePressReleaseQuery() {
  return useQuery({
    queryKey,
    queryFn: async (): Promise<PressRelease> => {
      const response = await fetch(`${BASE_URL}/press-releases/${PRESS_RELEASE_ID}`);
      if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
      }
      return response.json();
    },
  });
}

function useSavePressReleaseMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      const response = await fetch(`${BASE_URL}/press-releases/${PRESS_RELEASE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('保存に失敗しました');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
    onError: (error: Error) => {
      alert(`エラー: ${error.message}`);
    },
  });
}

export default function EditorPage() {
  const { data, isPending, isError } = usePressReleaseQuery();

  if (isPending) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>読み込み中...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>データの読み込みに失敗しました</div>
      </div>
    );
  }

  return <Editor initialTitle={data.title} initialContent={JSON.parse(data.content)} />;
}

interface EditorProps {
  initialTitle: string;
  initialContent: string;
}

interface LinkDialogState {
  isOpen: boolean;
  url: string;
  displayText: string;
  isEdit: boolean;
}

interface ImageDialogState {
  isOpen: boolean;
  url: string;
  alt: string;
}

function Editor({ initialTitle, initialContent }: EditorProps) {
  const MAX_CHAR_TITLE = 100;
  const MAX_CHAR_MAIN = 500;
  const [title, setTitle] = useState(initialTitle);
  const [charCount, setCharCount] = useState(0);
  const [validationError, setValidationError] = useState('');
  const [linkDialog, setLinkDialog] = useState<LinkDialogState>({
    isOpen: false,
    url: '',
    displayText: '',
    isEdit: false,
  });
  const [imageDialog, setImageDialog] = useState<ImageDialogState>({
    isOpen: false,
    url: '',
    alt: '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const requestSaveRef = useRef<() => void>(undefined);

  const editor = useEditor({
    extensions: [
      Document,
      Heading,
      Paragraph,
      Text,
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: styles.editorLink,
          rel: 'noopener noreferrer',
          target: '_blank',
        },
      }),
      CharacterCount,
      Bold,
      Italic,
      Underline,
      BulletList,
      OrderedList,
      ListItem,
      Image,
      FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onDrop: (currentEditor, files, pos) => {
          const file = files[0];
          if (!file) return;

          uploadImage(file)
            .then((src) => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: 'image',
                  attrs: { src },
                })
                .focus()
                .run();
              window.dispatchEvent(new CustomEvent('editor-request-save'));
            })
            .catch((err) => {
              alert(err instanceof Error ? err.message : '画像のアップロードに失敗しました');
            });
        },
        onPaste: (currentEditor, files, htmlContent) => {
          if (htmlContent) return false;

          const file = files[0];
          if (!file) return;

          uploadImage(file)
            .then((src) => {
              currentEditor
                .chain()
                .insertContentAt(currentEditor.state.selection.anchor, {
                  type: 'image',
                  attrs: { src },
                })
                .focus()
                .run();
              window.dispatchEvent(new CustomEvent('editor-request-save'));
            })
            .catch((err) => {
              alert(err instanceof Error ? err.message : '画像のアップロードに失敗しました');
            });
        },
      }),
      Image.configure({
        allowBase64: true,
      }),
    ],
    content: initialContent,
    immediatelyRender: false,
    onCreate: ({ editor }) => {
      setCharCount(editor.storage.characterCount.characters());
    },
    onUpdate: ({ editor }) => {
      setCharCount(editor.storage.characterCount.characters());
    },
  });

  const { isPending, mutate } = useSavePressReleaseMutation();
  const initialContentStr =
    typeof initialContent === 'string' ? initialContent : JSON.stringify(initialContent);
  const [, setLastSavedData] = useState({ title: initialTitle, content: initialContentStr });
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);

  // 最新ステートをRefに保持
  const currentStateRef = useRef({ title, editor, charCount, isPending });
  useEffect(() => {
    currentStateRef.current = { title, editor, charCount, isPending };
  }, [title, editor, charCount, isPending]);

  const requestSave = useCallback(() => {
    const state = currentStateRef.current;
    if (!state.editor || state.isPending) return;

    const currentContent = JSON.stringify(state.editor.getJSON());
    
    // 文字数制限オーバー時は自動保存しない
    if (state.title.length > MAX_CHAR_TITLE || state.charCount > MAX_CHAR_MAIN) {
      return;
    }

    setLastSavedData((prev) => {
      // 変更がない場合はスキップ (Phase 3)
      if (prev.title === state.title && prev.content === currentContent) {
        return prev;
      }

      console.log('save');
      setLastSavedAt(new Date());
      mutate({
        title: state.title,
        content: currentContent,
      });

      // 最後に保存した内容を更新
      return { title: state.title, content: currentContent };
    });
  }, [mutate, MAX_CHAR_TITLE, MAX_CHAR_MAIN]);

  useEffect(() => {
    requestSaveRef.current = requestSave;
  }, [requestSave]);

  // 5秒おきのオートセーブ (Phase 1)
  useEffect(() => {
    const intervalId = setInterval(() => {
      requestSaveRef.current?.();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // 画像挿入時の自動保存用イベントリスナー（ref をレンダー外で参照するため）
  useEffect(() => {
    const handler = () => requestSaveRef.current?.();
    window.addEventListener('editor-request-save', handler);
    return () => window.removeEventListener('editor-request-save', handler);
  }, []);

  const handleSave = () => {
    if (!editor) return;

    //文字数制限のチェック
    if (title.length > MAX_CHAR_TITLE) {
      setValidationError(`タイトルは${MAX_CHAR_TITLE}文字以内にしてください`);
      return;
    }
    if (charCount > MAX_CHAR_MAIN) {
      setValidationError(`本文は${MAX_CHAR_MAIN}文字以内で入力してください`);
      return;
    }
    setValidationError('');

    const currentContent = JSON.stringify(editor.getJSON());
    setLastSavedAt(new Date());
    mutate({
      title,
      content: currentContent,
    });
    setLastSavedData({ title, content: currentContent });
  };

  const openLinkDialog = useCallback(() => {
    if (!editor) return;

    const { from, to, empty } = editor.state.selection;
    const existingLink = editor.getAttributes('link');
    const selectedText = empty ? '' : editor.state.doc.textBetween(from, to, '');

    setLinkDialog({
      isOpen: true,
      url: existingLink.href ?? '',
      displayText: selectedText,
      isEdit: !!existingLink.href,
    });
  }, [editor]);

  const applyLink = useCallback(() => {
    if (!editor) return;

    const { url, displayText } = linkDialog;
    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      editor.chain().focus().unsetLink().run();
      setLinkDialog({ isOpen: false, url: '', displayText: '', isEdit: false });
      return;
    }

    const { empty } = editor.state.selection;

    if (empty && displayText.trim()) {
      editor.chain().focus()
        .insertContent(`<a href="${trimmedUrl}" target="_blank" rel="noopener noreferrer">${displayText}</a>`)
        .run();
    } else if (!empty) {
      editor.chain().focus().setLink({ href: trimmedUrl }).run();
    }

    setLinkDialog({ isOpen: false, url: '', displayText: '', isEdit: false });
  }, [editor, linkDialog]);

  const removeLink = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().unsetLink().run();
    setLinkDialog({ isOpen: false, url: '', displayText: '', isEdit: false });
  }, [editor]);

  const cancelDialog = useCallback(() => {
    setLinkDialog({ isOpen: false, url: '', displayText: '', isEdit: false });
    editor?.commands.focus();
  }, [editor]);

  const triggerImageUpload = useCallback(() => {
    if (!editor) return;
    fileInputRef.current?.click();
  }, [editor]);

  const openImageUrlDialog = useCallback(() => {
    setImageDialog({ isOpen: true, url: '', alt: '' });
  }, []);

  const applyImageFromUrl = useCallback(() => {
    if (!editor) return;

    const { url, alt } = imageDialog;
    const trimmedUrl = url.trim();

    if (!trimmedUrl) return;

    editor
      .chain()
      .focus()
      .setImage({
        src: trimmedUrl,
        alt: alt.trim() || undefined,
      })
      .run();

    requestSaveRef.current?.();
    setImageDialog({ isOpen: false, url: '', alt: '' });
  }, [editor, imageDialog]);

  const cancelImageDialog = useCallback(() => {
    setImageDialog({ isOpen: false, url: '', alt: '' });
    editor?.commands.focus();
  }, [editor]);

  const handleImageFileSelect = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files?.length || !editor) return;

      const file = files[0];
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        alert('対応形式: JPEG, PNG, GIF, WebP');
        e.target.value = '';
        return;
      }

      try {
        const src = await uploadImage(file);
        editor.chain().focus().setImage({
          src,
          alt: file.name,
        }).run();
        requestSaveRef.current?.();
      } catch (err) {
        alert(err instanceof Error ? err.message : '画像のアップロードに失敗しました');
      }
      e.target.value = '';
    },
    [editor]
  );

  const isLinkActive = editor?.isActive('link') ?? false;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>プレスリリースエディター</h1>
        <div className={styles.headerActions}>
          {isPending ? (
            <span className={styles.savedMessage}>保存中...</span>
          ) : lastSavedAt ? (
            <span className={styles.savedMessage}>
              {lastSavedAt.toLocaleTimeString('ja-JP')}に保存しました
            </span>
          ) : null}
          <button onClick={handleSave} className={styles.saveButton} disabled={isPending}>
            保存
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.editorWrapper}>
          <div className={styles.titleInputWrapper}>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                const newValue = e.target.value
                //if (newValue.length <= MAX_CHAR_TITLE) { // ← 文字数制限
                setTitle(newValue)
                //}
              }}
              placeholder="タイトルを入力してください"
              className={styles.titleInput}
            />
          </div>
          {validationError && (
            <div style={{ color: 'red', marginTop: 4 }}>
              {validationError}
            </div>
          )}
          <div className={styles.toolbar}>
            <div>
              本文文字数: {charCount} / {MAX_CHAR_MAIN}
            </div>
            <div>
              タイトル文字数: {title?.length} / {MAX_CHAR_TITLE}
            </div>
            <button
              type="button"
              onClick={openLinkDialog}
              className={`${styles.toolbarButton} ${isLinkActive ? styles.toolbarButtonActive : ''}`}
              title="リンクを挿入・編集"
              aria-label="リンクを挿入"
            >
              <LinkIcon />
              <span className={styles.toolbarButtonLabel}>リンク</span>
            </button>

            {isLinkActive && (
              <button
                type="button"
                onClick={removeLink}
                className={`${styles.toolbarButton} ${styles.toolbarButtonDanger}`}
                title="リンクを削除"
                aria-label="リンクを削除"
              >
                <UnlinkIcon />
                <span className={styles.toolbarButtonLabel}>リンク解除</span>
              </button>
            )}
            <button
              type="button"
              onClick={triggerImageUpload}
              className={styles.toolbarButton}
              title="画像をアップロード"
              aria-label="画像をアップロード"
              disabled={!editor}
            >
              <ImageIcon />
              <span className={styles.toolbarButtonLabel}>画像</span>
            </button>
            <button
              type="button"
              onClick={openImageUrlDialog}
              className={styles.toolbarButton}
              title="URLから画像を挿入"
              aria-label="URLから画像を挿入"
              disabled={!editor}
            >
              <ImageIcon />
              <span className={styles.toolbarButtonLabel}>画像URL</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleImageFileSelect}
              className={styles.hiddenFileInput}
              aria-hidden="true"
            />
          </div>
          <div className={styles.toolbar}>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`${styles.toolbarButton} ${editor?.isActive('bold') ? styles.toolbarButtonActive : ''}`}
              title="太字 (Ctrl+B)"
              disabled={!editor}
            >
              太字
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`${styles.toolbarButton} ${editor?.isActive('italic') ? styles.toolbarButtonActive : ''}`}
              title="斜体 (Ctrl+I)"
              disabled={!editor}
            >
              斜体
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleUnderline().run()}
              className={`${styles.toolbarButton} ${editor?.isActive('underline') ? styles.toolbarButtonActive : ''}`}
              title="下線"
              disabled={!editor}
            >
              下線
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={`${styles.toolbarButton} ${editor?.isActive('bulletList') ? styles.toolbarButtonActive : ''}`}
              title="箇条書き (Ctrl+Shift+8)"
              disabled={!editor}
            >
              箇条書き
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className={`${styles.toolbarButton} ${editor?.isActive('orderedList') ? styles.toolbarButtonActive : ''}`}
              title="番号付きリスト (Ctrl+Shift+7)"
              disabled={!editor}
            >
              番号付き
            </button>
          </div>
          <EditorContent editor={editor} className={styles.tiptap} />
        </div>
      </main>

      {imageDialog.isOpen && (
        <div className={styles.dialogOverlay} onClick={cancelImageDialog}>
          <div
            className={styles.dialog}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="URLから画像を挿入"
          >
            <div className={styles.dialogHeader}>
              <h2 className={styles.dialogTitle}>URLから画像を挿入</h2>
              <button
                type="button"
                onClick={cancelImageDialog}
                className={styles.dialogCloseButton}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className={styles.dialogBody}>
              <div className={styles.formGroup}>
                <label htmlFor="image-url" className={styles.formLabel}>
                  画像URL <span className={styles.required}>*</span>
                </label>
                <input
                  id="image-url"
                  type="url"
                  value={imageDialog.url}
                  onChange={(e) =>
                    setImageDialog((prev) => ({ ...prev, url: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') applyImageFromUrl();
                    if (e.key === 'Escape') cancelImageDialog();
                  }}
                  placeholder="https://example.com/image.png"
                  className={styles.formInput}
                  autoFocus
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="image-alt" className={styles.formLabel}>
                  代替テキスト（alt）
                </label>
                <input
                  id="image-alt"
                  type="text"
                  value={imageDialog.alt}
                  onChange={(e) =>
                    setImageDialog((prev) => ({ ...prev, alt: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') applyImageFromUrl();
                    if (e.key === 'Escape') cancelImageDialog();
                  }}
                  placeholder="画像の説明（任意）"
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.dialogFooter}>
              <button type="button" onClick={cancelImageDialog} className={styles.buttonSecondary}>
                キャンセル
              </button>
              <button
                type="button"
                onClick={applyImageFromUrl}
                className={styles.buttonPrimary}
                disabled={!imageDialog.url.trim()}
              >
                挿入
              </button>
            </div>
          </div>
        </div>
      )}

      {linkDialog.isOpen && (
        <div className={styles.dialogOverlay} onClick={cancelDialog}>
          <div
            className={styles.dialog}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="リンクの挿入"
          >
            <div className={styles.dialogHeader}>
              <h2 className={styles.dialogTitle}>
                {linkDialog.isEdit ? 'リンクを編集' : 'リンクを挿入'}
              </h2>
              <button
                type="button"
                onClick={cancelDialog}
                className={styles.dialogCloseButton}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>

            <div className={styles.dialogBody}>
              {!linkDialog.isEdit && (
                <div className={styles.formGroup}>
                  <label htmlFor="link-display-text" className={styles.formLabel}>
                    表示テキスト
                  </label>
                  <input
                    id="link-display-text"
                    type="text"
                    value={linkDialog.displayText}
                    onChange={(e) =>
                      setLinkDialog((prev) => ({ ...prev, displayText: e.target.value }))
                    }
                    placeholder="リンクとして表示するテキスト"
                    className={styles.formInput}
                  />
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="link-url" className={styles.formLabel}>
                  URL <span className={styles.required}>*</span>
                </label>
                <input
                  id="link-url"
                  type="url"
                  value={linkDialog.url}
                  onChange={(e) =>
                    setLinkDialog((prev) => ({ ...prev, url: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') applyLink();
                    if (e.key === 'Escape') cancelDialog();
                  }}
                  placeholder="https://example.com"
                  className={styles.formInput}
                  autoFocus
                />
              </div>
            </div>

            <div className={styles.dialogFooter}>
              <button type="button" onClick={cancelDialog} className={styles.buttonSecondary}>
                キャンセル
              </button>
              {linkDialog.isEdit && (
                <button type="button" onClick={removeLink} className={styles.buttonDanger}>
                  リンク削除
                </button>
              )}
              <button
                type="button"
                onClick={applyLink}
                className={styles.buttonPrimary}
                disabled={!linkDialog.url.trim()}
              >
                {linkDialog.isEdit ? '更新' : '挿入'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function UnlinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
      <path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
      <line x1="8" y1="2" x2="8" y2="5" />
      <line x1="2" y1="8" x2="5" y2="8" />
      <line x1="16" y1="19" x2="16" y2="22" />
      <line x1="19" y1="16" x2="22" y2="16" />
    </svg>
  );
}
