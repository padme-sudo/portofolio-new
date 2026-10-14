(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Contact() {
    _s();
    const [sent, setSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get("from_name");
        const email = data.get("reply_to");
        const message = data.get("message");
        // Open the email client as a fallback without a backend:
        window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}?subject=Message from ${name} (${email})&body=${encodeURIComponent(String(message ?? ""))}`;
        setSent(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "w-full py-12 border-t border-[#ffffff10]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-9 sm:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg text-[#A9FF5B] mb-2 shiny-sec",
                    children: "Let's talk"
                }, void 0, false, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-4xl md:text-5xl font-medium text-[#f5f5f5] mb-6",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#a1a1aa]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4",
                                    children: "Have a question or a project in mind? Feel free to reach out."
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Location:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                            className: "text-white hover:text-[#A9FF5B] transition-colors",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: !sent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "from_name",
                                        placeholder: "Name",
                                        required: true,
                                        className: "px-4 py-2 bg-[rgba(20,20,20,0.61)] text-white border border-[rgba(255,255,255,0.08)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9FF5B]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "reply_to",
                                        placeholder: "Email",
                                        required: true,
                                        className: "px-4 py-2 bg-[rgba(20,20,20,0.61)] text-white border border-[rgba(255,255,255,0.08)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9FF5B]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "message",
                                        placeholder: "Message",
                                        rows: 6,
                                        required: true,
                                        className: "px-4 py-2 bg-[rgba(20,20,20,0.61)] text-white border border-[rgba(255,255,255,0.08)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9FF5B] resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-4 py-2 bg-[rgba(255,255,255,0.08)] text-white rounded-lg opacity-70 transition-opacity border border-[rgba(255,255,255,0.08)] hover:opacity-100",
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-center mt-4 text-white text-lg",
                                children: "✅ Thank you for your message! I'll get back to you via email soon."
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Contact.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Contact, "w1r8qcELTw7JaSiaZyfNUqRzIeA=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-[#ffffff10] py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-9 sm:px-0 flex flex-col items-center gap-4 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github,
                            "aria-label": "GitHub",
                            className: "text-[#a1a1aa] hover:text-white transition p-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,20,0.61)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                            "aria-label": "LinkedIn",
                            className: "text-[#a1a1aa] hover:text-white transition p-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,20,0.61)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                            "aria-label": "Email",
                            className: "text-[#a1a1aa] hover:text-white transition p-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(20,20,20,0.61)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#a1a1aa]",
                    children: "Built with Next.js • Styled with Tailwind CSS • Deployed on Vercel"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#a1a1aa]",
                    children: [
                        "Copyright © 2026 ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name,
                        ". All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TechMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TechMarquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/terminal-demo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProfileCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SocialButton({ href, label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        "aria-label": label,
        className: "text-[#a1a1aa] hover:text-white transition duration-300 ease-in-out border border-[rgba(255,255,255,0.08)] p-2 rounded-xl bg-[rgba(20,20,20,0.61)] hover:bg-[rgba(255,255,255,0.08)]",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = SocialButton;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "text-[#f5f5f5] mt-12 md:mt-0 hero-glow",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto space-y-8 md:py-36 pb-14 px-9 sm:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8 lg:gap-10 items-start pt-3 md:pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-xl flex-1 min-w-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$terminal$2d$demo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name,
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].roles.join(" • "),
                            handle: "adityasiagian",
                            status: "Open for work",
                            statusColor: "#A9FF5B",
                            contactText: "Contact",
                            avatarUrl: "/img/adit.jpeg",
                            miniAvatarUrl: "/img/adit.jpeg",
                            theme: "dark",
                            onContactClick: ()=>document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth"
                                })
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-start gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialButton, {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github,
                            label: "GitHub",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialButton, {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                            label: "LinkedIn",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "size-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialButton, {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                            label: "Email",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fill: "currentColor",
                                    d: "m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64Z"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TechMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "SocialButton");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const links = [
    {
        href: "#home",
        label: "Home",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: "#projects",
        label: "Projects",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        href: "#contact",
        label: "Contact",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Navbar() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const nav = document.getElementById("main-nav");
            const maxScroll = 1000;
            let raf = null;
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    if (raf) return;
                    raf = requestAnimationFrame({
                        "Navbar.useEffect.onScroll": ()=>{
                            if (!nav) return;
                            if (window.scrollY > 0) {
                                nav.classList.add("scrolling");
                                const p = 1 - Math.pow(1 - Math.min(window.scrollY / maxScroll, 1), 4);
                                const base = window.innerWidth * 0.8;
                                const target = base - (base - 528) * p;
                                if (window.innerWidth >= 768) nav.style.setProperty("width", `${target}px`);
                            } else {
                                nav.classList.remove("scrolling");
                                nav.style.setProperty("width", "80%");
                            }
                            raf = null;
                        }
                    }["Navbar.useEffect.onScroll"]);
                }
            }["Navbar.useEffect.onScroll"];
            const onClick = {
                "Navbar.useEffect.onClick": (e)=>{
                    const a = e.currentTarget.getAttribute("href");
                    if (!a?.startsWith("#")) return;
                    e.preventDefault();
                    document.getElementById(a.substring(1))?.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }["Navbar.useEffect.onClick"];
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            const anchors = document.querySelectorAll('nav a[href^="#"]');
            anchors.forEach({
                "Navbar.useEffect": (a)=>a.addEventListener("click", onClick)
            }["Navbar.useEffect"]);
            const sections = document.querySelectorAll("section[id]");
            const navLinks = document.querySelectorAll('nav a[href^="#"]');
            const observer = new IntersectionObserver({
                "Navbar.useEffect": (entries)=>{
                    entries.forEach({
                        "Navbar.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                navLinks.forEach({
                                    "Navbar.useEffect": (l)=>l.classList.remove("active")
                                }["Navbar.useEffect"]);
                                document.querySelector(`nav a[href="#${entry.target.getAttribute("id")}"]`)?.classList.add("active");
                            }
                        }
                    }["Navbar.useEffect"]);
                }
            }["Navbar.useEffect"], {
                threshold: 0.4
            });
            sections.forEach({
                "Navbar.useEffect": (s)=>observer.observe(s)
            }["Navbar.useEffect"]);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    anchors.forEach({
                        "Navbar.useEffect": (a)=>a.removeEventListener("click", onClick)
                    }["Navbar.useEffect"]);
                    observer.disconnect();
                    if (raf) cancelAnimationFrame(raf);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            id: "main-nav",
            className: "fixed left-1/2 -translate-x-1/2 z-[100] backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-4 w-[80%] border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto flex justify-center items-center p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6",
                    children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex-1 md:flex-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                className: "flex flex-col items-center gap-1 text-[#a1a1aa] hover:text-white transition-colors text-xs md:text-base relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 scale-0 opacity-0 bg-[#A9FF5B] nav-indicator hidden md:block"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "md:hidden flex items-center justify-center w-6 h-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            width: "24",
                                            height: "24",
                                            fill: "currentColor",
                                            children: l.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 106,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline-block",
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "md:hidden",
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this)
                        }, l.href, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Navbar.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(Navbar, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProfileCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$HugeiconsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/react/dist/esm/HugeiconsIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail01Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Mail01Icon.js [app-client] (ecmascript) <export default as Mail01Icon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const THEMES = {
    dark: {
        '--pc-frame': 'rgba(38, 35, 46, 0.66)',
        '--pc-frame-edge': 'rgba(255, 255, 255, 0.08)',
        '--pc-frame-highlight': 'rgba(255, 255, 255, 0.07)',
        '--pc-frame-shadow': '0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)',
        '--pc-tile': 'linear-gradient(180deg, #3a3644 0%, #27242f 100%)',
        '--pc-tile-edge': 'rgba(255, 255, 255, 0.07)',
        '--pc-tile-highlight': 'rgba(255, 255, 255, 0.12)',
        '--pc-tile-shadow': '0 4px 10px -4px rgba(0, 0, 0, 0.7)',
        '--pc-ink': '#f4f4f5',
        '--pc-muted': 'rgba(244, 244, 245, 0.6)',
        '--pc-hover': 'brightness(1.12)',
        '--pc-press': 'brightness(0.8)',
        '--pc-shade': 'rgba(0, 0, 0, 0.4)'
    },
    light: {
        '--pc-frame': 'rgba(240, 240, 243, 0.8)',
        '--pc-frame-edge': 'rgba(24, 24, 27, 0.07)',
        '--pc-frame-highlight': 'rgba(255, 255, 255, 0.95)',
        '--pc-frame-shadow': '0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)',
        '--pc-tile': 'linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)',
        '--pc-tile-edge': 'rgba(24, 24, 27, 0.08)',
        '--pc-tile-highlight': 'rgba(255, 255, 255, 1)',
        '--pc-tile-shadow': '0 4px 10px -5px rgba(24, 24, 27, 0.25)',
        '--pc-ink': '#27272a',
        '--pc-muted': 'rgba(39, 39, 42, 0.6)',
        '--pc-hover': 'brightness(0.97)',
        '--pc-press': 'brightness(0.92)',
        '--pc-shade': 'rgba(24, 24, 27, 0.14)'
    }
};
const FOILS = {
    dark: {
        '--pc-blend': 'color-dodge',
        '--pc-holo-filter': 'hue-rotate(0deg)',
        '--pc-sheen': 'rgba(255, 255, 255, 0.16)'
    },
    light: {
        '--pc-blend': 'multiply',
        '--pc-holo-filter': 'invert(1) hue-rotate(180deg)',
        '--pc-sheen': 'rgba(255, 255, 255, 0)'
    }
};
const GRAIN = `url("data:image/svg+xml,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='g' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0.55 0 0 0 -0.24 0 0 0 0 1'/></filter><rect width='100%' height='100%' filter='url(#g)'/></svg>")}")`;
const clamp = (value, min, max)=>Math.min(max, Math.max(min, value));
const isDark = (color)=>{
    const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(color).trim());
    if (!match) return null;
    const hex = match[1].length === 3 ? match[1].replace(/./g, (digit)=>digit + digit) : match[1];
    const [r, g, b] = [
        0,
        2,
        4
    ].map((index)=>parseInt(hex.slice(index, index + 2), 16) / 255);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.5;
};
const ProfileCard = ({ avatarUrl = '', iconUrl, miniAvatarUrl, name = 'Javi A. Torres', title = 'Software Engineer', handle = 'javicodes', status = 'Online', statusColor = '#22c55e', contactText = 'Contact', showUserInfo = true, onContactClick, theme = 'dark', backdropColor, radius = 16, holo = 0.8, glare = 0.5, enableTilt = true, tiltStrength = 12, parallax = 8, enableMobileTilt = false, mobileTiltSensitivity = 5, intro = true, className = '' })=>{
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const settings = {
        enableTilt,
        tiltStrength,
        parallax,
        mobileTiltSensitivity,
        intro
    };
    const settingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(settings);
    settingsRef.current = settings;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileCard.useEffect": ()=>{
            const root = rootRef.current;
            if (!root) return;
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const size = {
                width: root.offsetWidth,
                height: root.offsetHeight
            };
            const x = {
                p: 0,
                v: 0,
                target: 0
            };
            const y = {
                p: 0,
                v: 0,
                target: 0
            };
            const light = {
                p: 0,
                target: 0
            };
            let raf = 0;
            let last = 0;
            let slowUntil = 0;
            let touchId = null;
            const write = {
                "ProfileCard.useEffect.write": ()=>{
                    const { enableTilt: tiltOn, tiltStrength: strength, parallax: depth } = settingsRef.current;
                    const angle = tiltOn && !reduced ? strength : 0;
                    const tilt = Math.min(1, Math.hypot(x.p, y.p));
                    const style = root.style;
                    style.setProperty('--pc-light-x', `${((x.p + 1) * 0.5 * size.width).toFixed(1)}px`);
                    style.setProperty('--pc-light-y', `${((y.p + 1) * 0.5 * size.height).toFixed(1)}px`);
                    style.setProperty('--pc-pointer-x', `${((x.p + 1) * 50).toFixed(2)}%`);
                    style.setProperty('--pc-pointer-y', `${((y.p + 1) * 50).toFixed(2)}%`);
                    style.setProperty('--pc-band-x', `${(50 + x.p * 15).toFixed(2)}%`);
                    style.setProperty('--pc-band-y', `${(50 + y.p * 15).toFixed(2)}%`);
                    style.setProperty('--pc-rotate-x', `${(y.p * angle).toFixed(3)}deg`);
                    style.setProperty('--pc-rotate-y', `${(-x.p * angle).toFixed(3)}deg`);
                    style.setProperty('--pc-shift-x', `${(x.p * (reduced ? 0 : depth)).toFixed(2)}px`);
                    style.setProperty('--pc-shift-y', `${(y.p * (reduced ? 0 : depth)).toFixed(2)}px`);
                    style.setProperty('--pc-reach', tilt.toFixed(4));
                    style.setProperty('--pc-tilt', (tilt * light.p).toFixed(4));
                    style.setProperty('--pc-active', light.p.toFixed(4));
                }
            }["ProfileCard.useEffect.write"];
            const frame = {
                "ProfileCard.useEffect.frame": (now)=>{
                    const dt = Math.min(0.05, (now - last) / 1000 || 0);
                    last = now;
                    const slow = now < slowUntil;
                    const stiffness = slow ? 24 : 120;
                    const damping = slow ? 9 : 16;
                    const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
                    const h = dt / steps;
                    for(let i = 0; i < steps; i++){
                        for (const axis of [
                            x,
                            y
                        ]){
                            axis.v += (stiffness * (axis.target - axis.p) - damping * axis.v) * h;
                            axis.p += axis.v * h;
                        }
                    }
                    const tau = light.target > light.p ? 0.18 : slow ? 0.9 : 0.45;
                    light.p += (light.target - light.p) * (1 - Math.exp(-dt / tau));
                    write();
                    const moving = Math.abs(x.target - x.p) > 0.0005 || Math.abs(y.target - y.p) > 0.0005 || Math.abs(x.v) > 0.0005 || Math.abs(y.v) > 0.0005 || Math.abs(light.target - light.p) > 0.002;
                    if (moving) {
                        raf = requestAnimationFrame(frame);
                    } else {
                        x.p = x.target;
                        y.p = y.target;
                        light.p = light.target;
                        write();
                        raf = 0;
                    }
                }
            }["ProfileCard.useEffect.frame"];
            const wake = {
                "ProfileCard.useEffect.wake": ()=>{
                    if (raf) return;
                    last = performance.now();
                    raf = requestAnimationFrame(frame);
                }
            }["ProfileCard.useEffect.wake"];
            const aim = {
                "ProfileCard.useEffect.aim": (nx, ny, on = true)=>{
                    x.target = clamp(nx, -1, 1);
                    y.target = clamp(ny, -1, 1);
                    light.target = on ? 1 : 0;
                    slowUntil = 0;
                    wake();
                }
            }["ProfileCard.useEffect.aim"];
            const aimAt = {
                "ProfileCard.useEffect.aimAt": (event)=>{
                    const rect = root.getBoundingClientRect();
                    if (!rect.width || !rect.height) return;
                    aim((event.clientX - rect.left) / rect.width * 2 - 1, (event.clientY - rect.top) / rect.height * 2 - 1);
                }
            }["ProfileCard.useEffect.aimAt"];
            const release = {
                "ProfileCard.useEffect.release": ()=>aim(0, 0, false)
            }["ProfileCard.useEffect.release"];
            const onEnter = {
                "ProfileCard.useEffect.onEnter": (event)=>{
                    if (event.pointerType === 'mouse') aimAt(event);
                }
            }["ProfileCard.useEffect.onEnter"];
            const onMove = {
                "ProfileCard.useEffect.onMove": (event)=>{
                    if (event.pointerType === 'mouse' || event.pointerId === touchId) aimAt(event);
                }
            }["ProfileCard.useEffect.onMove"];
            const onLeave = {
                "ProfileCard.useEffect.onLeave": (event)=>{
                    if (event.pointerType === 'mouse') release();
                }
            }["ProfileCard.useEffect.onLeave"];
            const onDown = {
                "ProfileCard.useEffect.onDown": (event)=>{
                    if (event.pointerType === 'mouse') return;
                    touchId = event.pointerId;
                    aimAt(event);
                }
            }["ProfileCard.useEffect.onDown"];
            const onUp = {
                "ProfileCard.useEffect.onUp": (event)=>{
                    if (event.pointerId !== touchId) return;
                    touchId = null;
                    release();
                }
            }["ProfileCard.useEffect.onUp"];
            root.addEventListener('pointerenter', onEnter);
            root.addEventListener('pointermove', onMove);
            root.addEventListener('pointerleave', onLeave);
            root.addEventListener('pointerdown', onDown);
            root.addEventListener('pointerup', onUp);
            root.addEventListener('pointercancel', onUp);
            const observer = new ResizeObserver({
                "ProfileCard.useEffect": ()=>{
                    size.width = root.offsetWidth;
                    size.height = root.offsetHeight;
                    write();
                }
            }["ProfileCard.useEffect"]);
            observer.observe(root);
            engineRef.current = {
                aim,
                release,
                write
            };
            if (settingsRef.current.intro && !reduced) {
                x.p = 0.62;
                y.p = -0.55;
                light.p = 1;
                slowUntil = performance.now() + 1400;
                write();
                wake();
            } else {
                write();
            }
            return ({
                "ProfileCard.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    observer.disconnect();
                    root.removeEventListener('pointerenter', onEnter);
                    root.removeEventListener('pointermove', onMove);
                    root.removeEventListener('pointerleave', onLeave);
                    root.removeEventListener('pointerdown', onDown);
                    root.removeEventListener('pointerup', onUp);
                    root.removeEventListener('pointercancel', onUp);
                    engineRef.current = null;
                }
            })["ProfileCard.useEffect"];
        }
    }["ProfileCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileCard.useEffect": ()=>{
            engineRef.current?.write();
        }
    }["ProfileCard.useEffect"], [
        enableTilt,
        tiltStrength,
        parallax
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileCard.useEffect": ()=>{
            const root = rootRef.current;
            if (!root || !enableMobileTilt) return;
            let listening = false;
            const onOrientation = {
                "ProfileCard.useEffect.onOrientation": (event)=>{
                    if (event.beta == null || event.gamma == null) return;
                    const sensitivity = settingsRef.current.mobileTiltSensitivity;
                    engineRef.current?.aim(event.gamma * sensitivity / 150, (event.beta - 20) * sensitivity / 150);
                }
            }["ProfileCard.useEffect.onOrientation"];
            const listen = {
                "ProfileCard.useEffect.listen": ()=>{
                    if (listening) return;
                    listening = true;
                    window.addEventListener('deviceorientation', onOrientation);
                }
            }["ProfileCard.useEffect.listen"];
            const onClick = {
                "ProfileCard.useEffect.onClick": ()=>{
                    const Motion = window.DeviceOrientationEvent;
                    if (Motion && typeof Motion.requestPermission === 'function') {
                        Motion.requestPermission().then({
                            "ProfileCard.useEffect.onClick": (state)=>{
                                if (state === 'granted') listen();
                            }
                        }["ProfileCard.useEffect.onClick"]).catch({
                            "ProfileCard.useEffect.onClick": ()=>{}
                        }["ProfileCard.useEffect.onClick"]);
                    } else {
                        listen();
                    }
                }
            }["ProfileCard.useEffect.onClick"];
            root.addEventListener('click', onClick);
            return ({
                "ProfileCard.useEffect": ()=>{
                    root.removeEventListener('click', onClick);
                    window.removeEventListener('deviceorientation', onOrientation);
                }
            })["ProfileCard.useEffect"];
        }
    }["ProfileCard.useEffect"], [
        enableMobileTilt
    ]);
    const palette = theme === 'light' ? 'light' : 'dark';
    const foil = backdropColor ? isDark(backdropColor) ?? palette === 'dark' ? 'dark' : 'light' : palette;
    const backdrop = backdropColor ? `linear-gradient(180deg, color-mix(in srgb, ${backdropColor}, #ffffff 12%) 0%, color-mix(in srgb, ${backdropColor}, #000000 18%) 100%)` : 'var(--pc-tile)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: `profile-card ${className}`.trim(),
        style: {
            ...THEMES[palette],
            ...FOILS[foil],
            '--pc-radius': `${Math.max(0, radius)}px`,
            '--pc-backdrop': backdrop,
            '--pc-holo': clamp(holo, 0, 1),
            '--pc-glare': clamp(glare, 0, 1),
            '--pc-parallax': `${Math.max(0, parallax)}px`,
            '--pc-status': statusColor,
            '--pc-grain': GRAIN,
            '--pc-pattern': iconUrl ? `url("${iconUrl}")` : 'linear-gradient(#000, #000)',
            '--pc-pattern-size': iconUrl ? '180% auto' : '100% 100%',
            '--pc-holo-gain': iconUrl ? 1.25 : 0.75,
            '--pc-holo-detail': iconUrl && foil === 'dark' ? 1 : 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "profile-card__body",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "profile-card__tile",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "profile-card__sheen"
                        }, void 0, false, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "profile-card__holo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "profile-card__holo-glow"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProfileCard.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "profile-card__holo-shift"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProfileCard.tsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        avatarUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "profile-card__photo",
                            src: avatarUrl,
                            alt: name || '',
                            loading: "lazy",
                            draggable: false
                        }, void 0, false, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        (name || title) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "profile-card__scrim"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProfileCard.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "profile-card__info",
                                    children: [
                                        name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "profile-card__name",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProfileCard.tsx",
                                            lineNumber: 370,
                                            columnNumber: 26
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "profile-card__title",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProfileCard.tsx",
                                            lineNumber: 371,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProfileCard.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "profile-card__tile-rim"
                        }, void 0, false, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProfileCard.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                showUserInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "profile-card__footer",
                    children: [
                        miniAvatarUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "profile-card__avatar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: miniAvatarUrl,
                                alt: "",
                                loading: "lazy",
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/components/ProfileCard.tsx",
                                lineNumber: 382,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 381,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "profile-card__meta",
                            children: [
                                handle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "profile-card__handle",
                                    children: [
                                        "@",
                                        handle
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProfileCard.tsx",
                                    lineNumber: 386,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)),
                                status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "profile-card__status",
                                    children: status
                                }, void 0, false, {
                                    fileName: "[project]/components/ProfileCard.tsx",
                                    lineNumber: 387,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        contactText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "profile-card__contact",
                            onClick: onContactClick,
                            "aria-label": name ? `${contactText} ${name}` : contactText,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$HugeiconsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HugeiconsIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail01Icon$3e$__["Mail01Icon"],
                                    size: 16,
                                    strokeWidth: 1.8
                                }, void 0, false, {
                                    fileName: "[project]/components/ProfileCard.tsx",
                                    lineNumber: 396,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                contactText
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProfileCard.tsx",
                            lineNumber: 390,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProfileCard.tsx",
                    lineNumber: 379,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "profile-card__glare"
                }, void 0, false, {
                    fileName: "[project]/components/ProfileCard.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "profile-card__shade"
                }, void 0, false, {
                    fileName: "[project]/components/ProfileCard.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "profile-card__rim"
                }, void 0, false, {
                    fileName: "[project]/components/ProfileCard.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProfileCard.tsx",
            lineNumber: 356,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ProfileCard.tsx",
        lineNumber: 337,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfileCard, "ww4sSpxbTCvHIE6B4xL8i9Igqjs=");
_c = ProfileCard;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ProfileCard);
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileCard");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const serviceIcons = {
    "Web Development": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuCodeXml"],
    "Network Engineer": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuWifi"],
    "Ethical Hacking": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuSword"]
};
function Services() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col lg:flex-row items-start gap-8 px-9 sm:px-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-3 md:pt-9",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[#f5f5f5] text-3xl md:text-4xl font-semibold md:mb-6",
                    children: "What I do?"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-4 mt-4 text-lg",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s, i)=>{
                        const isOpen = open === i;
                        const Icon = serviceIcons[s.title] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuCodeXml"];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setOpen(isOpen ? null : i),
                                className: "md:w-[400px] w-full bg-[rgba(20,20,20,0.61)] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[rgba(255,255,255,0.08)] cursor-pointer overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "text-[#A9FF5B] size-6 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 35,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-grow justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block truncate text-[#f5f5f5] text-lg max-w-[220px] md:max-w-none",
                                                        children: s.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        className: `w-6 h-6 text-white transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services.tsx",
                                        lineNumber: 34,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `transition-all duration-300 px-4 ${isOpen ? "max-h-48 opacity-100 pb-4" : "max-h-0 opacity-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-[#a1a1aa] text-sm",
                                            children: s.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "pl-1",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "pl-3",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, item, true, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 53,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services.tsx",
                                        lineNumber: 50,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services.tsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, this)
                        }, s.title, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Services.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Services, "kwOYwiAlGcf16u2JaFl+OYF7OQ8=");
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TechMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
;
;
;
;
const techIcons = {
    React: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"],
    "Next.js": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"],
    TypeScript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"],
    "Tailwind CSS": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTailwindcss"],
    JavaScript: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiJavascript"],
    HTML5: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiHtml5"],
    CSS3: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiCss"],
    "Node.js": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"],
    Git: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiGit"],
    Supabase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSupabase"],
    MySQL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMysql"],
    Vue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiVuedotjs"],
    Cisco: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiCisco"],
    "MikroTik": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMikrotik"],
    "Kali Linux": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiKalilinux"],
    Nmap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuRadar"],
    "Burp Suite": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiBurpsuite"],
    SQLMap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuDatabaseZap"],
    Metasploit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMetasploit"],
    Wireshark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiWireshark"],
    Python: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPython"]
};
function TechMarquee() {
    const doubled = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["techStack"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["techStack"]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-x-hidden py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20"
            }, void 0, false, {
                fileName: "[project]/components/TechMarquee.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20"
            }, void 0, false, {
                fileName: "[project]/components/TechMarquee.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex animate-scroll w-max will-change-transform",
                children: doubled.map((tech, i)=>{
                    const Icon = techIcons[tech];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": i >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["techStack"].length,
                        className: "flex items-center gap-2 pr-12 md:pr-20 group transition-all duration-300",
                        children: [
                            Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "size-6 text-[#a1a1aa]/60 group-hover:text-white group-hover:scale-110 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/components/TechMarquee.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-medium text-[#a1a1aa] whitespace-nowrap group-hover:text-white transition-colors",
                                children: tech
                            }, void 0, false, {
                                fileName: "[project]/components/TechMarquee.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${tech}-${i}`, true, {
                        fileName: "[project]/components/TechMarquee.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/TechMarquee.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TechMarquee.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = TechMarquee;
var _c;
__turbopack_context__.k.register(_c, "TechMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/terminal-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TerminalDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/terminal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TerminalDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"], {
            username: "aditya",
            commands: [
                "whoami",
                "cat ./skills.json",
                "cat ./toolbox.json",
                "contact --info"
            ],
            outputs: {
                0: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].greeting,
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].roles.join(" / "),
                    `📍 ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location}`
                ],
                1: [
                    '{ "frontend": ["React", "Next.js", "TypeScript"] }',
                    '{ "network": ["MikroTik", "Cisco", "VLAN", "VPN"] }',
                    '{ "security": ["Kali Linux", "Nmap", "Burp Suite"] }'
                ],
                2: [
                    '{ "scanning": ["Nmap"] }',
                    '{ "web-testing": ["Burp Suite", "SQLMap"] }',
                    '{ "exploitation": ["Metasploit"] }'
                ],
                3: [
                    `email: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                    `github: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github}`,
                    "status: open for work ✔"
                ]
            },
            typingSpeed: 45,
            delayBetweenCommands: 1000,
            enableSound: false
        }, void 0, false, {
            fileName: "[project]/components/terminal-demo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/terminal-demo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = TerminalDemo;
var _c;
__turbopack_context__.k.register(_c, "TerminalDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/terminal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const KEY_SOUNDS_DOWN = {
    A: [
        31542,
        85
    ],
    B: [
        40621,
        107
    ],
    C: [
        39632,
        95
    ],
    D: [
        32492,
        85
    ],
    E: [
        23317,
        83
    ],
    F: [
        32973,
        87
    ],
    G: [
        33453,
        94
    ],
    H: [
        33986,
        93
    ],
    I: [
        25795,
        91
    ],
    J: [
        34425,
        88
    ],
    K: [
        34932,
        90
    ],
    L: [
        35410,
        95
    ],
    M: [
        41610,
        93
    ],
    N: [
        41103,
        90
    ],
    O: [
        26309,
        84
    ],
    P: [
        26804,
        83
    ],
    Q: [
        22245,
        95
    ],
    R: [
        23817,
        92
    ],
    S: [
        32031,
        88
    ],
    T: [
        24297,
        92
    ],
    U: [
        25313,
        95
    ],
    V: [
        40136,
        94
    ],
    W: [
        22790,
        89
    ],
    X: [
        39148,
        76
    ],
    Y: [
        24811,
        93
    ],
    Z: [
        38694,
        80
    ],
    " ": [
        51541,
        144
    ],
    "-": [
        42594,
        90
    ],
    "@": [
        23317,
        83
    ],
    "/": [
        42594,
        90
    ],
    ".": [
        42594,
        90
    ],
    ":": [
        42594,
        90
    ],
    "0": [
        26309,
        84
    ],
    "1": [
        25313,
        95
    ],
    "2": [
        23317,
        83
    ],
    "3": [
        23817,
        92
    ],
    "4": [
        24297,
        92
    ],
    "5": [
        24811,
        93
    ],
    "6": [
        25313,
        95
    ],
    "7": [
        25795,
        91
    ],
    "8": [
        26309,
        84
    ],
    "9": [
        26804,
        83
    ],
    Enter: [
        19065,
        110
    ]
};
const KEY_SOUNDS_UP = {
    A: [
        31632,
        80
    ],
    B: [
        40736,
        95
    ],
    C: [
        39732,
        85
    ],
    D: [
        32577,
        80
    ],
    E: [
        23402,
        80
    ],
    F: [
        33063,
        80
    ],
    G: [
        33553,
        85
    ],
    H: [
        34081,
        85
    ],
    I: [
        25890,
        85
    ],
    J: [
        34515,
        85
    ],
    K: [
        35027,
        85
    ],
    L: [
        35510,
        85
    ],
    M: [
        41710,
        85
    ],
    N: [
        41198,
        85
    ],
    O: [
        26394,
        80
    ],
    P: [
        26889,
        80
    ],
    Q: [
        22345,
        85
    ],
    R: [
        23912,
        85
    ],
    S: [
        32121,
        80
    ],
    T: [
        24392,
        85
    ],
    U: [
        25413,
        85
    ],
    V: [
        40236,
        85
    ],
    W: [
        22880,
        85
    ],
    X: [
        39228,
        70
    ],
    Y: [
        24911,
        85
    ],
    Z: [
        38779,
        75
    ],
    " ": [
        51691,
        130
    ],
    "-": [
        42689,
        85
    ],
    "@": [
        23402,
        80
    ],
    "/": [
        42689,
        85
    ],
    ".": [
        42689,
        85
    ],
    ":": [
        42689,
        85
    ],
    "0": [
        26394,
        80
    ],
    "1": [
        25413,
        85
    ],
    "2": [
        23402,
        80
    ],
    "3": [
        23912,
        85
    ],
    "4": [
        24392,
        85
    ],
    "5": [
        24911,
        85
    ],
    "6": [
        25413,
        85
    ],
    "7": [
        25890,
        85
    ],
    "8": [
        26394,
        80
    ],
    "9": [
        26889,
        80
    ],
    Enter: [
        19180,
        100
    ]
};
function useAudio(enabled) {
    _s();
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const readyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAudio.useEffect": ()=>{
            readyRef.current = false;
            if (!enabled) return;
            const controller = new AbortController();
            let context = null;
            let started = false;
            const removeListeners = {
                "useAudio.useEffect.removeListeners": ()=>{
                    window.removeEventListener("click", initAudio);
                    window.removeEventListener("keydown", initAudio);
                }
            }["useAudio.useEffect.removeListeners"];
            // Keep automatic demos silent until the user clicks, taps, or presses a key.
            async function initAudio() {
                if (started) return;
                started = true;
                removeListeners();
                try {
                    context = new AudioContext();
                    ctxRef.current = context;
                    // Resume during the user gesture, before the download completes.
                    void context.resume().catch({
                        "useAudio.useEffect.initAudio": ()=>{}
                    }["useAudio.useEffect.initAudio"]);
                    const response = await fetch("/sounds/sound.ogg", {
                        signal: controller.signal
                    });
                    if (!response.ok || controller.signal.aborted) return;
                    const bytes = await response.arrayBuffer();
                    if (controller.signal.aborted) return;
                    const buffer = await context.decodeAudioData(bytes);
                    if (controller.signal.aborted) return;
                    bufferRef.current = buffer;
                    readyRef.current = true;
                } catch  {
                // A failed download or an unmounted demo must not stop the animation.
                }
            }
            window.addEventListener("click", initAudio, {
                once: true
            });
            window.addEventListener("keydown", initAudio, {
                once: true
            });
            return ({
                "useAudio.useEffect": ()=>{
                    removeListeners();
                    controller.abort();
                    readyRef.current = false;
                    bufferRef.current = null;
                    ctxRef.current = null;
                    if (context) void context.close().catch({
                        "useAudio.useEffect": ()=>{}
                    }["useAudio.useEffect"]);
                }
            })["useAudio.useEffect"];
        }
    }["useAudio.useEffect"], [
        enabled
    ]);
    const playSound = (sound)=>{
        if (!readyRef.current || !ctxRef.current || !bufferRef.current || !sound) return;
        if (ctxRef.current.state === "suspended") ctxRef.current.resume();
        const src = ctxRef.current.createBufferSource();
        src.buffer = bufferRef.current;
        src.connect(ctxRef.current.destination);
        src.start(0, sound[0] / 1000, sound[1] / 1000);
    };
    const down = (key)=>playSound(KEY_SOUNDS_DOWN[key.toUpperCase()] || KEY_SOUNDS_DOWN[key]);
    const up = (key)=>playSound(KEY_SOUNDS_UP[key.toUpperCase()] || KEY_SOUNDS_UP[key]);
    return {
        down,
        up
    };
}
_s(useAudio, "Ipe27cQF+qasQgHZvmDhlc+tBJU=");
function useInView(ref, once = true) {
    _s1();
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const triggered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el || once && triggered.current) return;
            const observer = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !triggered.current) {
                        setInView(true);
                        if (once) {
                            triggered.current = true;
                            observer.disconnect();
                        }
                    }
                }
            }["useInView.useEffect"], {
                threshold: 0.1
            });
            observer.observe(el);
            return ({
                "useInView.useEffect": ()=>observer.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        ref,
        once
    ]);
    return inView;
}
_s1(useInView, "ulzyEmlokiiGZu4BZYBxgpVu4KU=");
function tokenizeBash(text) {
    const tokens = [];
    const words = text.split(/(\s+)/);
    let isFirstWord = true;
    for (const word of words){
        if (/^\s+$/.test(word)) {
            tokens.push({
                type: "default",
                value: word
            });
            continue;
        }
        if (word.startsWith("#")) {
            tokens.push({
                type: "comment",
                value: word
            });
            continue;
        }
        if (word.startsWith("$")) {
            tokens.push({
                type: "variable",
                value: word
            });
            isFirstWord = false;
            continue;
        }
        if (word.startsWith("--") || word.startsWith("-")) {
            tokens.push({
                type: "flag",
                value: word
            });
            isFirstWord = false;
            continue;
        }
        if (/^["'].*["']$/.test(word)) {
            tokens.push({
                type: "string",
                value: word
            });
            isFirstWord = false;
            continue;
        }
        if (/^\d+$/.test(word)) {
            tokens.push({
                type: "number",
                value: word
            });
            isFirstWord = false;
            continue;
        }
        if (/^[|>&<]+$/.test(word)) {
            tokens.push({
                type: "operator",
                value: word
            });
            isFirstWord = true;
            continue;
        }
        if (word.includes("/") || word.startsWith(".") || word.startsWith("~")) {
            tokens.push({
                type: "path",
                value: word
            });
            isFirstWord = false;
            continue;
        }
        if (isFirstWord) {
            tokens.push({
                type: "command",
                value: word
            });
            isFirstWord = false;
            continue;
        }
        tokens.push({
            type: "default",
            value: word
        });
    }
    return tokens;
}
const tokenColors = {
    command: "text-emerald-400",
    flag: "text-sky-400",
    string: "text-amber-300",
    number: "text-purple-400",
    operator: "text-red-400",
    path: "text-cyan-300",
    variable: "text-pink-400",
    comment: "text-neutral-500",
    default: "text-neutral-300"
};
function SyntaxHighlightedText({ text }) {
    const tokens = tokenizeBash(text);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: tokens.map((token, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: tokenColors[token.type],
                children: token.value
            }, i, false, {
                fileName: "[project]/components/ui/terminal.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/terminal.tsx",
        lineNumber: 296,
        columnNumber: 5
    }, this);
}
_c = SyntaxHighlightedText;
function Terminal({ commands = [
    "npx shadcn@latest init"
], outputs = {}, username = "Manus-Macbook", className, typingSpeed = 50, delayBetweenCommands = 800, initialDelay = 500, enableSound = true }) {
    _s2();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(containerRef);
    const { down, up } = useAudio(enableSound);
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentText, setCurrentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [commandIdx, setCommandIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [charIdx, setCharIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [outputIdx, setOutputIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [cursorVisible, setCursorVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const currentCommand = commands[commandIdx] || "";
    const currentOutputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Terminal.useMemo[currentOutputs]": ()=>outputs[commandIdx] || []
    }["Terminal.useMemo[currentOutputs]"], [
        outputs,
        commandIdx
    ]);
    const isLastCommand = commandIdx === commands.length - 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (!inView || phase !== "idle") return;
            const t = setTimeout({
                "Terminal.useEffect.t": ()=>setPhase("typing")
            }["Terminal.useEffect.t"], initialDelay);
            return ({
                "Terminal.useEffect": ()=>clearTimeout(t)
            })["Terminal.useEffect"];
        }
    }["Terminal.useEffect"], [
        inView,
        phase,
        initialDelay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (phase !== "typing") return;
            if (charIdx < currentCommand.length) {
                const char = currentCommand[charIdx];
                down(char);
                const t = setTimeout({
                    "Terminal.useEffect.t": ()=>{
                        up(char);
                        setCurrentText(currentCommand.slice(0, charIdx + 1));
                        setCharIdx({
                            "Terminal.useEffect.t": (c)=>c + 1
                        }["Terminal.useEffect.t"]);
                    }
                }["Terminal.useEffect.t"], typingSpeed + Math.random() * 30);
                return ({
                    "Terminal.useEffect": ()=>clearTimeout(t)
                })["Terminal.useEffect"];
            } else {
                down("Enter");
                const t = setTimeout({
                    "Terminal.useEffect.t": ()=>{
                        up("Enter");
                        setPhase("executing");
                    }
                }["Terminal.useEffect.t"], 80);
                return ({
                    "Terminal.useEffect": ()=>clearTimeout(t)
                })["Terminal.useEffect"];
            }
        }
    }["Terminal.useEffect"], [
        phase,
        charIdx,
        currentCommand,
        typingSpeed,
        down,
        up
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (phase !== "executing") return;
            setLines({
                "Terminal.useEffect": (prev)=>[
                        ...prev,
                        {
                            type: "command",
                            content: currentCommand
                        }
                    ]
            }["Terminal.useEffect"]);
            setCurrentText("");
            if (currentOutputs.length > 0) {
                setOutputIdx(0);
                setPhase("outputting");
            } else if (isLastCommand) {
                setPhase("done");
            } else {
                setPhase("pausing");
            }
        }
    }["Terminal.useEffect"], [
        phase,
        currentCommand,
        currentOutputs.length,
        isLastCommand
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (phase !== "outputting") return;
            if (outputIdx >= 0 && outputIdx < currentOutputs.length) {
                const t = setTimeout({
                    "Terminal.useEffect.t": ()=>{
                        setLines({
                            "Terminal.useEffect.t": (prev)=>[
                                    ...prev,
                                    {
                                        type: "output",
                                        content: currentOutputs[outputIdx]
                                    }
                                ]
                        }["Terminal.useEffect.t"]);
                        setOutputIdx({
                            "Terminal.useEffect.t": (i)=>i + 1
                        }["Terminal.useEffect.t"]);
                    }
                }["Terminal.useEffect.t"], 150);
                return ({
                    "Terminal.useEffect": ()=>clearTimeout(t)
                })["Terminal.useEffect"];
            } else if (outputIdx >= currentOutputs.length) {
                const t = setTimeout({
                    "Terminal.useEffect.t": ()=>{
                        if (isLastCommand) {
                            setPhase("done");
                        } else {
                            setPhase("pausing");
                        }
                    }
                }["Terminal.useEffect.t"], 300);
                return ({
                    "Terminal.useEffect": ()=>clearTimeout(t)
                })["Terminal.useEffect"];
            }
        }
    }["Terminal.useEffect"], [
        phase,
        outputIdx,
        currentOutputs,
        isLastCommand
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (phase !== "pausing") return;
            const t = setTimeout({
                "Terminal.useEffect.t": ()=>{
                    setCharIdx(0);
                    setOutputIdx(-1);
                    setCommandIdx({
                        "Terminal.useEffect.t": (c)=>c + 1
                    }["Terminal.useEffect.t"]);
                    setPhase("typing");
                }
            }["Terminal.useEffect.t"], delayBetweenCommands);
            return ({
                "Terminal.useEffect": ()=>clearTimeout(t)
            })["Terminal.useEffect"];
        }
    }["Terminal.useEffect"], [
        phase,
        delayBetweenCommands
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            const interval = setInterval({
                "Terminal.useEffect.interval": ()=>setCursorVisible({
                        "Terminal.useEffect.interval": (v)=>!v
                    }["Terminal.useEffect.interval"])
            }["Terminal.useEffect.interval"], 530);
            return ({
                "Terminal.useEffect": ()=>clearInterval(interval)
            })["Terminal.useEffect"];
        }
    }["Terminal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Terminal.useEffect": ()=>{
            if (contentRef.current) {
                contentRef.current.scrollTop = contentRef.current.scrollHeight;
            }
        }
    }["Terminal.useEffect"], [
        lines,
        phase
    ]);
    const prompt = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-neutral-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sky-500",
                children: username
            }, void 0, false, {
                fileName: "[project]/components/ui/terminal.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-emerald-600",
                children: ":"
            }, void 0, false, {
                fileName: "[project]/components/ui/terminal.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sky-400",
                children: "~"
            }, void 0, false, {
                fileName: "[project]/components/ui/terminal.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-neutral-500",
                children: "$"
            }, void 0, false, {
                fileName: "[project]/components/ui/terminal.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            " "
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/terminal.tsx",
        lineNumber: 448,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-xl font-mono text-xs", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 bg-neutral-800 px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 w-3 rounded-full bg-red-500 transition-colors hover:bg-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 465,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 w-3 rounded-full bg-yellow-500 transition-colors hover:bg-yellow-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-3 w-3 rounded-full bg-green-500 transition-colors hover:bg-green-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/terminal.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate text-xs text-neutral-400",
                                children: [
                                    username,
                                    " — bash"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/terminal.tsx",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/terminal.tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[52px]"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/terminal.tsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/terminal.tsx",
                    lineNumber: 463,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: contentRef,
                    className: "no-visible-scrollbar h-80 overflow-y-auto p-4 font-mono",
                    children: [
                        lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leading-relaxed whitespace-pre-wrap",
                                children: line.type === "command" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        prompt,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SyntaxHighlightedText, {
                                            text: line.content
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/terminal.tsx",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 485,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-neutral-400",
                                    children: line.content
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 490,
                                    columnNumber: 17
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/ui/terminal.tsx",
                                lineNumber: 483,
                                columnNumber: 13
                            }, this)),
                        phase === "typing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leading-relaxed whitespace-pre-wrap",
                            children: [
                                prompt,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SyntaxHighlightedText, {
                                    text: currentText
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-0.5 inline-block h-4 w-2 bg-neutral-300 align-middle"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 499,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/terminal.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this),
                        (phase === "done" || phase === "pausing" || phase === "outputting") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "leading-relaxed whitespace-pre-wrap",
                            children: [
                                prompt,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block h-4 w-2 bg-neutral-300 align-middle transition-opacity duration-100", !cursorVisible && "opacity-0")
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/terminal.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/terminal.tsx",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/terminal.tsx",
                    lineNumber: 478,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/terminal.tsx",
            lineNumber: 461,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/terminal.tsx",
        lineNumber: 457,
        columnNumber: 5
    }, this);
}
_s2(Terminal, "syoWfDlY16N2NbJzkDFMgvzQbcA=", false, function() {
    return [
        useInView,
        useAudio
    ];
});
_c1 = Terminal;
var _c, _c1;
__turbopack_context__.k.register(_c, "SyntaxHighlightedText");
__turbopack_context__.k.register(_c1, "Terminal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "certifications",
    ()=>certifications,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "techStack",
    ()=>techStack
]);
const profile = {
    name: "Aditya Siagian",
    role: [
        "Software",
        "Developer"
    ],
    roles: [
        "Software Developer",
        "Network Engineer",
        "Cyber Security Enthusiast"
    ],
    greeting: "Hi, I'm Aditya Siagian",
    tagline: "Transforming ideas into interactive and seamless digital experiences with modern frontend development.",
    highlight: "frontend",
    location: "Indonesia",
    email: "adityasiagian07@gmail.com",
    github: "https://github.com/padme-sudo",
    linkedin: "https://www.linkedin.com/in/adityasiagian/"
};
const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Git",
    "Supabase",
    "MySQL",
    "Vue",
    "Cisco",
    "MikroTik",
    "Kali Linux",
    "Nmap",
    "Burp Suite",
    "SQLMap",
    "Metasploit",
    "Wireshark",
    "Python"
];
const services = [
    {
        title: "Web Development",
        items: [
            "Single Page Applications (SPAs)",
            "Landing pages & business websites",
            "Portfolio websites"
        ]
    },
    {
        title: "Network Engineer",
        items: [
            "MikroTik configuration & management (RouterOS)",
            "Routing & switching Cisco",
            "Subnetting, VLAN, VPN & firewall",
            "Network troubleshooting & monitoring"
        ]
    },
    {
        title: "Ethical Hacking",
        items: [
            "Penetration testing with Kali Linux",
            "Recon & scanning: Nmap",
            "Web vulnerability testing: Burp Suite & SQLMap",
            "Exploitation with Metasploit"
        ]
    }
];
const certifications = [
    {
        title: "MTCNA",
        issuer: "MikroTik",
        year: "2024"
    },
    {
        title: "CCNA",
        issuer: "Cisco",
        year: "2024"
    }
];
const projects = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Minimal `cn` helper — no extra dependencies (replaces clsx + tailwind-merge). */ __turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...inputs) {
    return inputs.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0me1qerzta-l9._.js.map