/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./i18n.ts":
/*!*****************!*\
  !*** ./i18n.ts ***!
  \*****************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var _locales_ru_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/ru.json */ \"./locales/ru.json\");\n/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/en.json */ \"./locales/en.json\");\n/* harmony import */ var _locales_fr_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/fr.json */ \"./locales/fr.json\");\n/* harmony import */ var _locales_de_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/de.json */ \"./locales/de.json\");\n/* harmony import */ var _locales_it_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/it.json */ \"./locales/it.json\");\n/* harmony import */ var _locales_pt_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locales/pt.json */ \"./locales/pt.json\");\n/* harmony import */ var _locales_hi_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locales/hi.json */ \"./locales/hi.json\");\n/* harmony import */ var _locales_ar_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locales/ar.json */ \"./locales/ar.json\");\n/* harmony import */ var _locales_he_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locales/he.json */ \"./locales/he.json\");\n/* harmony import */ var _locales_zh_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locales/zh.json */ \"./locales/zh.json\");\n/* harmony import */ var _locales_ja_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locales/ja.json */ \"./locales/ja.json\");\n/* harmony import */ var _locales_ko_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./locales/ko.json */ \"./locales/ko.json\");\n/* harmony import */ var _locales_sw_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./locales/sw.json */ \"./locales/sw.json\");\n/* harmony import */ var _locales_es_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locales/es.json */ \"./locales/es.json\");\n/* harmony import */ var _locales_el_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./locales/el.json */ \"./locales/el.json\");\n/* harmony import */ var _locales_da_json__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./locales/da.json */ \"./locales/da.json\");\n/* harmony import */ var _locales_nl_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./locales/nl.json */ \"./locales/nl.json\");\n/* harmony import */ var _locales_sv_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./locales/sv.json */ \"./locales/sv.json\");\n/* harmony import */ var _locales_no_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./locales/no.json */ \"./locales/no.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);\n([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst resources = {\n    ru: {\n        translation: _locales_ru_json__WEBPACK_IMPORTED_MODULE_2__\n    },\n    en: {\n        translation: _locales_en_json__WEBPACK_IMPORTED_MODULE_3__\n    },\n    fr: {\n        translation: _locales_fr_json__WEBPACK_IMPORTED_MODULE_4__\n    },\n    de: {\n        translation: _locales_de_json__WEBPACK_IMPORTED_MODULE_5__\n    },\n    it: {\n        translation: _locales_it_json__WEBPACK_IMPORTED_MODULE_6__\n    },\n    pt: {\n        translation: _locales_pt_json__WEBPACK_IMPORTED_MODULE_7__\n    },\n    hi: {\n        translation: _locales_hi_json__WEBPACK_IMPORTED_MODULE_8__\n    },\n    ar: {\n        translation: _locales_ar_json__WEBPACK_IMPORTED_MODULE_9__\n    },\n    he: {\n        translation: _locales_he_json__WEBPACK_IMPORTED_MODULE_10__\n    },\n    zh: {\n        translation: _locales_zh_json__WEBPACK_IMPORTED_MODULE_11__\n    },\n    ja: {\n        translation: _locales_ja_json__WEBPACK_IMPORTED_MODULE_12__\n    },\n    ko: {\n        translation: _locales_ko_json__WEBPACK_IMPORTED_MODULE_13__\n    },\n    sw: {\n        translation: _locales_sw_json__WEBPACK_IMPORTED_MODULE_14__\n    },\n    es: {\n        translation: _locales_es_json__WEBPACK_IMPORTED_MODULE_15__\n    },\n    el: {\n        translation: _locales_el_json__WEBPACK_IMPORTED_MODULE_16__\n    },\n    da: {\n        translation: _locales_da_json__WEBPACK_IMPORTED_MODULE_17__\n    },\n    nl: {\n        translation: _locales_nl_json__WEBPACK_IMPORTED_MODULE_18__\n    },\n    sv: {\n        translation: _locales_sv_json__WEBPACK_IMPORTED_MODULE_19__\n    },\n    no: {\n        translation: _locales_no_json__WEBPACK_IMPORTED_MODULE_20__\n    }\n};\n// Initialize without browser language detection to keep SSR/CSR consistent\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n    resources,\n    fallbackLng: \"ru\",\n    lng: \"ru\",\n    supportedLngs: Object.keys(resources),\n    interpolation: {\n        escapeValue: false\n    },\n    initImmediate: false\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0I7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVsQyxNQUFNcUIsWUFBWTtJQUNoQm5CLElBQUk7UUFBRW9CLGFBQWFwQiw2Q0FBRUE7SUFBQztJQUN0QkMsSUFBSTtRQUFFbUIsYUFBYW5CLDZDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVrQixhQUFhbEIsNkNBQUVBO0lBQUM7SUFDdEJDLElBQUk7UUFBRWlCLGFBQWFqQiw2Q0FBRUE7SUFBQztJQUN0QkMsSUFBSTtRQUFFZ0IsYUFBYWhCLDZDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVlLGFBQWFmLDZDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVjLGFBQWFkLDZDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVhLGFBQWFiLDZDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVZLGFBQWFaLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVXLGFBQWFYLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVVLGFBQWFWLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVTLGFBQWFULDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVRLGFBQWFSLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVPLGFBQWFQLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVNLGFBQWFOLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVLLGFBQWFMLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVJLGFBQWFKLDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVHLGFBQWFILDhDQUFFQTtJQUFDO0lBQ3RCQyxJQUFJO1FBQUVFLGFBQWFGLDhDQUFFQTtJQUFDO0FBQ3hCO0FBRUEsMkVBQTJFO0FBQzNFcEIsbURBQ00sQ0FBQ0MsMkRBQWdCQSxFQUNwQnVCLElBQUksQ0FBQztJQUNKSDtJQUNBSSxhQUFhO0lBQ2JDLEtBQUs7SUFDTEMsZUFBZUMsT0FBT0MsSUFBSSxDQUFDUjtJQUMzQlMsZUFBZTtRQUFFQyxhQUFhO0lBQU07SUFDcENDLGVBQWU7QUFDakI7QUFFRixpRUFBZWhDLCtDQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVidWxhLy4vaTE4bi50cz85NzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcblxuaW1wb3J0IHJ1IGZyb20gJy4vbG9jYWxlcy9ydS5qc29uJ1xuaW1wb3J0IGVuIGZyb20gJy4vbG9jYWxlcy9lbi5qc29uJ1xuaW1wb3J0IGZyIGZyb20gJy4vbG9jYWxlcy9mci5qc29uJ1xuaW1wb3J0IGRlIGZyb20gJy4vbG9jYWxlcy9kZS5qc29uJ1xuaW1wb3J0IGl0IGZyb20gJy4vbG9jYWxlcy9pdC5qc29uJ1xuaW1wb3J0IHB0IGZyb20gJy4vbG9jYWxlcy9wdC5qc29uJ1xuaW1wb3J0IGhpIGZyb20gJy4vbG9jYWxlcy9oaS5qc29uJ1xuaW1wb3J0IGFyIGZyb20gJy4vbG9jYWxlcy9hci5qc29uJ1xuaW1wb3J0IGhlIGZyb20gJy4vbG9jYWxlcy9oZS5qc29uJ1xuaW1wb3J0IHpoIGZyb20gJy4vbG9jYWxlcy96aC5qc29uJ1xuaW1wb3J0IGphIGZyb20gJy4vbG9jYWxlcy9qYS5qc29uJ1xuaW1wb3J0IGtvIGZyb20gJy4vbG9jYWxlcy9rby5qc29uJ1xuaW1wb3J0IHN3IGZyb20gJy4vbG9jYWxlcy9zdy5qc29uJ1xuaW1wb3J0IGVzIGZyb20gJy4vbG9jYWxlcy9lcy5qc29uJ1xuaW1wb3J0IGVsIGZyb20gJy4vbG9jYWxlcy9lbC5qc29uJ1xuaW1wb3J0IGRhIGZyb20gJy4vbG9jYWxlcy9kYS5qc29uJ1xuaW1wb3J0IG5sIGZyb20gJy4vbG9jYWxlcy9ubC5qc29uJ1xuaW1wb3J0IHN2IGZyb20gJy4vbG9jYWxlcy9zdi5qc29uJ1xuaW1wb3J0IG5vIGZyb20gJy4vbG9jYWxlcy9uby5qc29uJ1xuXG5jb25zdCByZXNvdXJjZXMgPSB7XG4gIHJ1OiB7IHRyYW5zbGF0aW9uOiBydSB9LFxuICBlbjogeyB0cmFuc2xhdGlvbjogZW4gfSxcbiAgZnI6IHsgdHJhbnNsYXRpb246IGZyIH0sXG4gIGRlOiB7IHRyYW5zbGF0aW9uOiBkZSB9LFxuICBpdDogeyB0cmFuc2xhdGlvbjogaXQgfSxcbiAgcHQ6IHsgdHJhbnNsYXRpb246IHB0IH0sXG4gIGhpOiB7IHRyYW5zbGF0aW9uOiBoaSB9LFxuICBhcjogeyB0cmFuc2xhdGlvbjogYXIgfSxcbiAgaGU6IHsgdHJhbnNsYXRpb246IGhlIH0sXG4gIHpoOiB7IHRyYW5zbGF0aW9uOiB6aCB9LFxuICBqYTogeyB0cmFuc2xhdGlvbjogamEgfSxcbiAga286IHsgdHJhbnNsYXRpb246IGtvIH0sXG4gIHN3OiB7IHRyYW5zbGF0aW9uOiBzdyB9LFxuICBlczogeyB0cmFuc2xhdGlvbjogZXMgfSxcbiAgZWw6IHsgdHJhbnNsYXRpb246IGVsIH0sXG4gIGRhOiB7IHRyYW5zbGF0aW9uOiBkYSB9LFxuICBubDogeyB0cmFuc2xhdGlvbjogbmwgfSxcbiAgc3Y6IHsgdHJhbnNsYXRpb246IHN2IH0sXG4gIG5vOiB7IHRyYW5zbGF0aW9uOiBubyB9LFxufVxuXG4vLyBJbml0aWFsaXplIHdpdGhvdXQgYnJvd3NlciBsYW5ndWFnZSBkZXRlY3Rpb24gdG8ga2VlcCBTU1IvQ1NSIGNvbnNpc3RlbnRcbmkxOG5cbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxuICAuaW5pdCh7XG4gICAgcmVzb3VyY2VzLFxuICAgIGZhbGxiYWNrTG5nOiAncnUnLFxuICAgIGxuZzogJ3J1JyxcbiAgICBzdXBwb3J0ZWRMbmdzOiBPYmplY3Qua2V5cyhyZXNvdXJjZXMpLFxuICAgIGludGVycG9sYXRpb246IHsgZXNjYXBlVmFsdWU6IGZhbHNlIH0sXG4gICAgaW5pdEltbWVkaWF0ZTogZmFsc2UsXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGkxOG5cblxuXG4iXSwibmFtZXMiOlsiaTE4biIsImluaXRSZWFjdEkxOG5leHQiLCJydSIsImVuIiwiZnIiLCJkZSIsIml0IiwicHQiLCJoaSIsImFyIiwiaGUiLCJ6aCIsImphIiwia28iLCJzdyIsImVzIiwiZWwiLCJkYSIsIm5sIiwic3YiLCJubyIsInJlc291cmNlcyIsInRyYW5zbGF0aW9uIiwidXNlIiwiaW5pdCIsImZhbGxiYWNrTG5nIiwibG5nIiwic3VwcG9ydGVkTG5ncyIsIk9iamVjdCIsImtleXMiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJpbml0SW1tZWRpYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ \"./i18n.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_i18n__WEBPACK_IMPORTED_MODULE_4__]);\n_i18n__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst defaultSEO = {\n    titleTemplate: \"%s | Nebula\",\n    defaultTitle: \"Nebula — TFOT Labs\",\n    description: \"Nebula: Смотреть. Тренироваться. Жить. Спортивная платформа от TFOT Labs.\",\n    openGraph: {\n        type: \"website\",\n        locale: \"ru_RU\",\n        siteName: \"Nebula\"\n    }\n};\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        attribute: \"class\",\n        defaultTheme: \"dark\",\n        enableSystem: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.DefaultSeo, {\n                ...defaultSEO\n            }, void 0, false, {\n                fileName: \"/Users/dmitrios/Desktop/Nebula/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/dmitrios/Desktop/Nebula/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dmitrios/Desktop/Nebula/pages/_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNxQztBQUNNO0FBQ2Q7QUFDYjtBQUVoQixNQUFNRSxhQUFhO0lBQ2pCQyxlQUFlO0lBQ2ZDLGNBQWM7SUFDZEMsYUFBYTtJQUNiQyxXQUFXO1FBQ1RDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxVQUFVO0lBQ1o7QUFDRjtBQUVlLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0UsOERBQUNYLHNEQUFhQTtRQUFDWSxXQUFVO1FBQVFDLGNBQWE7UUFBT0MsWUFBWTs7MEJBQy9ELDhEQUFDZixnREFBVUE7Z0JBQUUsR0FBR0UsVUFBVTs7Ozs7OzBCQUMxQiw4REFBQ1M7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVidWxhLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9pMThuJ1xuXG5jb25zdCBkZWZhdWx0U0VPID0ge1xuICB0aXRsZVRlbXBsYXRlOiAnJXMgfCBOZWJ1bGEnLFxuICBkZWZhdWx0VGl0bGU6ICdOZWJ1bGEg4oCUIFRGT1QgTGFicycsXG4gIGRlc2NyaXB0aW9uOiAnTmVidWxhOiDQodC80L7RgtGA0LXRgtGMLiDQotGA0LXQvdC40YDQvtCy0LDRgtGM0YHRjy4g0JbQuNGC0YwuINCh0L/QvtGA0YLQuNCy0L3QsNGPINC/0LvQsNGC0YTQvtGA0LzQsCDQvtGCIFRGT1QgTGFicy4nLFxuICBvcGVuR3JhcGg6IHtcbiAgICB0eXBlOiAnd2Vic2l0ZScsXG4gICAgbG9jYWxlOiAncnVfUlUnLFxuICAgIHNpdGVOYW1lOiAnTmVidWxhJyxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCIgZGVmYXVsdFRoZW1lPVwiZGFya1wiIGVuYWJsZVN5c3RlbT5cbiAgICAgIDxEZWZhdWx0U2VvIHsuLi5kZWZhdWx0U0VPfSAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5cbiJdLCJuYW1lcyI6WyJEZWZhdWx0U2VvIiwiVGhlbWVQcm92aWRlciIsImRlZmF1bHRTRU8iLCJ0aXRsZVRlbXBsYXRlIiwiZGVmYXVsdFRpdGxlIiwiZGVzY3JpcHRpb24iLCJvcGVuR3JhcGgiLCJ0eXBlIiwibG9jYWxlIiwic2l0ZU5hbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF0dHJpYnV0ZSIsImRlZmF1bHRUaGVtZSIsImVuYWJsZVN5c3RlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ }),

/***/ "./locales/ar.json":
/*!*************************!*\
  !*** ./locales/ar.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"نيبولا — ميتافيرس الرياضة","metaDescription":"شاهد. تمرّن. عِش."},"nav":{"features":"الميزات","pricing":"الأسعار","download":"تنزيل","community":"المجتمع","support":"الدعم","signin":"تسجيل الدخول / FTOT ID"},"hero":{"title":"نيبولا — شاهد. تمرّن. عِش.","subtitle":"منصة موحدة للرياضة.","ctaPrimary":"تنزيل","ctaSecondary":"عرض الخطط","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"ما هي نيبولا","cards":[{"title":"مشاهدة","desc":"بث AR/VR."},{"title":"تدريب","desc":"خطط وتتبع وتحليلات."},{"title":"عيش","desc":"تغذية وتعافٍ ومجتمع."}]},"features":{"title":"الميزات","items":["بث AR/VR","معلّق بالذكاء الاصطناعي","مساعد بالذكاء الاصطناعي","التغذية","التدريبات","المجتمع","التكاملات","إمكانية الوصول"]},"pricing":{"title":"الأسعار","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"اختر الخطة"},"devices":{"title":"الأجهزة المدعومة","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"اختر الطريقة","email":"البريد الإلكتروني","phone":"الهاتف","or":"أو","oauth":"المتابعة عبر","continue":"متابعة","otpTitle":"التحقق من الرمز","passwordTitle":"إنشاء كلمة مرور","twofaTitle":"إعداد 2FA (موصى به)","doneTitle":"تم","submit":"إرسال","verify":"تحقق","back":"رجوع"},"ecosystem":{"title":"منظومة TFOT Labs"},"footer":{"product":"المنتج","company":"الشركة","support":"الدعم","legal":"قانوني","privacy":"سياسة الخصوصية","terms":"شروط الاستخدام","cookies":"سياسة الكوكيز","refund":"سياسة الاسترجاع","a11y":"بيان إمكانية الوصول","copyright":"© {{year}} Nebula — منتج من TFOT Labs. جميع الحقوق محفوظة."}}');

/***/ }),

/***/ "./locales/da.json":
/*!*************************!*\
  !*** ./locales/da.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — sportsmetavers","metaDescription":"Se. Træn. Lev."},"nav":{"features":"Funktioner","pricing":"Priser","download":"Download","community":"Fællesskab","support":"Support","signin":"Log ind / FTOT ID"},"hero":{"title":"Nebula — Se. Træn. Lev.","subtitle":"Samlet platform for sport.","ctaPrimary":"Download","ctaSecondary":"Se planer","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Hvad er Nebula","cards":[{"title":"Se","desc":"AR/VR streams."},{"title":"Træn","desc":"Planer, tracking, analyse."},{"title":"Lev","desc":"Ernæring, restitution, fællesskab."}]},"features":{"title":"Funktioner","items":["AR/VR streams","AI-kommentator","AI-assistent","Ernæring","Træning","Fællesskab","Integrationer","Tilgængelighed"]},"pricing":{"title":"Priser","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Vælg plan"},"devices":{"title":"Understøttede enheder","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Vælg metode","email":"Email","phone":"Telefon","or":"eller","oauth":"Fortsæt med","continue":"Fortsæt","otpTitle":"Kodeverificering","passwordTitle":"Opret adgangskode","twofaTitle":"Opsæt 2FA (anbefalet)","doneTitle":"Færdig","submit":"Send","verify":"Verificér","back":"Tilbage"},"ecosystem":{"title":"TFOT Labs økosystem"},"footer":{"product":"Produkt","company":"Virksomhed","support":"Support","legal":"Juridisk","privacy":"Privatlivspolitik","terms":"Vilkår","cookies":"Cookiepolitik","refund":"Refusionspolitik","a11y":"Tilgængelighedserklæring","copyright":"© {{year}} Nebula — et produkt fra TFOT Labs. Alle rettigheder forbeholdes."}}');

/***/ }),

/***/ "./locales/de.json":
/*!*************************!*\
  !*** ./locales/de.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — Sportmetaverse","metaDescription":"Schauen. Trainieren. Leben."},"nav":{"features":"Funktionen","pricing":"Preise","download":"Download","community":"Community","support":"Support","signin":"Anmelden / FTOT ID"},"hero":{"title":"Nebula — Schauen. Trainieren. Leben.","subtitle":"Einheitliche Plattform für Sport.","ctaPrimary":"Kostenlos laden","ctaSecondary":"Pläne ansehen","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Was ist Nebula","cards":[{"title":"Schauen","desc":"AR/VR Streams."},{"title":"Trainieren","desc":"Pläne, Tracking, Analysen."},{"title":"Leben","desc":"Ernährung, Erholung, Community."}]},"features":{"title":"Funktionen","items":["AR/VR Streams","KI-Kommentator","KI-Assistent","Ernährung","Training","Community","Integrationen","Barrierefreiheit"]},"pricing":{"title":"Preise","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Plan wählen"},"devices":{"title":"Unterstützte Geräte","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Methode wählen","email":"E-Mail","phone":"Telefon","or":"oder","oauth":"Weiter mit","continue":"Weiter","otpTitle":"Code-Bestätigung","passwordTitle":"Passwort erstellen","twofaTitle":"2FA einrichten (empfohlen)","doneTitle":"Fertig","submit":"Senden","verify":"Bestätigen","back":"Zurück"},"ecosystem":{"title":"TFOT Labs Ökosystem"},"footer":{"product":"Produkt","company":"Unternehmen","support":"Support","legal":"Rechtlich","privacy":"Datenschutz","terms":"Nutzungsbedingungen","cookies":"Cookie-Richtlinie","refund":"Rückerstattungsrichtlinie","a11y":"Barrierefreiheitserklärung","copyright":"© {{year}} Nebula — ein Produkt von TFOT Labs. Alle Rechte vorbehalten."}}');

/***/ }),

/***/ "./locales/el.json":
/*!*************************!*\
  !*** ./locales/el.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — αθλητικό metaverse","metaDescription":"Δες. Προπονήσου. Ζήσε."},"nav":{"features":"Δυνατότητες","pricing":"Τιμές","download":"Λήψη","community":"Κοινότητα","support":"Υποστήριξη","signin":"Σύνδεση / FTOT ID"},"hero":{"title":"Nebula — Δες. Προπονήσου. Ζήσε.","subtitle":"Ενοποιημένη πλατφόρμα για τον αθλητισμό.","ctaPrimary":"Λήψη","ctaSecondary":"Δες τα πλάνα","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Τι είναι το Nebula","cards":[{"title":"Δες","desc":"Ροές AR/VR."},{"title":"Προπονήσου","desc":"Πλάνα, παρακολούθηση, αναλύσεις."},{"title":"Ζήσε","desc":"Διατροφή, αποκατάσταση, κοινότητα."}]},"features":{"title":"Δυνατότητες","items":["Ροές AR/VR","Σχολιαστής AI","Βοηθός AI","Διατροφή","Προπονήσεις","Κοινότητα","Ενσωματώσεις","Προσβασιμότητα"]},"pricing":{"title":"Τιμές","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Επιλογή πλάνου"},"devices":{"title":"Υποστηριζόμενες συσκευές","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Επιλέξτε μέθοδο","email":"Email","phone":"Τηλέφωνο","or":"ή","oauth":"Συνέχεια με","continue":"Συνέχεια","otpTitle":"Επαλήθευση κωδικού","passwordTitle":"Δημιουργία κωδικού","twofaTitle":"Ρύθμιση 2FA (προτείνεται)","doneTitle":"Έτοιμο","submit":"Υποβολή","verify":"Επαλήθευση","back":"Πίσω"},"ecosystem":{"title":"Οικοσύστημα TFOT Labs"},"footer":{"product":"Προϊόν","company":"Εταιρεία","support":"Υποστήριξη","legal":"Νομικά","privacy":"Πολιτική Απορρήτου","terms":"Όροι Χρήσης","cookies":"Πολιτική Cookies","refund":"Πολιτική Επιστροφών","a11y":"Δήλωση Προσβασιμότητας","copyright":"© {{year}} Nebula — προϊόν της TFOT Labs. Με επιφύλαξη παντός δικαιώματος."}}');

/***/ }),

/***/ "./locales/en.json":
/*!*************************!*\
  !*** ./locales/en.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — sports metaverse","metaDescription":"Watch. Train. Live. AR/VR streams, AI assistant, community."},"nav":{"features":"Features","pricing":"Pricing","download":"Download","community":"Community","support":"Support","signin":"Sign in / FTOT ID"},"hero":{"title":"Nebula — Watch. Train. Live.","subtitle":"Unified platform for sports and active life.","ctaPrimary":"Download Free","ctaSecondary":"See Plans","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"What is Nebula","cards":[{"title":"Watch","desc":"AR/VR match and event streams."},{"title":"Train","desc":"Plans, tracking, analytics."},{"title":"Live","desc":"Nutrition, recovery, community."}]},"features":{"title":"Features","items":["AR/VR streams","AI commentator","AI assistant","Nutrition","Training","Community","Integrations","Accessibility"]},"pricing":{"title":"Pricing","plans":[{"name":"Lite","price":"990₽","description":"Perfect for casual users. Access to basic AR/VR streams and community features.","features":["Basic AR/VR streams","Community access","Mobile app"]},{"name":"Pro","price":"2 490₽","description":"Ideal for active sports enthusiasts. Enhanced features and premium content.","features":["All Lite features","Premium AR/VR streams","AI assistant","Training plans","Nutrition tracking"]},{"name":"Travel","price":"3 990₽","description":"Perfect for travelers and remote workers. Access your content anywhere.","features":["All Pro features","Offline downloads","Global access","Travel mode","Multi-device sync"]},{"name":"Elite","price":"8 990₽","description":"Professional athlete package. Maximum performance and analytics.","features":["All Travel features","Advanced analytics","Professional training","Priority support","Custom integrations"]},{"name":"Infinity","price":"16 990₽","description":"Ultimate experience. Everything included plus exclusive premium content.","features":["All Elite features","Exclusive content","VIP events","Personal coach","Lifetime updates"]}],"cta":"Choose Plan","payNow":"Pay Now","close":"Close"},"devices":{"title":"Supported devices","items":["visionOS","tvOS","iOS","watchOS","Garmin OS","Tizen / Wear OS","Android","Windows","macOS"]},"ftot":{"title":"FTOT ID","start":"Choose sign-in method","email":"Email","phone":"Phone","or":"or","oauth":"Continue with","continue":"Continue","otpTitle":"Code verification","passwordTitle":"Create password","twofaTitle":"Set up 2FA (recommended)","doneTitle":"Done","submit":"Submit","verify":"Verify","back":"Back"},"ecosystem":{"title":"TFOT Labs ecosystem"},"footer":{"product":"Product","company":"Company","support":"Support","legal":"Legal","privacy":"Privacy Policy","terms":"Terms of Use","cookies":"Cookie Policy","refund":"Refund Policy","a11y":"Accessibility Statement","copyright":"© {{year}} Nebula — a TFOT Labs product. All rights reserved."}}');

/***/ }),

/***/ "./locales/es.json":
/*!*************************!*\
  !*** ./locales/es.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — metaverso deportivo","metaDescription":"Ver. Entrenar. Vivir."},"nav":{"features":"Funciones","pricing":"Precios","download":"Descargar","community":"Comunidad","support":"Soporte","signin":"Iniciar sesión / FTOT ID"},"hero":{"title":"Nebula — Ver. Entrenar. Vivir.","subtitle":"Plataforma unificada para el deporte.","ctaPrimary":"Descargar","ctaSecondary":"Ver planes","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Qué es Nebula","cards":[{"title":"Ver","desc":"Transmisiones AR/VR."},{"title":"Entrenar","desc":"Planes, seguimiento, análisis."},{"title":"Vivir","desc":"Nutrición, recuperación, comunidad."}]},"features":{"title":"Funciones","items":["Transmisiones AR/VR","Comentarista IA","Asistente IA","Nutrición","Entrenamientos","Comunidad","Integraciones","Accesibilidad"]},"pricing":{"title":"Precios","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Elegir plan"},"devices":{"title":"Dispositivos compatibles","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Elige método","email":"Correo","phone":"Teléfono","or":"o","oauth":"Continuar con","continue":"Continuar","otpTitle":"Verificación de código","passwordTitle":"Crear contraseña","twofaTitle":"Configurar 2FA (recomendado)","doneTitle":"Listo","submit":"Enviar","verify":"Verificar","back":"Atrás"},"ecosystem":{"title":"Ecosistema TFOT Labs"},"footer":{"product":"Producto","company":"Empresa","support":"Soporte","legal":"Legal","privacy":"Política de privacidad","terms":"Términos de uso","cookies":"Política de cookies","refund":"Política de reembolso","a11y":"Declaración de accesibilidad","copyright":"© {{year}} Nebula — un producto de TFOT Labs. Todos los derechos reservados."}}');

/***/ }),

/***/ "./locales/fr.json":
/*!*************************!*\
  !*** ./locales/fr.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — métavers du sport","metaDescription":"Regarder. S’entraîner. Vivre."},"nav":{"features":"Fonctions","pricing":"Tarifs","download":"Télécharger","community":"Communauté","support":"Support","signin":"Se connecter / FTOT ID"},"hero":{"title":"Nebula — Regarder. S’entraîner. Vivre.","subtitle":"Plateforme unifiée pour le sport.","ctaPrimary":"Télécharger","ctaSecondary":"Voir les offres","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Qu’est-ce que Nebula","cards":[{"title":"Regarder","desc":"Flux AR/VR."},{"title":"S’entraîner","desc":"Plans, suivi, analyses."},{"title":"Vivre","desc":"Nutrition, récupération, communauté."}]},"features":{"title":"Fonctions","items":["Flux AR/VR","Commentateur IA","Assistant IA","Nutrition","Entraînements","Communauté","Intégrations","Accessibilité"]},"pricing":{"title":"Tarifs","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Choisir"},"devices":{"title":"Appareils pris en charge","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Choisissez la méthode","email":"Email","phone":"Téléphone","or":"ou","oauth":"Continuer avec","continue":"Continuer","otpTitle":"Vérification du code","passwordTitle":"Créer un mot de passe","twofaTitle":"Activer 2FA (recommandé)","doneTitle":"Terminé","submit":"Envoyer","verify":"Vérifier","back":"Retour"},"ecosystem":{"title":"Écosystème TFOT Labs"},"footer":{"product":"Produit","company":"Entreprise","support":"Support","legal":"Légal","privacy":"Politique de confidentialité","terms":"Conditions d’utilisation","cookies":"Politique de cookies","refund":"Politique de remboursement","a11y":"Déclaration d’accessibilité","copyright":"© {{year}} Nebula — un produit de TFOT Labs. Tous droits réservés."}}');

/***/ }),

/***/ "./locales/he.json":
/*!*************************!*\
  !*** ./locales/he.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"נבולה — מטאברס ספורט","metaDescription":"לצפות. להתאמן. לחיות."},"nav":{"features":"יכולות","pricing":"תמחור","download":"הורדה","community":"קהילה","support":"תמיכה","signin":"התחברות / FTOT ID"},"hero":{"title":"נבולה — לצפות. להתאמן. לחיות.","subtitle":"פלטפורמה מאוחדת לספורט.","ctaPrimary":"הורדה","ctaSecondary":"צפו בתוכניות","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"מהי נבולה","cards":[{"title":"לצפות","desc":"שידורי AR/VR."},{"title":"להתאמן","desc":"תוכניות, מעקב, ניתוחים."},{"title":"לחיות","desc":"תזונה, החלמה, קהילה."}]},"features":{"title":"יכולות","items":["שידורי AR/VR","שדרן בינה מלאכותית","עוזר בינה מלאכותית","תזונה","אימונים","קהילה","אינטגרציות","נגישות"]},"pricing":{"title":"תמחור","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"בחרו תוכנית"},"devices":{"title":"מכשירים נתמכים","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"בחרו שיטה","email":"אימייל","phone":"טלפון","or":"או","oauth":"המשך עם","continue":"המשך","otpTitle":"אימות קוד","passwordTitle":"צרו סיסמה","twofaTitle":"הגדרת 2FA (מומלץ)","doneTitle":"הסתיים","submit":"שליחה","verify":"אימות","back":"חזרה"},"ecosystem":{"title":"אקוסיסטם TFOT Labs"},"footer":{"product":"מוצר","company":"חברה","support":"תמיכה","legal":"משפטי","privacy":"מדיניות פרטיות","terms":"תנאי שימוש","cookies":"מדיניות קוקיז","refund":"מדיניות החזרות","a11y":"הצהרת נגישות","copyright":"© {{year}} Nebula — מוצר של TFOT Labs. כל הזכויות שמורות."}}');

/***/ }),

/***/ "./locales/hi.json":
/*!*************************!*\
  !*** ./locales/hi.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — खेल मेटावर्स","metaDescription":"देखें. ट्रेन करें. जिएं."},"nav":{"features":"फीचर्स","pricing":"मूल्य","download":"डाउनलोड","community":"समुदाय","support":"सपोर्ट","signin":"साइन इन / FTOT ID"},"hero":{"title":"Nebula — देखें. ट्रेन करें. जिएं.","subtitle":"खेल के लिए एकीकृत प्लेटफ़ॉर्म.","ctaPrimary":"डाउनलोड","ctaSecondary":"प्लान देखें","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Nebula क्या है","cards":[{"title":"देखें","desc":"AR/VR स्ट्रीम्स."},{"title":"ट्रेन करें","desc":"प्लान, ट्रैकिंग, एनालिटिक्स."},{"title":"जिएं","desc":"पोषण, रिकवरी, समुदाय."}]},"features":{"title":"फीचर्स","items":["AR/VR स्ट्रीम्स","एआई कमेंटेटर","एआई असिस्टेंट","पोषण","ट्रेनिंग","समुदाय","इंटीग्रेशन","एक्सेसिबिलिटी"]},"pricing":{"title":"मूल्य","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"प्लान चुनें"},"devices":{"title":"समर्थित डिवाइस","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"तरीका चुनें","email":"ईमेल","phone":"फोन","or":"या","oauth":"इसके साथ जारी रखें","continue":"जारी रखें","otpTitle":"कोड सत्यापन","passwordTitle":"पासवर्ड बनाएँ","twofaTitle":"2FA सेट करें (अनुशंसित)","doneTitle":"पूर्ण","submit":"भेजें","verify":"सत्यापित करें","back":"वापस"},"ecosystem":{"title":"TFOT Labs पारिस्थितिकी तंत्र"},"footer":{"product":"उत्पाद","company":"कंपनी","support":"सपोर्ट","legal":"कानूनी","privacy":"गोपनीयता नीति","terms":"उपयोग की शर्तें","cookies":"कुकी नीति","refund":"रिफंड नीति","a11y":"एक्सेसिबिलिटी","copyright":"© {{year}} Nebula — TFOT Labs का उत्पाद. सर्वाधिकार सुरक्षित."}}');

/***/ }),

/***/ "./locales/it.json":
/*!*************************!*\
  !*** ./locales/it.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — metaverso sportivo","metaDescription":"Guardare. Allenarsi. Vivere."},"nav":{"features":"Funzioni","pricing":"Prezzi","download":"Scarica","community":"Community","support":"Supporto","signin":"Accedi / FTOT ID"},"hero":{"title":"Nebula — Guardare. Allenarsi. Vivere.","subtitle":"Piattaforma unificata per lo sport.","ctaPrimary":"Scarica","ctaSecondary":"Vedi piani","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Cos’è Nebula","cards":[{"title":"Guardare","desc":"Stream AR/VR."},{"title":"Allenarsi","desc":"Piani, tracking, analisi."},{"title":"Vivere","desc":"Nutrizione, recupero, community."}]},"features":{"title":"Funzioni","items":["Stream AR/VR","Commentatore IA","Assistente IA","Nutrizione","Allenamenti","Community","Integrazioni","Accessibilità"]},"pricing":{"title":"Prezzi","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Scegli piano"},"devices":{"title":"Dispositivi supportati","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Scegli metodo","email":"Email","phone":"Telefono","or":"oppure","oauth":"Continua con","continue":"Continua","otpTitle":"Verifica codice","passwordTitle":"Crea password","twofaTitle":"Configura 2FA (consigliato)","doneTitle":"Fatto","submit":"Invia","verify":"Verifica","back":"Indietro"},"ecosystem":{"title":"Ecosistema TFOT Labs"},"footer":{"product":"Prodotto","company":"Azienda","support":"Supporto","legal":"Legale","privacy":"Privacy","terms":"Termini d’uso","cookies":"Cookie","refund":"Rimborsi","a11y":"Accessibilità","copyright":"© {{year}} Nebula — un prodotto TFOT Labs. Tutti i diritti riservati."}}');

/***/ }),

/***/ "./locales/ja.json":
/*!*************************!*\
  !*** ./locales/ja.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — スポーツメタバース","metaDescription":"観る・鍛える・生きる"},"nav":{"features":"機能","pricing":"料金","download":"ダウンロード","community":"コミュニティ","support":"サポート","signin":"サインイン / FTOT ID"},"hero":{"title":"Nebula — 観る・鍛える・生きる","subtitle":"スポーツの統合プラットフォーム。","ctaPrimary":"ダウンロード","ctaSecondary":"プランを見る","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Nebula とは","cards":[{"title":"観る","desc":"AR/VR 配信。"},{"title":"鍛える","desc":"計画、トラッキング、分析。"},{"title":"生きる","desc":"栄養、回復、コミュニティ。"}]},"features":{"title":"機能","items":["AR/VR 配信","AI 解説","AI アシスタント","栄養","トレーニング","コミュニティ","連携","アクセシビリティ"]},"pricing":{"title":"料金","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"プランを選ぶ"},"devices":{"title":"対応デバイス","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"方法を選択","email":"メール","phone":"電話","or":"または","oauth":"で続行","continue":"続行","otpTitle":"コード認証","passwordTitle":"パスワード作成","twofaTitle":"2FA 設定（推奨）","doneTitle":"完了","submit":"送信","verify":"確認","back":"戻る"},"ecosystem":{"title":"TFOT Labs エコシステム"},"footer":{"product":"製品","company":"会社","support":"サポート","legal":"法務","privacy":"プライバシー","terms":"利用規約","cookies":"Cookie ポリシー","refund":"返金ポリシー","a11y":"アクセシビリティ声明","copyright":"© {{year}} Nebula — TFOT Labs の製品。"}}');

/***/ }),

/***/ "./locales/ko.json":
/*!*************************!*\
  !*** ./locales/ko.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — 스포츠 메타버스","metaDescription":"보고, 훈련하고, 살아가다."},"nav":{"features":"기능","pricing":"요금제","download":"다운로드","community":"커뮤니티","support":"지원","signin":"로그인 / FTOT ID"},"hero":{"title":"Nebula — 보고 훈련하고 살아가다","subtitle":"스포츠 통합 플랫폼.","ctaPrimary":"다운로드","ctaSecondary":"요금제 보기","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Nebula란?","cards":[{"title":"보기","desc":"AR/VR 스트림."},{"title":"훈련","desc":"플랜, 추적, 분석."},{"title":"살기","desc":"영양, 회복, 커뮤니티."}]},"features":{"title":"기능","items":["AR/VR 스트림","AI 해설","AI 어시스턴트","영양","훈련","커뮤니티","통합","접근성"]},"pricing":{"title":"요금제","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"선택"},"devices":{"title":"지원 기기","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"방법 선택","email":"이메일","phone":"전화","or":"또는","oauth":"계속하기","continue":"계속","otpTitle":"코드 확인","passwordTitle":"비밀번호 생성","twofaTitle":"2FA 설정(권장)","doneTitle":"완료","submit":"제출","verify":"확인","back":"뒤로"},"ecosystem":{"title":"TFOT Labs 생태계"},"footer":{"product":"제품","company":"회사","support":"지원","legal":"법률","privacy":"개인정보처리방침","terms":"이용약관","cookies":"쿠키 정책","refund":"환불 정책","a11y":"접근성 성명","copyright":"© {{year}} Nebula — TFOT Labs 제품."}}');

/***/ }),

/***/ "./locales/nl.json":
/*!*************************!*\
  !*** ./locales/nl.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — sportmetaverse","metaDescription":"Kijken. Trainen. Leven."},"nav":{"features":"Functies","pricing":"Prijzen","download":"Download","community":"Community","support":"Support","signin":"Inloggen / FTOT ID"},"hero":{"title":"Nebula — Kijken. Trainen. Leven.","subtitle":"Eén platform voor sport.","ctaPrimary":"Download","ctaSecondary":"Bekijk plannen","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Wat is Nebula","cards":[{"title":"Kijken","desc":"AR/VR streams."},{"title":"Trainen","desc":"Plannen, tracking, analyses."},{"title":"Leven","desc":"Voeding, herstel, community."}]},"features":{"title":"Functies","items":["AR/VR streams","AI-commentator","AI-assistent","Voeding","Training","Community","Integraties","Toegankelijkheid"]},"pricing":{"title":"Prijzen","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Kies plan"},"devices":{"title":"Ondersteunde apparaten","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Kies methode","email":"E-mail","phone":"Telefoon","or":"of","oauth":"Doorgaan met","continue":"Doorgaan","otpTitle":"Codeverificatie","passwordTitle":"Wachtwoord maken","twofaTitle":"2FA instellen (aanbevolen)","doneTitle":"Klaar","submit":"Versturen","verify":"Verifiëren","back":"Terug"},"ecosystem":{"title":"TFOT Labs ecosysteem"},"footer":{"product":"Product","company":"Bedrijf","support":"Support","legal":"Juridisch","privacy":"Privacybeleid","terms":"Gebruiksvoorwaarden","cookies":"Cookiebeleid","refund":"Restitutiebeleid","a11y":"Toegankelijkheidsverklaring","copyright":"© {{year}} Nebula — een product van TFOT Labs. Alle rechten voorbehouden."}}');

/***/ }),

/***/ "./locales/no.json":
/*!*************************!*\
  !*** ./locales/no.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — sportsmetavers","metaDescription":"Se. Tren. Lev."},"nav":{"features":"Funksjoner","pricing":"Priser","download":"Last ned","community":"Fellesskap","support":"Support","signin":"Logg inn / FTOT ID"},"hero":{"title":"Nebula — Se. Tren. Lev.","subtitle":"Samlet plattform for sport.","ctaPrimary":"Last ned","ctaSecondary":"Se planer","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Hva er Nebula","cards":[{"title":"Se","desc":"AR/VR-strømmer."},{"title":"Tren","desc":"Planer, sporing, analyse."},{"title":"Lev","desc":"Ernæring, restitusjon, fellesskap."}]},"features":{"title":"Funksjoner","items":["AR/VR-strømmer","AI-kommentator","AI-assistent","Ernæring","Trening","Fellesskap","Integrasjoner","Tilgjengelighet"]},"pricing":{"title":"Priser","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Velg plan"},"devices":{"title":"Støttede enheter","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Velg metode","email":"E-post","phone":"Telefon","or":"eller","oauth":"Fortsett med","continue":"Fortsett","otpTitle":"Kodeverifisering","passwordTitle":"Opprett passord","twofaTitle":"Sett opp 2FA (anbefalt)","doneTitle":"Ferdig","submit":"Send","verify":"Verifiser","back":"Tilbake"},"ecosystem":{"title":"TFOT Labs økosystem"},"footer":{"product":"Produkt","company":"Selskap","support":"Support","legal":"Juridisk","privacy":"Personvern","terms":"Vilkår","cookies":"Cookiepolicy","refund":"Refusjonspolicy","a11y":"Tilgjengelighetserklæring","copyright":"© {{year}} Nebula — et produkt fra TFOT Labs. Alle rettigheter forbeholdt."}}');

/***/ }),

/***/ "./locales/pt.json":
/*!*************************!*\
  !*** ./locales/pt.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — metaverso esportivo","metaDescription":"Assistir. Treinar. Viver."},"nav":{"features":"Recursos","pricing":"Planos","download":"Baixar","community":"Comunidade","support":"Suporte","signin":"Entrar / FTOT ID"},"hero":{"title":"Nebula — Assistir. Treinar. Viver.","subtitle":"Plataforma unificada para esportes.","ctaPrimary":"Baixar","ctaSecondary":"Ver planos","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"O que é Nebula","cards":[{"title":"Assistir","desc":"Transmissões AR/VR."},{"title":"Treinar","desc":"Planos, rastreamento, análises."},{"title":"Viver","desc":"Nutrição, recuperação, comunidade."}]},"features":{"title":"Recursos","items":["Transmissões AR/VR","Narrador IA","Assistente IA","Nutrição","Treinos","Comunidade","Integrações","Acessibilidade"]},"pricing":{"title":"Planos","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Escolher plano"},"devices":{"title":"Dispositivos compatíveis","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Escolha o método","email":"Email","phone":"Telefone","or":"ou","oauth":"Continuar com","continue":"Continuar","otpTitle":"Verificação de código","passwordTitle":"Criar senha","twofaTitle":"Ativar 2FA (recomendado)","doneTitle":"Concluído","submit":"Enviar","verify":"Verificar","back":"Voltar"},"ecosystem":{"title":"Ecossistema TFOT Labs"},"footer":{"product":"Produto","company":"Empresa","support":"Suporte","legal":"Jurídico","privacy":"Privacidade","terms":"Termos de uso","cookies":"Cookies","refund":"Reembolso","a11y":"Acessibilidade","copyright":"© {{year}} Nebula — um produto TFOT Labs. Todos os direitos reservados."}}');

/***/ }),

/***/ "./locales/ru.json":
/*!*************************!*\
  !*** ./locales/ru.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — спортивная метавселенная","metaDescription":"Смотреть. Тренироваться. Жить. AR/VR трансляции, ИИ-помощник, комьюнити."},"nav":{"features":"Функции","pricing":"Подписки","download":"Скачать","community":"Комьюнити","support":"Поддержка","signin":"Войти / FTOT ID"},"hero":{"title":"Nebula — Смотреть. Тренироваться. Жить.","subtitle":"Единая платформа для спорта и активной жизни.","ctaPrimary":"Скачать бесплатно","ctaSecondary":"О подписках","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Что такое Nebula","cards":[{"title":"Смотреть","desc":"AR/VR трансляции матчей и событий."},{"title":"Тренироваться","desc":"Планы тренировок, трекинг, аналитика."},{"title":"Жить","desc":"Питание, восстановление, комьюнити."}]},"features":{"title":"Функции","items":["AR/VR трансляции","ИИ-комментатор","ИИ-помощник","Питание","Тренировки","Комьюнити","Интеграции","Доступность"]},"pricing":{"title":"Подписки","plans":[{"name":"Lite","price":"990₽","description":"Идеально для обычных пользователей. Доступ к базовым AR/VR трансляциям и функциям сообщества.","features":["Базовые AR/VR трансляции","Доступ к сообществу","Мобильное приложение"]},{"name":"Pro","price":"2 490₽","description":"Подходит для активных любителей спорта. Расширенные функции и премиальный контент.","features":["Все функции Lite","Премиум AR/VR трансляции","ИИ-помощник","Планы тренировок","Отслеживание питания"]},{"name":"Travel","price":"3 990₽","description":"Идеально для путешественников и удаленных работников. Доступ к контенту в любом месте.","features":["Все функции Pro","Оффлайн загрузки","Глобальный доступ","Режим путешествий","Синхронизация устройств"]},{"name":"Elite","price":"8 990₽","description":"Профессиональный пакет для атлетов. Максимальная производительность и аналитика.","features":["Все функции Travel","Расширенная аналитика","Профессиональные тренировки","Приоритетная поддержка","Кастомные интеграции"]},{"name":"Infinity","price":"16 990₽","description":"Максимальный опыт. Все включено плюс эксклюзивный премиальный контент.","features":["Все функции Elite","Эксклюзивный контент","VIP события","Персональный тренер","Пожизненные обновления"]}],"cta":"Выбрать тариф","payNow":"Оплатить","close":"Закрыть"},"devices":{"title":"Скачай Nebula","items":["visionOS","tvOS","iOS","watchOS","Garmin OS","Tizen / Wear OS","Android","Windows","macOS"]},"ftot":{"title":"FTOT ID","start":"Выберите способ входа","email":"Email","phone":"Телефон","or":"или","oauth":"Войти через","continue":"Продолжить","otpTitle":"Подтверждение кода","passwordTitle":"Создание пароля","twofaTitle":"Настройка 2FA (рекомендуется)","doneTitle":"Готово","submit":"Отправить","verify":"Подтвердить","back":"Назад"},"ecosystem":{"title":"Экосистема TFOT Labs"},"footer":{"product":"Продукт","company":"Компания","support":"Поддержка","legal":"Юридическое","privacy":"Политика конфиденциальности","terms":"Условия использования","cookies":"Cookie-политика","refund":"Политика возврата","a11y":"Декларация доступности","copyright":"© {{year}} Nebula — продукт холдинга TFOT Labs. Все права защищены."}}');

/***/ }),

/***/ "./locales/sv.json":
/*!*************************!*\
  !*** ./locales/sv.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — sportmetavers","metaDescription":"Titta. Träna. Lev."},"nav":{"features":"Funktioner","pricing":"Priser","download":"Ladda ner","community":"Community","support":"Support","signin":"Logga in / FTOT ID"},"hero":{"title":"Nebula — Titta. Träna. Lev.","subtitle":"En enhetlig plattform för sport.","ctaPrimary":"Ladda ner","ctaSecondary":"Se planer","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Vad är Nebula","cards":[{"title":"Titta","desc":"AR/VR-strömmar."},{"title":"Träna","desc":"Planer, spårning, analys."},{"title":"Leva","desc":"Nutrition, återhämtning, community."}]},"features":{"title":"Funktioner","items":["AR/VR-strömmar","AI-kommentator","AI-assistent","Nutrition","Träning","Community","Integrationer","Tillgänglighet"]},"pricing":{"title":"Priser","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Välj plan"},"devices":{"title":"Stödda enheter","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Välj metod","email":"E-post","phone":"Telefon","or":"eller","oauth":"Fortsätt med","continue":"Fortsätt","otpTitle":"Kodverifiering","passwordTitle":"Skapa lösenord","twofaTitle":"Ställ in 2FA (rekommenderas)","doneTitle":"Klart","submit":"Skicka","verify":"Verifiera","back":"Tillbaka"},"ecosystem":{"title":"TFOT Labs ekosystem"},"footer":{"product":"Produkt","company":"Företag","support":"Support","legal":"Juridik","privacy":"Integritetspolicy","terms":"Användarvillkor","cookies":"Cookiepolicy","refund":"Återbetalningspolicy","a11y":"Tillgänglighetsredogörelse","copyright":"© {{year}} Nebula — en produkt från TFOT Labs. Alla rättigheter förbehållna."}}');

/***/ }),

/***/ "./locales/sw.json":
/*!*************************!*\
  !*** ./locales/sw.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — metaversi ya michezo","metaDescription":"Tazama. Fundisha. Ishi."},"nav":{"features":"Vipengele","pricing":"Bei","download":"Pakua","community":"Jumuiya","support":"Msaada","signin":"Ingia / FTOT ID"},"hero":{"title":"Nebula — Tazama. Fundisha. Ishi.","subtitle":"Jukwaa la michezo lililounganishwa.","ctaPrimary":"Pakua","ctaSecondary":"Angalia mipango","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"Nebula ni nini","cards":[{"title":"Tazama","desc":"Matangazo ya AR/VR."},{"title":"Fundisha","desc":"Mipango, ufuatiliaji, uchambuzi."},{"title":"Ishi","desc":"Lishe, kupona, jumuiya."}]},"features":{"title":"Vipengele","items":["Matangazo ya AR/VR","Mchambuzi wa AI","Msaidizi wa AI","Lishe","Mafunzo","Jumuiya","Ujumuishaji","Ufikiaji"]},"pricing":{"title":"Bei","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"Chagua mpango"},"devices":{"title":"Vifaa vinavyoungwa mkono","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"Chagua njia","email":"Barua pepe","phone":"Simu","or":"au","oauth":"Endelea na","continue":"Endelea","otpTitle":"Uthibitishaji wa msimbo","passwordTitle":"Unda nywila","twofaTitle":"Weka 2FA (inapendekezwa)","doneTitle":"Imekamilika","submit":"Tuma","verify":"Thibitisha","back":"Rudi"},"ecosystem":{"title":"Mfumo wa TFOT Labs"},"footer":{"product":"Bidhaa","company":"Kampuni","support":"Msaada","legal":"Kisheria","privacy":"Sera ya Faragha","terms":"Masharti ya Matumizi","cookies":"Sera ya Vidakuzi","refund":"Sera ya Marejesho","a11y":"Taarifa ya Ufikiaji","copyright":"© {{year}} Nebula — bidhaa ya TFOT Labs. Haki zote zimehifadhiwa."}}');

/***/ }),

/***/ "./locales/zh.json":
/*!*************************!*\
  !*** ./locales/zh.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"seo":{"metaTitle":"Nebula — 体育元宇宙","metaDescription":"观看·训练·生活"},"nav":{"features":"功能","pricing":"定价","download":"下载","community":"社区","support":"支持","signin":"登录 / FTOT ID"},"hero":{"title":"Nebula — 观看·训练·生活","subtitle":"统一的体育平台。","ctaPrimary":"下载","ctaSecondary":"查看方案","badges":["Apple Vision","Apple TV","iOS","Android","Apple Watch","Garmin","Samsung Watch"]},"what":{"title":"什么是 Nebula","cards":[{"title":"观看","desc":"AR/VR 直播。"},{"title":"训练","desc":"计划、跟踪、分析。"},{"title":"生活","desc":"营养、恢复、社区。"}]},"features":{"title":"功能","items":["AR/VR 直播","AI 解说","AI 助手","营养","训练","社区","集成","无障碍"]},"pricing":{"title":"定价","plans":[{"name":"Lite","price":"990₽"},{"name":"Pro","price":"2 490₽"},{"name":"Travel","price":"3 990₽"},{"name":"Elite","price":"8 990₽"},{"name":"Infinity","price":"16 990₽"}],"cta":"选择方案"},"devices":{"title":"支持的设备","items":["Apple Vision","Apple TV","iPhone","iPad","Apple Watch","Garmin","Samsung Watch","Android"]},"ftot":{"title":"FTOT ID","start":"选择方式","email":"邮箱","phone":"手机","or":"或","oauth":"继续使用","continue":"继续","otpTitle":"验证码验证","passwordTitle":"创建密码","twofaTitle":"设置 2FA（推荐）","doneTitle":"完成","submit":"提交","verify":"验证","back":"返回"},"ecosystem":{"title":"TFOT Labs 生态"},"footer":{"product":"产品","company":"公司","support":"支持","legal":"法律","privacy":"隐私政策","terms":"使用条款","cookies":"Cookie 政策","refund":"退款政策","a11y":"无障碍声明","copyright":"© {{year}} Nebula — TFOT Labs 出品。保留所有权利."}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();