"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_components_Footer_FooterLayout_tsx";
exports.ids = ["_rsc_src_components_Footer_FooterLayout_tsx"];
exports.modules = {

/***/ "(rsc)/./src/components/Footer/FooterLayout.tsx":
/*!************************************************!*\
  !*** ./src/components/Footer/FooterLayout.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FooterLayout),\n/* harmony export */   revalidate: () => (/* binding */ revalidate)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/i18n */ \"(rsc)/./src/i18n.ts\");\n/* harmony import */ var next_intl_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-intl/server */ \"(rsc)/./node_modules/next-intl/dist/esm/server/react-server/RequestLocaleCache.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _dictionary_footer_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/dictionary/footer.json */ \"(rsc)/./src/dictionary/footer.json\");\n/* harmony import */ var _FooterNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FooterNews */ \"(rsc)/./src/components/Footer/FooterNews.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FooterNews__WEBPACK_IMPORTED_MODULE_5__]);\n_FooterNews__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// Cache object to store the last successful API response\nconst lastSuccessfulResponseCache = {};\nconst apiUrl = \"https://jsondatafromhostingertosheet.nesscoindustries.com/\";\nconst countryUrl = \"https://countryjson.nesscoindustries.com/\";\nconst revalidate = 60;\nconst fetchFooterData = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async (locale)=>{\n    try {\n        // Try to fetch data for the given locale\n        const res = await fetch(`${apiUrl}${locale}/footer.json`, {\n            next: {\n                revalidate: 60\n            }\n        });\n        if (!res.ok) {\n            console.warn(`Locale ${locale} not found, falling back to English.`);\n            const fallbackRes = await fetch(`${apiUrl}en/footer.json`, {\n                next: {\n                    revalidate: 60\n                }\n            });\n            if (!fallbackRes.ok) {\n                throw new Error(\"Fallback API failed\");\n            }\n            const fallbackData = await fallbackRes.json();\n            // Store the fallback data in the cache\n            lastSuccessfulResponseCache[\"en\"] = fallbackData.Footer[0].footerContent;\n            return fallbackData.Footer[0].footerContent;\n        }\n        const data = await res.json();\n        // Store the successful response in the cache\n        lastSuccessfulResponseCache[locale] = data.Footer[0].footerContent;\n        return data.Footer[0].footerContent;\n    } catch (error) {\n        console.error(`Error fetching footer data for locale ${locale}:`, error);\n        // If both primary and fallback fail, return cached response if available\n        if (lastSuccessfulResponseCache[locale]) {\n            console.warn(`Returning cached response for locale ${locale}.`);\n            return lastSuccessfulResponseCache[locale];\n        } else if (lastSuccessfulResponseCache[\"en\"]) {\n            console.warn(\"Returning cached English response as a fallback.\");\n            return lastSuccessfulResponseCache[\"en\"];\n        }\n        // If all remote options fail, use local data\n        console.warn(\"Using local footer data as final fallback.\");\n        return _dictionary_footer_json__WEBPACK_IMPORTED_MODULE_4__.Footer[0].footerContent;\n    }\n});\nconst fetchCountryData = (0,react__WEBPACK_IMPORTED_MODULE_3__.cache)(async (locale)=>{\n    const country = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().get(\"country\")?.value || \"in\";\n    try {\n        const res = await fetch(`${countryUrl}${country}.json`, {\n            next: {\n                revalidate: 60\n            }\n        });\n        if (!res.ok) throw new Error(\"Country API fetch failed\");\n        const countryData = await res.json();\n        return countryData[locale] || countryData[\"en\"];\n    } catch (error) {\n        console.error(\"Country API fetch failed\", error);\n        try {\n            const fallbackRes = await fetch(`${countryUrl}in.json`, {\n                next: {\n                    revalidate: 60\n                }\n            });\n            if (!fallbackRes.ok) throw new Error(\"Country fallback fetch failed\");\n            const fallbackData = await fallbackRes.json();\n            return fallbackData[locale] || fallbackData[\"en\"];\n        } catch (fallbackError) {\n            console.error(\"Country fallback fetch failed\", fallbackError);\n            return \"India\";\n        }\n    }\n});\nasync function FooterLayout({ params: { locale } }) {\n    // Set default locale if not in supported list\n    if (!_i18n__WEBPACK_IMPORTED_MODULE_1__.locales.includes(locale)) {\n        locale = \"en\"; // Fallback to English if the locale is not supported\n    }\n    // Set the locale for the request\n    (0,next_intl_server__WEBPACK_IMPORTED_MODULE_6__.setCachedRequestLocale)(locale);\n    // Fetch footer data based on locale, falling back to English if necessary\n    const footerData = await fetchFooterData(locale);\n    // Fetch translations based on the locale\n    // Handle case where data fetching fails\n    if (!footerData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Critical Error\"\n        }, void 0, false, {\n            fileName: \"D:\\\\first-deployment\\\\FirstDeployment\\\\src\\\\components\\\\Footer\\\\FooterLayout.tsx\",\n            lineNumber: 111,\n            columnNumber: 12\n        }, this); // Translated error message\n    }\n    const language = (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().get(\"language\")?.value || \"in\";\n    const countryName = await fetchCountryData(locale);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterNews__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            footerData: footerData,\n            country: countryName,\n            langauge: language\n        }, void 0, false, {\n            fileName: \"D:\\\\first-deployment\\\\FirstDeployment\\\\src\\\\components\\\\Footer\\\\FooterLayout.tsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\first-deployment\\\\FirstDeployment\\\\src\\\\components\\\\Footer\\\\FooterLayout.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDNkI7QUFDdkI7QUFDVDtBQUN5QjtBQUNsQjtBQUVyQyx5REFBeUQ7QUFDekQsTUFBTU0sOEJBQW1ELENBQUM7QUFFMUQsTUFBTUMsU0FBUztBQUNmLE1BQU1DLGFBQWE7QUFVWixNQUFNQyxhQUFhLEdBQUc7QUFFN0IsTUFBTUMsa0JBQWtCUCw0Q0FBS0EsQ0FBQyxPQUFPUTtJQUNuQyxJQUFJO1FBQ0YseUNBQXlDO1FBQ3pDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLEVBQUVOLE9BQU8sRUFBRUksT0FBTyxZQUFZLENBQUMsRUFBRTtZQUN4REcsTUFBTTtnQkFBRUwsWUFBWTtZQUFHO1FBQ3pCO1FBRUEsSUFBSSxDQUFDRyxJQUFJRyxFQUFFLEVBQUU7WUFDWEMsUUFBUUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFTixPQUFPLG9DQUFvQyxDQUFDO1lBQ25FLE1BQU1PLGNBQWMsTUFBTUwsTUFBTSxDQUFDLEVBQUVOLE9BQU8sY0FBYyxDQUFDLEVBQUU7Z0JBQ3pETyxNQUFNO29CQUFFTCxZQUFZO2dCQUFHO1lBQ3pCO1lBRUEsSUFBSSxDQUFDUyxZQUFZSCxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sSUFBSUksTUFBTTtZQUNsQjtZQUVBLE1BQU1DLGVBQWUsTUFBTUYsWUFBWUcsSUFBSTtZQUMzQyx1Q0FBdUM7WUFDdkNmLDJCQUEyQixDQUFDLEtBQUssR0FBR2MsYUFBYUUsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsYUFBYTtZQUN4RSxPQUFPSCxhQUFhRSxNQUFNLENBQUMsRUFBRSxDQUFDQyxhQUFhO1FBQzdDO1FBRUEsTUFBTUMsT0FBTyxNQUFNWixJQUFJUyxJQUFJO1FBQzNCLDZDQUE2QztRQUM3Q2YsMkJBQTJCLENBQUNLLE9BQU8sR0FBR2EsS0FBS0YsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsYUFBYTtRQUNsRSxPQUFPQyxLQUFLRixNQUFNLENBQUMsRUFBRSxDQUFDQyxhQUFhO0lBQ3JDLEVBQUUsT0FBT0UsT0FBTztRQUNkVCxRQUFRUyxLQUFLLENBQUMsQ0FBQyxzQ0FBc0MsRUFBRWQsT0FBTyxDQUFDLENBQUMsRUFBRWM7UUFFbEUseUVBQXlFO1FBQ3pFLElBQUluQiwyQkFBMkIsQ0FBQ0ssT0FBTyxFQUFFO1lBQ3ZDSyxRQUFRQyxJQUFJLENBQUMsQ0FBQyxxQ0FBcUMsRUFBRU4sT0FBTyxDQUFDLENBQUM7WUFDOUQsT0FBT0wsMkJBQTJCLENBQUNLLE9BQU87UUFDNUMsT0FBTyxJQUFJTCwyQkFBMkIsQ0FBQyxLQUFLLEVBQUU7WUFDNUNVLFFBQVFDLElBQUksQ0FBQztZQUNiLE9BQU9YLDJCQUEyQixDQUFDLEtBQUs7UUFDMUM7UUFFQSw2Q0FBNkM7UUFDN0NVLFFBQVFDLElBQUksQ0FBQztRQUNiLE9BQU9iLDRFQUF1QztJQUNoRDtBQUNGO0FBRUEsTUFBTXNCLG1CQUFtQnZCLDRDQUFLQSxDQUFDLE9BQU9RO0lBQ3BDLE1BQU1nQixVQUFVekIscURBQU9BLEdBQUcwQixHQUFHLENBQUMsWUFBWUMsU0FBUztJQUVuRCxJQUFJO1FBQ0YsTUFBTWpCLE1BQU0sTUFBTUMsTUFBTSxDQUFDLEVBQUVMLFdBQVcsRUFBRW1CLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDdERiLE1BQU07Z0JBQUVMLFlBQVk7WUFBRztRQUN6QjtRQUNBLElBQUksQ0FBQ0csSUFBSUcsRUFBRSxFQUFFLE1BQU0sSUFBSUksTUFBTTtRQUM3QixNQUFNVyxjQUE0QixNQUFNbEIsSUFBSVMsSUFBSTtRQUNoRCxPQUFPUyxXQUFXLENBQUNuQixPQUFPLElBQUltQixXQUFXLENBQUMsS0FBSztJQUNqRCxFQUFFLE9BQU9MLE9BQU87UUFDZFQsUUFBUVMsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsSUFBSTtZQUNGLE1BQU1QLGNBQWMsTUFBTUwsTUFBTSxDQUFDLEVBQUVMLFdBQVcsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RETSxNQUFNO29CQUFFTCxZQUFZO2dCQUFHO1lBQ3pCO1lBQ0EsSUFBSSxDQUFDUyxZQUFZSCxFQUFFLEVBQUUsTUFBTSxJQUFJSSxNQUFNO1lBQ3JDLE1BQU1DLGVBQTZCLE1BQU1GLFlBQVlHLElBQUk7WUFDekQsT0FBT0QsWUFBWSxDQUFDVCxPQUFPLElBQUlTLFlBQVksQ0FBQyxLQUFLO1FBQ25ELEVBQUUsT0FBT1csZUFBZTtZQUN0QmYsUUFBUVMsS0FBSyxDQUFDLGlDQUFpQ007WUFDL0MsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQUVlLGVBQWVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFdEIsTUFBTSxFQUFFLEVBQVM7SUFDdEUsOENBQThDO0lBQzlDLElBQUksQ0FBQ1gsMENBQU9BLENBQUNrQyxRQUFRLENBQUN2QixTQUFnQjtRQUNwQ0EsU0FBUyxNQUFNLHFEQUFxRDtJQUN0RTtJQUVBLGlDQUFpQztJQUNqQ1Ysd0VBQXlCQSxDQUFDVTtJQUUxQiwwRUFBMEU7SUFDMUUsTUFBTXdCLGFBQWEsTUFBTXpCLGdCQUFnQkM7SUFFekMseUNBQXlDO0lBRXpDLHdDQUF3QztJQUN4QyxJQUFJLENBQUN3QixZQUFZO1FBQ2YscUJBQU8sOERBQUNDO3NCQUFJOzs7OztrQkFBc0IsMkJBQTJCO0lBQy9EO0lBRUEsTUFBTUMsV0FBV25DLHFEQUFPQSxHQUFHMEIsR0FBRyxDQUFDLGFBQWFDLFNBQVM7SUFDckQsTUFBTVMsY0FBYyxNQUFNWixpQkFBaUJmO0lBRTNDLHFCQUNFLDhEQUFDeUI7a0JBQ0MsNEVBQUMvQixtREFBU0E7WUFDUjhCLFlBQVlBO1lBQ1pSLFNBQVNXO1lBQ1RDLFVBQVVGOzs7Ozs7Ozs7OztBQUlsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxheW91dC50c3g/ZDY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2NhbGVzIH0gZnJvbSBcIkAvaTE4blwiO1xyXG5pbXBvcnQgeyAgdW5zdGFibGVfc2V0UmVxdWVzdExvY2FsZSB9IGZyb20gXCJuZXh0LWludGwvc2VydmVyXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tIFwibmV4dC9oZWFkZXJzXCI7XHJcbmltcG9ydCB7IGNhY2hlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBsb2NhbEZvb3RlckRhdGEgZnJvbSBcIkAvZGljdGlvbmFyeS9mb290ZXIuanNvblwiO1xyXG5pbXBvcnQgRm9vdGVyTmV3IGZyb20gXCIuL0Zvb3Rlck5ld3NcIjtcclxuXHJcbi8vIENhY2hlIG9iamVjdCB0byBzdG9yZSB0aGUgbGFzdCBzdWNjZXNzZnVsIEFQSSByZXNwb25zZVxyXG5jb25zdCBsYXN0U3VjY2Vzc2Z1bFJlc3BvbnNlQ2FjaGU6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuXHJcbmNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9qc29uZGF0YWZyb21ob3N0aW5nZXJ0b3NoZWV0Lm5lc3Njb2luZHVzdHJpZXMuY29tL1wiO1xyXG5jb25zdCBjb3VudHJ5VXJsID0gXCJodHRwczovL2NvdW50cnlqc29uLm5lc3Njb2luZHVzdHJpZXMuY29tL1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBwYXJhbXM6IHsgbG9jYWxlOiBzdHJpbmcgfTtcclxufTtcclxuXHJcbnR5cGUgQ291bnRyeU5hbWVzID0ge1xyXG4gIFtsb2NhbGU6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZhbGlkYXRlID0gNjA7XHJcblxyXG5jb25zdCBmZXRjaEZvb3RlckRhdGEgPSBjYWNoZShhc3luYyAobG9jYWxlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBUcnkgdG8gZmV0Y2ggZGF0YSBmb3IgdGhlIGdpdmVuIGxvY2FsZVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfSR7bG9jYWxlfS9mb290ZXIuanNvbmAsIHtcclxuICAgICAgbmV4dDogeyByZXZhbGlkYXRlOiA2MCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgY29uc29sZS53YXJuKGBMb2NhbGUgJHtsb2NhbGV9IG5vdCBmb3VuZCwgZmFsbGluZyBiYWNrIHRvIEVuZ2xpc2guYCk7XHJcbiAgICAgIGNvbnN0IGZhbGxiYWNrUmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfWVuL2Zvb3Rlci5qc29uYCwge1xyXG4gICAgICAgIG5leHQ6IHsgcmV2YWxpZGF0ZTogNjAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIWZhbGxiYWNrUmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFsbGJhY2sgQVBJIGZhaWxlZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmFsbGJhY2tEYXRhID0gYXdhaXQgZmFsbGJhY2tSZXMuanNvbigpO1xyXG4gICAgICAvLyBTdG9yZSB0aGUgZmFsbGJhY2sgZGF0YSBpbiB0aGUgY2FjaGVcclxuICAgICAgbGFzdFN1Y2Nlc3NmdWxSZXNwb25zZUNhY2hlW1wiZW5cIl0gPSBmYWxsYmFja0RhdGEuRm9vdGVyWzBdLmZvb3RlckNvbnRlbnQ7XHJcbiAgICAgIHJldHVybiBmYWxsYmFja0RhdGEuRm9vdGVyWzBdLmZvb3RlckNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyBTdG9yZSB0aGUgc3VjY2Vzc2Z1bCByZXNwb25zZSBpbiB0aGUgY2FjaGVcclxuICAgIGxhc3RTdWNjZXNzZnVsUmVzcG9uc2VDYWNoZVtsb2NhbGVdID0gZGF0YS5Gb290ZXJbMF0uZm9vdGVyQ29udGVudDtcclxuICAgIHJldHVybiBkYXRhLkZvb3RlclswXS5mb290ZXJDb250ZW50O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBmZXRjaGluZyBmb290ZXIgZGF0YSBmb3IgbG9jYWxlICR7bG9jYWxlfTpgLCBlcnJvcik7XHJcblxyXG4gICAgLy8gSWYgYm90aCBwcmltYXJ5IGFuZCBmYWxsYmFjayBmYWlsLCByZXR1cm4gY2FjaGVkIHJlc3BvbnNlIGlmIGF2YWlsYWJsZVxyXG4gICAgaWYgKGxhc3RTdWNjZXNzZnVsUmVzcG9uc2VDYWNoZVtsb2NhbGVdKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgUmV0dXJuaW5nIGNhY2hlZCByZXNwb25zZSBmb3IgbG9jYWxlICR7bG9jYWxlfS5gKTtcclxuICAgICAgcmV0dXJuIGxhc3RTdWNjZXNzZnVsUmVzcG9uc2VDYWNoZVtsb2NhbGVdO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0U3VjY2Vzc2Z1bFJlc3BvbnNlQ2FjaGVbXCJlblwiXSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJSZXR1cm5pbmcgY2FjaGVkIEVuZ2xpc2ggcmVzcG9uc2UgYXMgYSBmYWxsYmFjay5cIik7XHJcbiAgICAgIHJldHVybiBsYXN0U3VjY2Vzc2Z1bFJlc3BvbnNlQ2FjaGVbXCJlblwiXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBhbGwgcmVtb3RlIG9wdGlvbnMgZmFpbCwgdXNlIGxvY2FsIGRhdGFcclxuICAgIGNvbnNvbGUud2FybihcIlVzaW5nIGxvY2FsIGZvb3RlciBkYXRhIGFzIGZpbmFsIGZhbGxiYWNrLlwiKTtcclxuICAgIHJldHVybiBsb2NhbEZvb3RlckRhdGEuRm9vdGVyWzBdLmZvb3RlckNvbnRlbnQ7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGZldGNoQ291bnRyeURhdGEgPSBjYWNoZShhc3luYyAobG9jYWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xyXG4gIGNvbnN0IGNvdW50cnkgPSBjb29raWVzKCkuZ2V0KFwiY291bnRyeVwiKT8udmFsdWUgfHwgXCJpblwiO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7Y291bnRyeVVybH0ke2NvdW50cnl9Lmpzb25gLCB7XHJcbiAgICAgIG5leHQ6IHsgcmV2YWxpZGF0ZTogNjAgfSxcclxuICAgIH0pO1xyXG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkNvdW50cnkgQVBJIGZldGNoIGZhaWxlZFwiKTtcclxuICAgIGNvbnN0IGNvdW50cnlEYXRhOiBDb3VudHJ5TmFtZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGNvdW50cnlEYXRhW2xvY2FsZV0gfHwgY291bnRyeURhdGFbXCJlblwiXTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNvdW50cnkgQVBJIGZldGNoIGZhaWxlZFwiLCBlcnJvcik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmYWxsYmFja1JlcyA9IGF3YWl0IGZldGNoKGAke2NvdW50cnlVcmx9aW4uanNvbmAsIHtcclxuICAgICAgICBuZXh0OiB7IHJldmFsaWRhdGU6IDYwIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIWZhbGxiYWNrUmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VudHJ5IGZhbGxiYWNrIGZldGNoIGZhaWxlZFwiKTtcclxuICAgICAgY29uc3QgZmFsbGJhY2tEYXRhOiBDb3VudHJ5TmFtZXMgPSBhd2FpdCBmYWxsYmFja1Jlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBmYWxsYmFja0RhdGFbbG9jYWxlXSB8fCBmYWxsYmFja0RhdGFbXCJlblwiXTtcclxuICAgIH0gY2F0Y2ggKGZhbGxiYWNrRXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNvdW50cnkgZmFsbGJhY2sgZmV0Y2ggZmFpbGVkXCIsIGZhbGxiYWNrRXJyb3IpO1xyXG4gICAgICByZXR1cm4gXCJJbmRpYVwiO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBGb290ZXJMYXlvdXQoeyBwYXJhbXM6IHsgbG9jYWxlIH0gfTogUHJvcHMpIHtcclxuICAvLyBTZXQgZGVmYXVsdCBsb2NhbGUgaWYgbm90IGluIHN1cHBvcnRlZCBsaXN0XHJcbiAgaWYgKCFsb2NhbGVzLmluY2x1ZGVzKGxvY2FsZSBhcyBhbnkpKSB7XHJcbiAgICBsb2NhbGUgPSBcImVuXCI7IC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2ggaWYgdGhlIGxvY2FsZSBpcyBub3Qgc3VwcG9ydGVkXHJcbiAgfVxyXG5cclxuICAvLyBTZXQgdGhlIGxvY2FsZSBmb3IgdGhlIHJlcXVlc3RcclxuICB1bnN0YWJsZV9zZXRSZXF1ZXN0TG9jYWxlKGxvY2FsZSk7XHJcblxyXG4gIC8vIEZldGNoIGZvb3RlciBkYXRhIGJhc2VkIG9uIGxvY2FsZSwgZmFsbGluZyBiYWNrIHRvIEVuZ2xpc2ggaWYgbmVjZXNzYXJ5XHJcbiAgY29uc3QgZm9vdGVyRGF0YSA9IGF3YWl0IGZldGNoRm9vdGVyRGF0YShsb2NhbGUpO1xyXG5cclxuICAvLyBGZXRjaCB0cmFuc2xhdGlvbnMgYmFzZWQgb24gdGhlIGxvY2FsZVxyXG5cclxuICAvLyBIYW5kbGUgY2FzZSB3aGVyZSBkYXRhIGZldGNoaW5nIGZhaWxzXHJcbiAgaWYgKCFmb290ZXJEYXRhKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Dcml0aWNhbCBFcnJvcjwvZGl2PjsgLy8gVHJhbnNsYXRlZCBlcnJvciBtZXNzYWdlXHJcbiAgfVxyXG5cclxuICBjb25zdCBsYW5ndWFnZSA9IGNvb2tpZXMoKS5nZXQoXCJsYW5ndWFnZVwiKT8udmFsdWUgfHwgXCJpblwiO1xyXG4gIGNvbnN0IGNvdW50cnlOYW1lID0gYXdhaXQgZmV0Y2hDb3VudHJ5RGF0YShsb2NhbGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZvb3Rlck5ld1xyXG4gICAgICAgIGZvb3RlckRhdGE9e2Zvb3RlckRhdGF9XHJcbiAgICAgICAgY291bnRyeT17Y291bnRyeU5hbWV9XHJcbiAgICAgICAgbGFuZ2F1Z2U9e2xhbmd1YWdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibG9jYWxlcyIsInVuc3RhYmxlX3NldFJlcXVlc3RMb2NhbGUiLCJjb29raWVzIiwiY2FjaGUiLCJsb2NhbEZvb3RlckRhdGEiLCJGb290ZXJOZXciLCJsYXN0U3VjY2Vzc2Z1bFJlc3BvbnNlQ2FjaGUiLCJhcGlVcmwiLCJjb3VudHJ5VXJsIiwicmV2YWxpZGF0ZSIsImZldGNoRm9vdGVyRGF0YSIsImxvY2FsZSIsInJlcyIsImZldGNoIiwibmV4dCIsIm9rIiwiY29uc29sZSIsIndhcm4iLCJmYWxsYmFja1JlcyIsIkVycm9yIiwiZmFsbGJhY2tEYXRhIiwianNvbiIsIkZvb3RlciIsImZvb3RlckNvbnRlbnQiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaENvdW50cnlEYXRhIiwiY291bnRyeSIsImdldCIsInZhbHVlIiwiY291bnRyeURhdGEiLCJmYWxsYmFja0Vycm9yIiwiRm9vdGVyTGF5b3V0IiwicGFyYW1zIiwiaW5jbHVkZXMiLCJmb290ZXJEYXRhIiwiZGl2IiwibGFuZ3VhZ2UiLCJjb3VudHJ5TmFtZSIsImxhbmdhdWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/components/Footer/FooterLayout.tsx\n");

/***/ }),

/***/ "(rsc)/./src/components/Footer/FooterNews.tsx":
/*!**********************************************!*\
  !*** ./src/components/Footer/FooterNews.tsx ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const proxy = await (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\first-deployment\FirstDeployment\src\components\Footer\FooterNews.tsx`)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "(rsc)/./src/dictionary/footer.json":
/*!************************************!*\
  !*** ./src/dictionary/footer.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"Footer":[{"footerContent":{"storeTitle":"SERVICES","businessTitle":"BUSINESS PARTNERS","languageTitle":"LANGUAGE & REGION","awarTitle":"AWARDS & CERTIFICATIONS","clienteleTitle":"CLIENTELE","carrersTitle":"CAREERS","linkTitle":"ABOUT NESSCO","linkSecond":"GUIDES","serviceTitle":"PRODUCTS","subscribeTitle":"SUBSCRIBE TO NEWSLETTER","contactusTitle":"CONTACT US","addressTitle":"ADDRESS","stores":[{"address":"Book A Service","link":"/support/services"},{"address":"User Guide","link":"/support/user-guide"},{"address":"Genuine Parts","link":"/support/genuine-parts"}],"businessPartners":"Our Business Partners","awards":[{"src":"https://assets.nesscoindustries.com/public/assets/footer/certificate.webp","alt":"Awards"}],"clients":"Our Clients","careers":[{"career":"Fulltime"},{"career":"Freelance"}],"links":[{"link":"Mission","ref":"/about/vision"},{"link":"Our Company","ref":"/about/our-company"},{"link":"Our Strength","ref":"/about/our-strength"},{"link":"The Pink City","ref":"/about/the-pink-city"},{"link":"Projects","ref":"/about/projects"},{"link":"Sustainibility","ref":"/about/sustainability"}],"linkstwo":[{"linksecond":"FAQs","ref":"/faq"},{"linksecond":"Blogs","ref":"/blog"},{"linksecond":"Mediaroom","ref":"/media-room"},{"linksecond":"Know Your Machine","ref":"/knowledge-center/know-your-machine"},{"linksecond":"Know Your Product","ref":"/knowledge-center/know-your-product"},{"linksecond":"Know Your Business","ref":"/knowledge-center/know-your-bussiness"},{"linksecond":"Privacy Policy","ref":"/privacy-policy"},{"linksecond":"Sitemap","ref":"/contact"}],"services":[{"service":"Paper Cup Machine","ref":"/products/paper-cup-machine"},{"service":"Paper Bag Machine","ref":"/products/paper-bag-machine"},{"service":"Paper Bowl Machine","ref":"/products/paper-bowl-machine"},{"service":"Paper Plate Machine","ref":"/products/paper-plate-machine"},{"service":"Paper Box Machine","ref":"/products/paper-box-machine"},{"service":"Insulating Cup Machine","ref":"/products/insulating-cup-machine"},{"service":"Die Cutting Machine","ref":"/products/die-cutting-machine"},{"service":"Flexo Printing Machine","ref":"/products/flexo-printing-machine"}],"address":"E-186, Apparel Park, RIICO Industrial Area, Mahal Road, Jagatpura, Jaipur (Rajasthan) - 302022, INDIA","contacts":[{"name":"+ 91 99822 00038","href":"tel:+91 95494 44484"},{"name":"+ 91 95494 44484","href":"tel:+91 95494 44484"},{"name":"info@nesscoindia.com","href":"mailto:info@nesscoindia.com"}],"socialIcons":[{"src":"/assets/footer/facebook.png","alt":"Facebook"},{"src":"/assets/footer/twitter.png","alt":"Twitter"},{"src":"/assets/footer/youtube1.png","alt":"YouTube","imgclass":"h-14"},{"src":"/assets/footer/instagram.png","alt":"Instagram"},{"src":"/assets/footer/linkedin.png","alt":"LinkedIn"}],"copyright":"Nessco © 2024 All Right Reserved","privacyPolicy":"Privacy Policy"}}]}');

/***/ })

};
;