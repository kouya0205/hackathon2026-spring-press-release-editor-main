(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/editor/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonDanger": "page-module__kqJ0Ja__buttonDanger",
  "buttonPrimary": "page-module__kqJ0Ja__buttonPrimary",
  "buttonSecondary": "page-module__kqJ0Ja__buttonSecondary",
  "container": "page-module__kqJ0Ja__container",
  "dialog": "page-module__kqJ0Ja__dialog",
  "dialogBody": "page-module__kqJ0Ja__dialogBody",
  "dialogCloseButton": "page-module__kqJ0Ja__dialogCloseButton",
  "dialogFooter": "page-module__kqJ0Ja__dialogFooter",
  "dialogHeader": "page-module__kqJ0Ja__dialogHeader",
  "dialogOverlay": "page-module__kqJ0Ja__dialogOverlay",
  "dialogTitle": "page-module__kqJ0Ja__dialogTitle",
  "editorLink": "page-module__kqJ0Ja__editorLink",
  "editorWrapper": "page-module__kqJ0Ja__editorWrapper",
  "error": "page-module__kqJ0Ja__error",
  "formGroup": "page-module__kqJ0Ja__formGroup",
  "formInput": "page-module__kqJ0Ja__formInput",
  "formLabel": "page-module__kqJ0Ja__formLabel",
  "header": "page-module__kqJ0Ja__header",
  "headerActions": "page-module__kqJ0Ja__headerActions",
  "hiddenFileInput": "page-module__kqJ0Ja__hiddenFileInput",
  "loading": "page-module__kqJ0Ja__loading",
  "main": "page-module__kqJ0Ja__main",
  "required": "page-module__kqJ0Ja__required",
  "saveButton": "page-module__kqJ0Ja__saveButton",
  "savedMessage": "page-module__kqJ0Ja__savedMessage",
  "tiptap": "page-module__kqJ0Ja__tiptap",
  "title": "page-module__kqJ0Ja__title",
  "titleInput": "page-module__kqJ0Ja__titleInput",
  "titleInputWrapper": "page-module__kqJ0Ja__titleInputWrapper",
  "toolbar": "page-module__kqJ0Ja__toolbar",
  "toolbarButton": "page-module__kqJ0Ja__toolbarButton",
  "toolbarButtonActive": "page-module__kqJ0Ja__toolbarButtonActive",
  "toolbarButtonDanger": "page-module__kqJ0Ja__toolbarButtonDanger",
  "toolbarButtonLabel": "page-module__kqJ0Ja__toolbarButtonLabel",
});
}),
"[project]/app/editor/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/nextjs/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nextjs/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@tanstack/react-query'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-document'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-heading'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-paragraph'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-bold'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-text'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-link'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-character-count'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-italic'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-underline'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-list'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-image'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/extension-file-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/editor/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PRESS_RELEASE_ID = 1;
const queryKey = [
    'press-release',
    PRESS_RELEASE_ID
];
const BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8080';
const ALLOWED_IMAGE_TYPES = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp'
];
/**
 * 画像をサーバーにアップロードし、長辺600px以下にリサイズされた data URL を取得する
 */ async function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch(`${BASE_URL}/images/upload`, {
        method: 'POST',
        body: formData
    });
    if (!response.ok) {
        const data = await response.json().catch(()=>({}));
        throw new Error(data.message ?? '画像のアップロードに失敗しました');
    }
    const data = await response.json();
    return data.src;
}
function usePressReleaseQuery() {
    _s();
    return useQuery({
        queryKey,
        queryFn: {
            "usePressReleaseQuery.useQuery": async ()=>{
                const response = await fetch(`${BASE_URL}/press-releases/${PRESS_RELEASE_ID}`);
                if (!response.ok) {
                    throw new Error(`HTTPエラー: ${response.status}`);
                }
                return response.json();
            }
        }["usePressReleaseQuery.useQuery"]
    });
}
_s(usePressReleaseQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        useQuery
    ];
});
function useSavePressReleaseMutation() {
    _s1();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: {
            "useSavePressReleaseMutation.useMutation": async (data)=>{
                const response = await fetch(`${BASE_URL}/press-releases/${PRESS_RELEASE_ID}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    throw new Error('保存に失敗しました');
                }
                return response.json();
            }
        }["useSavePressReleaseMutation.useMutation"],
        onSuccess: {
            "useSavePressReleaseMutation.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey
                });
            }
        }["useSavePressReleaseMutation.useMutation"],
        onError: {
            "useSavePressReleaseMutation.useMutation": (error)=>{
                alert(`エラー: ${error.message}`);
            }
        }["useSavePressReleaseMutation.useMutation"]
    });
}
_s1(useSavePressReleaseMutation, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        useQueryClient,
        useMutation
    ];
});
function EditorPage() {
    _s2();
    const { data, isPending, isError } = usePressReleaseQuery();
    if (isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "読み込み中..."
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/editor/page.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    if (isError || !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                children: "データの読み込みに失敗しました"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/editor/page.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Editor, {
        initialTitle: data.title,
        initialContent: JSON.parse(data.content)
    }, void 0, false, {
        fileName: "[project]/app/editor/page.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
_s2(EditorPage, "zcWbUvEsK4VjDNRFRrO27MRDt2s=", false, function() {
    return [
        usePressReleaseQuery
    ];
});
_c = EditorPage;
function Editor({ initialTitle, initialContent }) {
    _s3();
    const MAX_CHAR_TITLE = 100;
    const MAX_CHAR_MAIN = 500;
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTitle);
    const [charCount, setCharCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [linkDialog, setLinkDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        url: '',
        displayText: '',
        isEdit: false
    });
    const [imageDialog, setImageDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        url: '',
        alt: ''
    });
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestSaveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const editor = useEditor({
        extensions: [
            Document,
            Heading,
            Paragraph,
            Text,
            Link.configure({
                openOnClick: true,
                HTMLAttributes: {
                    class: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorLink,
                    rel: 'noopener noreferrer',
                    target: '_blank'
                }
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
                allowedMimeTypes: [
                    'image/png',
                    'image/jpeg',
                    'image/gif'
                ],
                onDrop: {
                    "Editor.useEditor[editor]": (currentEditor, files, pos)=>{
                        const file = files[0];
                        if (!file) return;
                        uploadImage(file).then({
                            "Editor.useEditor[editor]": (src)=>{
                                currentEditor.chain().insertContentAt(pos, {
                                    type: 'image',
                                    attrs: {
                                        src
                                    }
                                }).focus().run();
                                window.dispatchEvent(new CustomEvent('editor-request-save'));
                            }
                        }["Editor.useEditor[editor]"]).catch({
                            "Editor.useEditor[editor]": (err)=>{
                                alert(err instanceof Error ? err.message : '画像のアップロードに失敗しました');
                            }
                        }["Editor.useEditor[editor]"]);
                    }
                }["Editor.useEditor[editor]"],
                onPaste: {
                    "Editor.useEditor[editor]": (currentEditor, files, htmlContent)=>{
                        if (htmlContent) return false;
                        const file = files[0];
                        if (!file) return;
                        uploadImage(file).then({
                            "Editor.useEditor[editor]": (src)=>{
                                currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
                                    type: 'image',
                                    attrs: {
                                        src
                                    }
                                }).focus().run();
                                window.dispatchEvent(new CustomEvent('editor-request-save'));
                            }
                        }["Editor.useEditor[editor]"]).catch({
                            "Editor.useEditor[editor]": (err)=>{
                                alert(err instanceof Error ? err.message : '画像のアップロードに失敗しました');
                            }
                        }["Editor.useEditor[editor]"]);
                    }
                }["Editor.useEditor[editor]"]
            }),
            Image.configure({
                allowBase64: true
            })
        ],
        content: initialContent,
        immediatelyRender: false,
        onCreate: {
            "Editor.useEditor[editor]": ({ editor })=>{
                setCharCount(editor.storage.characterCount.characters());
            }
        }["Editor.useEditor[editor]"],
        onUpdate: {
            "Editor.useEditor[editor]": ({ editor })=>{
                setCharCount(editor.storage.characterCount.characters());
            }
        }["Editor.useEditor[editor]"]
    });
    const { isPending, mutate } = useSavePressReleaseMutation();
    const initialContentStr = typeof initialContent === 'string' ? initialContent : JSON.stringify(initialContent);
    const [, setLastSavedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: initialTitle,
        content: initialContentStr
    });
    const [lastSavedAt, setLastSavedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 最新ステートをRefに保持
    const currentStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        title,
        editor,
        charCount,
        isPending
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            currentStateRef.current = {
                title,
                editor,
                charCount,
                isPending
            };
        }
    }["Editor.useEffect"], [
        title,
        editor,
        charCount,
        isPending
    ]);
    const requestSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[requestSave]": ()=>{
            const state = currentStateRef.current;
            if (!state.editor || state.isPending) return;
            const currentContent = JSON.stringify(state.editor.getJSON());
            // 文字数制限オーバー時は自動保存しない
            if (state.title.length > MAX_CHAR_TITLE || state.charCount > MAX_CHAR_MAIN) {
                return;
            }
            setLastSavedData({
                "Editor.useCallback[requestSave]": (prev)=>{
                    // 変更がない場合はスキップ (Phase 3)
                    if (prev.title === state.title && prev.content === currentContent) {
                        return prev;
                    }
                    console.log('save');
                    setLastSavedAt(new Date());
                    mutate({
                        title: state.title,
                        content: currentContent
                    });
                    // 最後に保存した内容を更新
                    return {
                        title: state.title,
                        content: currentContent
                    };
                }
            }["Editor.useCallback[requestSave]"]);
        }
    }["Editor.useCallback[requestSave]"], [
        mutate,
        MAX_CHAR_TITLE,
        MAX_CHAR_MAIN
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            requestSaveRef.current = requestSave;
        }
    }["Editor.useEffect"], [
        requestSave
    ]);
    // 5秒おきのオートセーブ (Phase 1)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            const intervalId = setInterval({
                "Editor.useEffect.intervalId": ()=>{
                    requestSaveRef.current?.();
                }
            }["Editor.useEffect.intervalId"], 5000);
            return ({
                "Editor.useEffect": ()=>clearInterval(intervalId)
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], []);
    // 画像挿入時の自動保存用イベントリスナー（ref をレンダー外で参照するため）
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Editor.useEffect": ()=>{
            const handler = {
                "Editor.useEffect.handler": ()=>requestSaveRef.current?.()
            }["Editor.useEffect.handler"];
            window.addEventListener('editor-request-save', handler);
            return ({
                "Editor.useEffect": ()=>window.removeEventListener('editor-request-save', handler)
            })["Editor.useEffect"];
        }
    }["Editor.useEffect"], []);
    const handleSave = ()=>{
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
            content: currentContent
        });
        setLastSavedData({
            title,
            content: currentContent
        });
    };
    const openLinkDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[openLinkDialog]": ()=>{
            if (!editor) return;
            const { from, to, empty } = editor.state.selection;
            const existingLink = editor.getAttributes('link');
            const selectedText = empty ? '' : editor.state.doc.textBetween(from, to, '');
            setLinkDialog({
                isOpen: true,
                url: existingLink.href ?? '',
                displayText: selectedText,
                isEdit: !!existingLink.href
            });
        }
    }["Editor.useCallback[openLinkDialog]"], [
        editor
    ]);
    const applyLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[applyLink]": ()=>{
            if (!editor) return;
            const { url, displayText } = linkDialog;
            const trimmedUrl = url.trim();
            if (!trimmedUrl) {
                editor.chain().focus().unsetLink().run();
                setLinkDialog({
                    isOpen: false,
                    url: '',
                    displayText: '',
                    isEdit: false
                });
                return;
            }
            const { empty } = editor.state.selection;
            if (empty && displayText.trim()) {
                editor.chain().focus().insertContent(`<a href="${trimmedUrl}" target="_blank" rel="noopener noreferrer">${displayText}</a>`).run();
            } else if (!empty) {
                editor.chain().focus().setLink({
                    href: trimmedUrl
                }).run();
            }
            setLinkDialog({
                isOpen: false,
                url: '',
                displayText: '',
                isEdit: false
            });
        }
    }["Editor.useCallback[applyLink]"], [
        editor,
        linkDialog
    ]);
    const removeLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[removeLink]": ()=>{
            if (!editor) return;
            editor.chain().focus().unsetLink().run();
            setLinkDialog({
                isOpen: false,
                url: '',
                displayText: '',
                isEdit: false
            });
        }
    }["Editor.useCallback[removeLink]"], [
        editor
    ]);
    const cancelDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[cancelDialog]": ()=>{
            setLinkDialog({
                isOpen: false,
                url: '',
                displayText: '',
                isEdit: false
            });
            editor?.commands.focus();
        }
    }["Editor.useCallback[cancelDialog]"], [
        editor
    ]);
    const triggerImageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[triggerImageUpload]": ()=>{
            if (!editor) return;
            fileInputRef.current?.click();
        }
    }["Editor.useCallback[triggerImageUpload]"], [
        editor
    ]);
    const openImageUrlDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[openImageUrlDialog]": ()=>{
            setImageDialog({
                isOpen: true,
                url: '',
                alt: ''
            });
        }
    }["Editor.useCallback[openImageUrlDialog]"], []);
    const applyImageFromUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[applyImageFromUrl]": ()=>{
            if (!editor) return;
            const { url, alt } = imageDialog;
            const trimmedUrl = url.trim();
            if (!trimmedUrl) return;
            editor.chain().focus().setImage({
                src: trimmedUrl,
                alt: alt.trim() || undefined
            }).run();
            requestSaveRef.current?.();
            setImageDialog({
                isOpen: false,
                url: '',
                alt: ''
            });
        }
    }["Editor.useCallback[applyImageFromUrl]"], [
        editor,
        imageDialog
    ]);
    const cancelImageDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[cancelImageDialog]": ()=>{
            setImageDialog({
                isOpen: false,
                url: '',
                alt: ''
            });
            editor?.commands.focus();
        }
    }["Editor.useCallback[cancelImageDialog]"], [
        editor
    ]);
    const handleImageFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Editor.useCallback[handleImageFileSelect]": async (e)=>{
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
                    alt: file.name
                }).run();
                requestSaveRef.current?.();
            } catch (err) {
                alert(err instanceof Error ? err.message : '画像のアップロードに失敗しました');
            }
            e.target.value = '';
        }
    }["Editor.useCallback[handleImageFileSelect]"], [
        editor
    ]);
    const isLinkActive = editor?.isActive('link') ?? false;
    //HTML関連
    const handleDragOver = (event)=>{
        event.preventDefault();
    };
    const handleDrop = (event)=>{
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (!file) return;
        if (file.type === 'text/html') {
            const reader = new FileReader();
            reader.onload = (e)=>{
                const htmlContent = e.target.result;
                editor?.commands.setContent(htmlContent, false); // false で HTML として解釈
            };
            reader.readAsText(file);
        } else {
            alert('HTMLファイルをドロップしてください');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "プレスリリースエディター"
                    }, void 0, false, {
                        fileName: "[project]/app/editor/page.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerActions,
                        children: [
                            isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].savedMessage,
                                children: "保存中..."
                            }, void 0, false, {
                                fileName: "[project]/app/editor/page.tsx",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this) : lastSavedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].savedMessage,
                                children: [
                                    lastSavedAt.toLocaleTimeString('ja-JP'),
                                    "に保存しました"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/editor/page.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveButton,
                                disabled: isPending,
                                children: "保存"
                            }, void 0, false, {
                                fileName: "[project]/app/editor/page.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/editor/page.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editorWrapper,
                    onDrop: handleDrop,
                    onDragOver: handleDragOver,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleInputWrapper,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: title,
                                onChange: (e)=>{
                                    const newValue = e.target.value;
                                    //if (newValue.length <= MAX_CHAR_TITLE) { // ← 文字数制限
                                    setTitle(newValue);
                                //}
                                },
                                placeholder: "タイトルを入力してください",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleInput
                            }, void 0, false, {
                                fileName: "[project]/app/editor/page.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        validationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: 'red',
                                marginTop: 4
                            },
                            children: validationError
                        }, void 0, false, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 485,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "本文文字数: ",
                                        charCount,
                                        " / ",
                                        MAX_CHAR_MAIN
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "タイトル文字数: ",
                                        title?.length,
                                        " / ",
                                        MAX_CHAR_TITLE
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: openLinkDialog,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${isLinkActive ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonActive : ''}`,
                                    title: "リンクを挿入・編集",
                                    "aria-label": "リンクを挿入",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkIcon, {}, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonLabel,
                                            children: "リンク"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this),
                                isLinkActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: removeLink,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonDanger}`,
                                    title: "リンクを削除",
                                    "aria-label": "リンクを削除",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UnlinkIcon, {}, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonLabel,
                                            children: "リンク解除"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: triggerImageUpload,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                    title: "画像をアップロード",
                                    "aria-label": "画像をアップロード",
                                    disabled: !editor,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageIcon, {}, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonLabel,
                                            children: "画像"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: openImageUrlDialog,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton,
                                    title: "URLから画像を挿入",
                                    "aria-label": "URLから画像を挿入",
                                    disabled: !editor,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageIcon, {}, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonLabel,
                                            children: "画像URL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: "image/jpeg,image/png,image/gif,image/webp",
                                    onChange: handleImageFileSelect,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hiddenFileInput,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>editor?.chain().focus().toggleBold().run(),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${editor?.isActive('bold') ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonActive : ''}`,
                                    title: "太字 (Ctrl+B)",
                                    disabled: !editor,
                                    children: "太字"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>editor?.chain().focus().toggleItalic().run(),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${editor?.isActive('italic') ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonActive : ''}`,
                                    title: "斜体 (Ctrl+I)",
                                    disabled: !editor,
                                    children: "斜体"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>editor?.chain().focus().toggleUnderline().run(),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${editor?.isActive('underline') ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonActive : ''}`,
                                    title: "下線",
                                    disabled: !editor,
                                    children: "下線"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 569,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>editor?.chain().focus().toggleBulletList().run(),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${editor?.isActive('bulletList') ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonActive : ''}`,
                                    title: "箇条書き (Ctrl+Shift+8)",
                                    disabled: !editor,
                                    children: "箇条書き"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 578,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>editor?.chain().focus().toggleOrderedList().run(),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButton} ${editor?.isActive('orderedList') ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbarButtonActive : ''}`,
                                    title: "番号付きリスト (Ctrl+Shift+7)",
                                    disabled: !editor,
                                    children: "番号付き"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditorContent, {
                            editor: editor,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tiptap
                        }, void 0, false, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editor/page.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            imageDialog.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogOverlay,
                onClick: cancelImageDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialog,
                    onClick: (e)=>e.stopPropagation(),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "URLから画像を挿入",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogTitle,
                                    children: "URLから画像を挿入"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 611,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cancelImageDialog,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogCloseButton,
                                    "aria-label": "閉じる",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 612,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 610,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogBody,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "image-url",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                            children: [
                                                "画像URL ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "image-url",
                                            type: "url",
                                            value: imageDialog.url,
                                            onChange: (e)=>setImageDialog((prev)=>({
                                                        ...prev,
                                                        url: e.target.value
                                                    })),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter') applyImageFromUrl();
                                                if (e.key === 'Escape') cancelImageDialog();
                                            },
                                            placeholder: "https://example.com/image.png",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 627,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "image-alt",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                            children: "代替テキスト（alt）"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "image-alt",
                                            type: "text",
                                            value: imageDialog.alt,
                                            onChange: (e)=>setImageDialog((prev)=>({
                                                        ...prev,
                                                        alt: e.target.value
                                                    })),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter') applyImageFromUrl();
                                                if (e.key === 'Escape') cancelImageDialog();
                                            },
                                            placeholder: "画像の説明（任意）",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 647,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 622,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogFooter,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cancelImageDialog,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonSecondary,
                                    children: "キャンセル"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 665,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: applyImageFromUrl,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonPrimary,
                                    disabled: !imageDialog.url.trim(),
                                    children: "挿入"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 668,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 664,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editor/page.tsx",
                    lineNumber: 603,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 602,
                columnNumber: 9
            }, this),
            linkDialog.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogOverlay,
                onClick: cancelDialog,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialog,
                    onClick: (e)=>e.stopPropagation(),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "リンクの挿入",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogTitle,
                                    children: linkDialog.isEdit ? 'リンクを編集' : 'リンクを挿入'
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 691,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cancelDialog,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogCloseButton,
                                    "aria-label": "閉じる",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 690,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogBody,
                            children: [
                                !linkDialog.isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "link-display-text",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                            children: "表示テキスト"
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 707,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "link-display-text",
                                            type: "text",
                                            value: linkDialog.displayText,
                                            onChange: (e)=>setLinkDialog((prev)=>({
                                                        ...prev,
                                                        displayText: e.target.value
                                                    })),
                                            placeholder: "リンクとして表示するテキスト",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 710,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 706,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "link-url",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                            children: [
                                                "URL ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/editor/page.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 724,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "link-url",
                                            type: "url",
                                            value: linkDialog.url,
                                            onChange: (e)=>setLinkDialog((prev)=>({
                                                        ...prev,
                                                        url: e.target.value
                                                    })),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter') applyLink();
                                                if (e.key === 'Escape') cancelDialog();
                                            },
                                            placeholder: "https://example.com",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/editor/page.tsx",
                                            lineNumber: 727,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 723,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 704,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialogFooter,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: cancelDialog,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonSecondary,
                                    children: "キャンセル"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this),
                                linkDialog.isEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: removeLink,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonDanger,
                                    children: "リンク削除"
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 750,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: applyLink,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$editor$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonPrimary,
                                    disabled: !linkDialog.url.trim(),
                                    children: linkDialog.isEdit ? '更新' : '挿入'
                                }, void 0, false, {
                                    fileName: "[project]/app/editor/page.tsx",
                                    lineNumber: 754,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/editor/page.tsx",
                            lineNumber: 745,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/editor/page.tsx",
                    lineNumber: 683,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 682,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/page.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
_s3(Editor, "mV9um6LfIQ4IJX2jmWfr5hMShHs=", false, function() {
    return [
        useEditor,
        useSavePressReleaseMutation
    ];
});
_c1 = Editor;
function ImageIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "18",
                height: "18",
                x: "3",
                y: "3",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 773,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "9",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 774,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/page.tsx",
        lineNumber: 772,
        columnNumber: 5
    }, this);
}
_c2 = ImageIcon;
function LinkIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 784,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/page.tsx",
        lineNumber: 782,
        columnNumber: 5
    }, this);
}
_c3 = LinkIcon;
function UnlinkIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 792,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 793,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "2",
                x2: "8",
                y2: "5"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 794,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "8",
                x2: "5",
                y2: "8"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 795,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "19",
                x2: "16",
                y2: "22"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 796,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nextjs$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "19",
                y1: "16",
                x2: "22",
                y2: "16"
            }, void 0, false, {
                fileName: "[project]/app/editor/page.tsx",
                lineNumber: 797,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/editor/page.tsx",
        lineNumber: 791,
        columnNumber: 5
    }, this);
}
_c4 = UnlinkIcon;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "EditorPage");
__turbopack_context__.k.register(_c1, "Editor");
__turbopack_context__.k.register(_c2, "ImageIcon");
__turbopack_context__.k.register(_c3, "LinkIcon");
__turbopack_context__.k.register(_c4, "UnlinkIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_app_editor_c931581d._.js.map