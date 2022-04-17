"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/market",{

/***/ "./pages/market.js":
/*!*************************!*\
  !*** ./pages/market.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ market; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Market_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Market.module.scss */ \"./styles/Market.module.scss\");\n/* harmony import */ var _styles_Market_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Market_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_market_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/market-page */ \"./components/market-page/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction market() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), lastYPos = ref[0], setLastYPos = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), shouldShowActions = ref1[0], setShouldShowActions = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var handleScroll = function handleScroll() {\n            var yPos = window.scrollY;\n            console.log(yPos);\n            var isScrollingUp = yPos < lastYPos;\n            setShouldShowActions(isScrollingUp);\n            setLastYPos(yPos);\n        };\n        window.addEventListener(\"scroll\", handleScroll, false);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll, false);\n        };\n    }, [\n        lastYPos\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: (_styles_Market_module_scss__WEBPACK_IMPORTED_MODULE_4___default().market),\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        transition: {\n            duration: 0.3\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_market_page__WEBPACK_IMPORTED_MODULE_2__.Hero, {}, void 0, false, {\n                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_market_page__WEBPACK_IMPORTED_MODULE_2__.About, {}, void 0, false, {\n                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_market_page__WEBPACK_IMPORTED_MODULE_2__.Motives, {}, void 0, false, {\n                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_market_page__WEBPACK_IMPORTED_MODULE_2__.Carousel, {}, void 0, false, {\n                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_market_page__WEBPACK_IMPORTED_MODULE_2__.Info, {}, void 0, false, {\n                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_market_page__WEBPACK_IMPORTED_MODULE_2__.Messenger, {}, void 0, false, {\n                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_market_page__WEBPACK_IMPORTED_MODULE_2__.MobileMessenger, {}, void 0, false, {\n                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/pages/market.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this));\n};\n_s(market, \"rInKvGk8KxA2BS5eGpgYn6NPQOg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYXJrZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN3QjtBQVNmO0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixRQUFRLENBQUNVLE1BQU0sR0FBRyxDQUFDOztJQUVoQyxHQUFLLENBQTJCVixHQUFpQixrQkFBakJBLHFEQUFjLENBQUMsQ0FBQyxPQUF6Q1ksUUFBUSxHQUFpQlosR0FBaUIsS0FBaENhLFdBQVcsR0FBSWIsR0FBaUI7SUFDakQsR0FBSyxDQUE2Q0EsSUFBcUIsa0JBQXJCQSxxREFBYyxDQUFDLEtBQUssT0FBL0RjLGlCQUFpQixHQUEwQmQsSUFBcUIsS0FBN0NlLG9CQUFvQixHQUFJZixJQUFxQjtJQUV2RUEsc0RBQWUsQ0FBQyxRQUNsQixHQUR3QixDQUFDO1lBQ1ppQixZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxHQUFHLENBQUM7WUFDdkIsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBTztZQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7WUFDaEIsR0FBSyxDQUFDSyxhQUFhLEdBQUdMLElBQUksR0FBR04sUUFBUTtZQUVyQ0csb0JBQW9CLENBQUNRLGFBQWE7WUFDbENWLFdBQVcsQ0FBQ0ssSUFBSTtRQUNsQixDQUFDO1FBRURDLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsQ0FBUSxTQUFFUCxZQUFZLEVBQUUsS0FBSztRQUVyRCxNQUFNLENBQUMsUUFDWCxHQURpQixDQUFDO1lBQ1pFLE1BQU0sQ0FBQ00sbUJBQW1CLENBQUMsQ0FBUSxTQUFFUixZQUFZLEVBQUUsS0FBSztRQUMxRCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNMO1FBQUFBLFFBQVE7SUFBQSxDQUFDO0lBRWIsTUFBTSw2RUFDSEgscURBQVU7UUFDVGtCLFNBQVMsRUFBRTFCLDBFQUFhO1FBQ3hCMkIsT0FBTyxFQUFFLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBQyxDQUFDO1FBQ3ZCQyxPQUFPLEVBQUUsQ0FBQztZQUFDRCxPQUFPLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFDdkJFLElBQUksRUFBRSxDQUFDO1lBQUNGLE9BQU8sRUFBRSxDQUFDO1FBQUMsQ0FBQztRQUNwQkcsVUFBVSxFQUFFLENBQUM7WUFBQ0MsUUFBUSxFQUFFLEdBQUc7UUFBQyxDQUFDOzt3RkFFNUIvQix5REFBSTs7Ozs7d0ZBQ0pDLDBEQUFLOzs7Ozt3RkFDTEMsNERBQU87Ozs7O3dGQUNQQyw2REFBUTs7Ozs7d0ZBQ1JDLHlEQUFJOzs7Ozt3RkFDSkMsOERBQVM7Ozs7O3dGQUNUQyxvRUFBZTs7Ozs7Ozs7Ozs7QUFHdEIsQ0FBQztHQXZDdUJFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFya2V0LmpzP2UzMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01hcmtldC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHtcbiAgSGVybyxcbiAgQWJvdXQsXG4gIE1vdGl2ZXMsXG4gIENhcm91c2VsLFxuICBJbmZvLFxuICBNZXNzZW5nZXIsXG4gIE1vYmlsZU1lc3NlbmdlclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXJrZXQtcGFnZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFya2V0KCkge1xuXG4gIGNvbnN0IFtsYXN0WVBvcywgc2V0TGFzdFlQb3NdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG91bGRTaG93QWN0aW9ucywgc2V0U2hvdWxkU2hvd0FjdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgY29uc3QgeVBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgY29uc29sZS5sb2coeVBvcyk7XG4gICAgICBjb25zdCBpc1Njcm9sbGluZ1VwID0geVBvcyA8IGxhc3RZUG9zO1xuXG4gICAgICBzZXRTaG91bGRTaG93QWN0aW9ucyhpc1Njcm9sbGluZ1VwKTtcbiAgICAgIHNldExhc3RZUG9zKHlQb3MpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFtsYXN0WVBvc10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hcmtldH1cbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgID5cbiAgICAgIDxIZXJvIC8+XG4gICAgICA8QWJvdXQgLz5cbiAgICAgIDxNb3RpdmVzIC8+XG4gICAgICA8Q2Fyb3VzZWwgLz5cbiAgICAgIDxJbmZvIC8+XG4gICAgICA8TWVzc2VuZ2VyIC8+XG4gICAgICA8TW9iaWxlTWVzc2VuZ2VyLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJIZXJvIiwiQWJvdXQiLCJNb3RpdmVzIiwiQ2Fyb3VzZWwiLCJJbmZvIiwiTWVzc2VuZ2VyIiwiTW9iaWxlTWVzc2VuZ2VyIiwibW90aW9uIiwibWFya2V0IiwidXNlU3RhdGUiLCJsYXN0WVBvcyIsInNldExhc3RZUG9zIiwic2hvdWxkU2hvd0FjdGlvbnMiLCJzZXRTaG91bGRTaG93QWN0aW9ucyIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsInlQb3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsImlzU2Nyb2xsaW5nVXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/market.js\n");

/***/ })

});