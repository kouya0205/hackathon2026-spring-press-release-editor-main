'use client';

import { useState, useCallback, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Bold from '@tiptap/extension-bold';
import Text from '@tiptap/extension-text';
import Link from '@tiptap/extension-link';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import { BulletList, OrderedList, ListItem } from '@tiptap/extension-list';
import Image from '@tiptap/extension-image';
import type { PressRelease } from '@/lib/types';
import styles from './page.module.css';

const PRESS_RELEASE_ID = 1;
const queryKey = ['press-release', PRESS_RELEASE_ID];

function usePressReleaseQuery() {
  return useQuery({
    queryKey,
    queryFn: async (): Promise<PressRelease> => {
      const response = await fetch(`/api/press-releases/${PRESS_RELEASE_ID}`);
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
      const response = await fetch(`/api/press-releases/${PRESS_RELEASE_ID}`, {
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
  const [title, setTitle] = useState(initialTitle);
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
      Bold,
      Italic,
      Underline,
      BulletList,
      OrderedList,
      ListItem,
      Image.configure({
        allowBase64: true,
      }),
    ],
    content: initialContent,
    immediatelyRender: false
  });

  const { isPending, mutate } = useSavePressReleaseMutation();

  const handleSave = () => {
    if (!editor) return;

    mutate({
      title,
      content: JSON.stringify(editor.getJSON()),
    });
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

    setImageDialog({ isOpen: false, url: '', alt: '' });
  }, [editor, imageDialog]);

  const cancelImageDialog = useCallback(() => {
    setImageDialog({ isOpen: false, url: '', alt: '' });
    editor?.commands.focus();
  }, [editor]);

  const handleImageFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files?.length || !editor) return;

      const file = files[0];
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('対応形式: JPEG, PNG, GIF, WebP');
        e.target.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        editor.chain().focus().setImage({
          src: result,
          alt: file.name,
        }).run();
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    },
    [editor]
  );

  const isLinkActive = editor?.isActive('link') ?? false;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>プレスリリースエディター</h1>
        <button onClick={handleSave} className={styles.saveButton} disabled={isPending}>
          {isPending ? '保存中...' : '保存'}
        </button>
      </header>

      <main className={styles.main}>
        <div className={styles.editorWrapper}>
          <div className={styles.titleInputWrapper}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="タイトルを入力してください"
              className={styles.titleInput}
            />
          </div>

          <div className={styles.toolbar}>
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
