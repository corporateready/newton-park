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

/***/ "./components/common/mobile-burger/index.js":
/*!**************************************************!*\
  !*** ./components/common/mobile-burger/index.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mobile_burger_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-burger.module.scss */ \"./components/common/mobile-burger/mobile-burger.module.scss\");\n/* harmony import */ var _mobile_burger_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mobile_burger_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\n// import home from \"../../public/static/common/web-home.svg\";\n// import shopping from \"../../public/static/common/shoping.svg\";\n// import restaurant from \"../../public/static/common/restaurant.svg\";\n// import fast__food from \"../../public/static/common/fast-food.svg\";\n// import big__retail from \"../../public/static/common/big-retail.svg\";\n// import home__decor from \"../../public/static/common/home-decor.svg\";\n// import medium__retail from \"../../public/static/common/medium-retail.svg\";\n// const burger__menu_items = [\n//   {\n//     id: 0,\n//     icon: home,\n//     title: \"home\",\n//     url: \"/\",\n//     descripion: \"newton park home\",\n//   },\n//   {\n//     id: 1,\n//     icon: shopping,\n//     title: \"supermarket\",\n//     url: \"/market\",\n//     descripion: \"newton park supermarket\",\n//   },\n//   {\n//     id: 2,\n//     icon: restaurant,\n//     title: \"restaurant\",\n//     url: \"/restaurant\",\n//     descripion: \"newton park restaurant\",\n//   },\n//   {\n//     id: 3,\n//     icon: fast__food,\n//     title: \"fast-food\",\n//     url: \"/fast-food\",\n//     descripion: \"newton park fast-food\",\n//   },\n//   {\n//     id: 4,\n//     icon: big__retail,\n//     title: \"big retail\",\n//     url: \"/big-retail\",\n//     descripion: \"newton park big retail\",\n//   },\n//   {\n//     id: 5,\n//     icon: home__decor,\n//     title: \"home decor\",\n//     url: \"/home-decor\",\n//     descripion: \"newton park home decor\",\n//   },\n//   {\n//     id: 6,\n//     icon: medium__retail,\n//     title: \"medium retail\",\n//     url: \"/medium-retail\",\n//     descripion: \"newton park medium retail\",\n//   },\n// ];\nfunction index() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), toggle = ref[0], setToggle = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), lastYPos = ref1[0], setLastYPos = ref1[1];\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), shouldShowActions = ref2[0], setShouldShowActions = ref2[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var handleScroll = function handleScroll() {\n            var yPos = window.scrollY;\n            var isScrollingUp = yPos < 60;\n            setShouldShowActions(isScrollingUp);\n            setLastYPos(yPos);\n        };\n        window.addEventListener(\"scroll\", handleScroll, false);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll, false);\n        };\n    }, [\n        lastYPos\n    ]);\n    var togglerBurger = function() {\n        return setToggle(!toggle);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        className: (_mobile_burger_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header__mobile),\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: shouldShowActions ? 1 : 0\n        },\n        transition: {\n            opacity: {\n                duration: 0.3\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_6__.Sling, {\n            color: \"#31414B\",\n            size: 30,\n            duration: 0.8,\n            distance: \"sm\"\n        }, void 0, false, {\n            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/common/mobile-burger/index.js\",\n            lineNumber: 100,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/common/mobile-burger/index.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this));\n};\n_s(index, \"G2KMz1XHKZYCyjgLTJt5IgaQmYk=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9tb2JpbGUtYnVyZ2VyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3VCO0FBQ2xCO0FBQ0Y7QUFFd0I7QUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZELEVBQThEO0FBQzlELEVBQWlFO0FBQ2pFLEVBQXNFO0FBQ3RFLEVBQXFFO0FBQ3JFLEVBQXVFO0FBQ3ZFLEVBQXVFO0FBQ3ZFLEVBQTZFO0FBRTdFLEVBQStCO0FBQy9CLEVBQU07QUFDTixFQUFhO0FBQ2IsRUFBa0I7QUFDbEIsRUFBcUI7QUFDckIsRUFBZ0I7QUFDaEIsRUFBc0M7QUFDdEMsRUFBTztBQUNQLEVBQU07QUFDTixFQUFhO0FBQ2IsRUFBc0I7QUFDdEIsRUFBNEI7QUFDNUIsRUFBc0I7QUFDdEIsRUFBNkM7QUFDN0MsRUFBTztBQUNQLEVBQU07QUFDTixFQUFhO0FBQ2IsRUFBd0I7QUFDeEIsRUFBMkI7QUFDM0IsRUFBMEI7QUFDMUIsRUFBNEM7QUFDNUMsRUFBTztBQUNQLEVBQU07QUFDTixFQUFhO0FBQ2IsRUFBd0I7QUFDeEIsRUFBMEI7QUFDMUIsRUFBeUI7QUFDekIsRUFBMkM7QUFDM0MsRUFBTztBQUNQLEVBQU07QUFDTixFQUFhO0FBQ2IsRUFBeUI7QUFDekIsRUFBMkI7QUFDM0IsRUFBMEI7QUFDMUIsRUFBNEM7QUFDNUMsRUFBTztBQUNQLEVBQU07QUFDTixFQUFhO0FBQ2IsRUFBeUI7QUFDekIsRUFBMkI7QUFDM0IsRUFBMEI7QUFDMUIsRUFBNEM7QUFDNUMsRUFBTztBQUNQLEVBQU07QUFDTixFQUFhO0FBQ2IsRUFBNEI7QUFDNUIsRUFBOEI7QUFDOUIsRUFBNkI7QUFDN0IsRUFBK0M7QUFDL0MsRUFBTztBQUNQLEVBQUs7QUFFVSxRQUFRLENBQUNRLEtBQUssR0FBRyxDQUFDOztJQUMvQixHQUFLLENBQXVCUixHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxPQUF6Q1UsTUFBTSxHQUFlVixHQUFxQixLQUFsQ1csU0FBUyxHQUFJWCxHQUFxQjtJQUVqRCxHQUFLLENBQTJCQSxJQUFpQixrQkFBakJBLHFEQUFjLENBQUMsQ0FBQyxPQUF6Q1ksUUFBUSxHQUFpQlosSUFBaUIsS0FBaENhLFdBQVcsR0FBSWIsSUFBaUI7SUFDakQsR0FBSyxDQUE2Q0EsSUFBcUIsa0JBQXJCQSxxREFBYyxDQUFDLEtBQUssT0FBL0RjLGlCQUFpQixHQUEwQmQsSUFBcUIsS0FBN0NlLG9CQUFvQixHQUFJZixJQUFxQjtJQUV2RUEsc0RBQWUsQ0FBQyxRQUNsQixHQUR3QixDQUFDO1lBQ1ppQixZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxHQUFHLENBQUM7WUFDdkIsR0FBSyxDQUFDQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBTztZQUMzQixHQUFLLENBQUNDLGFBQWEsR0FBR0gsSUFBSSxHQUFHLEVBQUU7WUFFL0JILG9CQUFvQixDQUFDTSxhQUFhO1lBQ2xDUixXQUFXLENBQUNLLElBQUk7UUFDbEIsQ0FBQztRQUVEQyxNQUFNLENBQUNHLGdCQUFnQixDQUFDLENBQVEsU0FBRUwsWUFBWSxFQUFFLEtBQUs7UUFFckQsTUFBTSxDQUFDLFFBQ1gsR0FEaUIsQ0FBQztZQUNaRSxNQUFNLENBQUNJLG1CQUFtQixDQUFDLENBQVEsU0FBRU4sWUFBWSxFQUFFLEtBQUs7UUFDMUQsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDTDtRQUFBQSxRQUFRO0lBQUEsQ0FBQztJQUViLEdBQUssQ0FBQ1ksYUFBYSxHQUFHLFFBQVE7UUFBRmIsTUFBTSxDQUFOQSxTQUFTLEVBQUVELE1BQU07O0lBRTdDLE1BQU0sNkVBQ0hKLHFEQUFVO1FBQ1RvQixTQUFTLEVBQUV6QixrRkFBcUI7UUFDaEMyQixPQUFPLEVBQUUsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFDdkJDLE9BQU8sRUFBRSxDQUFDO1lBQUNELE9BQU8sRUFBRWYsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBQyxDQUFDO1FBQy9DaUIsVUFBVSxFQUFFLENBQUM7WUFBQ0YsT0FBTyxFQUFFLENBQUM7Z0JBQUNHLFFBQVEsRUFBRSxHQUFHO1lBQUMsQ0FBQztRQUFDLENBQUM7OEZBRXZDM0Isa0RBQVM7WUFBQzRCLEtBQUssRUFBQyxDQUFTO1lBQUNDLElBQUksRUFBRSxFQUFFO1lBQUVGLFFBQVEsRUFBRSxHQUFHO1lBQUVHLFFBQVEsRUFBQyxDQUFJOzs7Ozs7Ozs7OztBQUd6RSxDQUFDO0dBbEN1QjNCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vbW9iaWxlLWJ1cmdlci9pbmRleC5qcz8zOTE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbW9iaWxlLWJ1cmdlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IFNsaW5nIGFzIEhhbWJ1cmdlciB9IGZyb20gXCJoYW1idXJnZXItcmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLy8gaW1wb3J0IGhvbWUgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvY29tbW9uL3dlYi1ob21lLnN2Z1wiO1xuLy8gaW1wb3J0IHNob3BwaW5nIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9zaG9waW5nLnN2Z1wiO1xuLy8gaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvY29tbW9uL3Jlc3RhdXJhbnQuc3ZnXCI7XG4vLyBpbXBvcnQgZmFzdF9fZm9vZCBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vZmFzdC1mb29kLnN2Z1wiO1xuLy8gaW1wb3J0IGJpZ19fcmV0YWlsIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9iaWctcmV0YWlsLnN2Z1wiO1xuLy8gaW1wb3J0IGhvbWVfX2RlY29yIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9ob21lLWRlY29yLnN2Z1wiO1xuLy8gaW1wb3J0IG1lZGl1bV9fcmV0YWlsIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9tZWRpdW0tcmV0YWlsLnN2Z1wiO1xuXG4vLyBjb25zdCBidXJnZXJfX21lbnVfaXRlbXMgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogMCxcbi8vICAgICBpY29uOiBob21lLFxuLy8gICAgIHRpdGxlOiBcImhvbWVcIixcbi8vICAgICB1cmw6IFwiL1wiLFxuLy8gICAgIGRlc2NyaXBpb246IFwibmV3dG9uIHBhcmsgaG9tZVwiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDEsXG4vLyAgICAgaWNvbjogc2hvcHBpbmcsXG4vLyAgICAgdGl0bGU6IFwic3VwZXJtYXJrZXRcIixcbi8vICAgICB1cmw6IFwiL21hcmtldFwiLFxuLy8gICAgIGRlc2NyaXBpb246IFwibmV3dG9uIHBhcmsgc3VwZXJtYXJrZXRcIixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAyLFxuLy8gICAgIGljb246IHJlc3RhdXJhbnQsXG4vLyAgICAgdGl0bGU6IFwicmVzdGF1cmFudFwiLFxuLy8gICAgIHVybDogXCIvcmVzdGF1cmFudFwiLFxuLy8gICAgIGRlc2NyaXBpb246IFwibmV3dG9uIHBhcmsgcmVzdGF1cmFudFwiLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDMsXG4vLyAgICAgaWNvbjogZmFzdF9fZm9vZCxcbi8vICAgICB0aXRsZTogXCJmYXN0LWZvb2RcIixcbi8vICAgICB1cmw6IFwiL2Zhc3QtZm9vZFwiLFxuLy8gICAgIGRlc2NyaXBpb246IFwibmV3dG9uIHBhcmsgZmFzdC1mb29kXCIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogNCxcbi8vICAgICBpY29uOiBiaWdfX3JldGFpbCxcbi8vICAgICB0aXRsZTogXCJiaWcgcmV0YWlsXCIsXG4vLyAgICAgdXJsOiBcIi9iaWctcmV0YWlsXCIsXG4vLyAgICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayBiaWcgcmV0YWlsXCIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogNSxcbi8vICAgICBpY29uOiBob21lX19kZWNvcixcbi8vICAgICB0aXRsZTogXCJob21lIGRlY29yXCIsXG4vLyAgICAgdXJsOiBcIi9ob21lLWRlY29yXCIsXG4vLyAgICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayBob21lIGRlY29yXCIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogNixcbi8vICAgICBpY29uOiBtZWRpdW1fX3JldGFpbCxcbi8vICAgICB0aXRsZTogXCJtZWRpdW0gcmV0YWlsXCIsXG4vLyAgICAgdXJsOiBcIi9tZWRpdW0tcmV0YWlsXCIsXG4vLyAgICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayBtZWRpdW0gcmV0YWlsXCIsXG4vLyAgIH0sXG4vLyBdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbGFzdFlQb3MsIHNldExhc3RZUG9zXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbc2hvdWxkU2hvd0FjdGlvbnMsIHNldFNob3VsZFNob3dBY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgIGNvbnN0IHlQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGNvbnN0IGlzU2Nyb2xsaW5nVXAgPSB5UG9zIDwgNjAgO1xuXG4gICAgICBzZXRTaG91bGRTaG93QWN0aW9ucyhpc1Njcm9sbGluZ1VwKTtcbiAgICAgIHNldExhc3RZUG9zKHlQb3MpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFtsYXN0WVBvc10pO1xuXG4gIGNvbnN0IHRvZ2dsZXJCdXJnZXIgPSAoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9fbW9iaWxlfVxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IHNob3VsZFNob3dBY3Rpb25zID8gMSA6IDAgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgb3BhY2l0eTogeyBkdXJhdGlvbjogMC4zIH0gfX1cbiAgICAgID5cbiAgICAgICAgPEhhbWJ1cmdlciBjb2xvcj1cIiMzMTQxNEJcIiBzaXplPXszMH0gZHVyYXRpb249ezAuOH0gZGlzdGFuY2U9XCJzbVwiLz5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkltYWdlIiwiTGluayIsIlNsaW5nIiwiSGFtYnVyZ2VyIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiaW5kZXgiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImxhc3RZUG9zIiwic2V0TGFzdFlQb3MiLCJzaG91bGRTaG93QWN0aW9ucyIsInNldFNob3VsZFNob3dBY3Rpb25zIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwieVBvcyIsIndpbmRvdyIsInNjcm9sbFkiLCJpc1Njcm9sbGluZ1VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVyQnVyZ2VyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyX19tb2JpbGUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjb2xvciIsInNpemUiLCJkaXN0YW5jZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/mobile-burger/index.js\n");

/***/ })

});