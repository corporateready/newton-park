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

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_static_common_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/common/logo.svg */ \"./public/static/common/logo.svg\");\n/* harmony import */ var _public_static_common_burger_button_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/common/burger-button.svg */ \"./public/static/common/burger-button.svg\");\n/* harmony import */ var _public_static_common_shoping_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/common/shoping.svg */ \"./public/static/common/shoping.svg\");\n/* harmony import */ var _public_static_common_restaurant_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/static/common/restaurant.svg */ \"./public/static/common/restaurant.svg\");\n/* harmony import */ var _public_static_common_fast_food_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/static/common/fast-food.svg */ \"./public/static/common/fast-food.svg\");\n/* harmony import */ var _public_static_common_big_retail_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/static/common/big-retail.svg */ \"./public/static/common/big-retail.svg\");\n/* harmony import */ var _public_static_common_home_decor_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/static/common/home-decor.svg */ \"./public/static/common/home-decor.svg\");\n/* harmony import */ var _public_static_common_medium_retail_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/static/common/medium-retail.svg */ \"./public/static/common/medium-retail.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar burger__menu_items = [\n    {\n        id: 1,\n        icon: _public_static_common_shoping_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        title: \"supermarket\",\n        url: \"\",\n        descripion: \"newton park supermarket\"\n    },\n    {\n        id: 2,\n        icon: _public_static_common_restaurant_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        title: \"restaurant\",\n        url: \"\",\n        descripion: \"newton park restaurant\"\n    },\n    {\n        id: 3,\n        icon: _public_static_common_fast_food_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        title: \"fast-food\",\n        url: \"\",\n        descripion: \"newton park fast-food\"\n    },\n    {\n        id: 4,\n        icon: _public_static_common_big_retail_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        title: \"big retail\",\n        url: \"\",\n        descripion: \"newton park big retail\"\n    },\n    {\n        id: 5,\n        icon: _public_static_common_home_decor_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        title: \"home decor\",\n        url: \"\",\n        descripion: \"newton park home decor\"\n    },\n    {\n        id: 6,\n        icon: _public_static_common_medium_retail_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n        title: \"medium retail\",\n        url: \"\",\n        descripion: \"newton park medium retail\"\n    }, \n];\nfunction index() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), toggle = ref[0], setToggle = ref[1];\n    var togglerBurger = function() {\n        return setToggle(!toggle);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().header__wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__button),\n                            onClick: togglerBurger,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_13__.Sling, {\n                                color: \"#fff\",\n                                size: 33,\n                                duration: 0.8\n                            }, void 0, false, {\n                                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().logo),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _public_static_common_logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    height: 39,\n                                    width: 75,\n                                    alt: \"newton park logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.div, {\n                    className: toggle ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__menu) : (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__menu_hide),\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    exit: {\n                        opacity: 0\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__inner),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__items),\n                            children: burger__menu_items.map(function(item) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.AnimatePresence, {\n                                    children: toggle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.li, {\n                                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__item),\n                                        initial: {\n                                            x: -10,\n                                            opacity: 0\n                                        },\n                                        animate: {\n                                            x: 0,\n                                            opacity: 1\n                                        },\n                                        transition: {\n                                            duration: 0.5\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__item_image),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: item.icon,\n                                                    width: 37,\n                                                    height: 25,\n                                                    alt: item.descripion\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 27\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 25\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__item_title),\n                                                children: item.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 25\n                                            }, _this)\n                                        ]\n                                    }, item.id, true, {\n                                        fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 23\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 19\n                                }, _this));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this));\n};\n_s(index, \"KMOoc8w16Lq5ZnA3xKzfamBycFo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mLENBQUM7R0E1RHVCSyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzP2UwZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBTbGluZyBhcyBIYW1idXJnZXIgfSBmcm9tIFwiaGFtYnVyZ2VyLXJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9sb2dvLnN2Z1wiO1xuaW1wb3J0IGJ1cmdlciBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vYnVyZ2VyLWJ1dHRvbi5zdmdcIjtcblxuaW1wb3J0IHNob3BwaW5nIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9zaG9waW5nLnN2Z1wiO1xuaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvY29tbW9uL3Jlc3RhdXJhbnQuc3ZnXCI7XG5pbXBvcnQgZmFzdF9fZm9vZCBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vZmFzdC1mb29kLnN2Z1wiO1xuaW1wb3J0IGJpZ19fcmV0YWlsIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9iaWctcmV0YWlsLnN2Z1wiO1xuaW1wb3J0IGhvbWVfX2RlY29yIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9ob21lLWRlY29yLnN2Z1wiO1xuaW1wb3J0IG1lZGl1bV9fcmV0YWlsIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9tZWRpdW0tcmV0YWlsLnN2Z1wiO1xuXG5jb25zdCBidXJnZXJfX21lbnVfaXRlbXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpY29uOiBzaG9wcGluZyxcbiAgICB0aXRsZTogXCJzdXBlcm1hcmtldFwiLFxuICAgIHVybDogXCJcIixcbiAgICBkZXNjcmlwaW9uOiBcIm5ld3RvbiBwYXJrIHN1cGVybWFya2V0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpY29uOiByZXN0YXVyYW50LFxuICAgIHRpdGxlOiBcInJlc3RhdXJhbnRcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayByZXN0YXVyYW50XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpY29uOiBmYXN0X19mb29kLFxuICAgIHRpdGxlOiBcImZhc3QtZm9vZFwiLFxuICAgIHVybDogXCJcIixcbiAgICBkZXNjcmlwaW9uOiBcIm5ld3RvbiBwYXJrIGZhc3QtZm9vZFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaWNvbjogYmlnX19yZXRhaWwsXG4gICAgdGl0bGU6IFwiYmlnIHJldGFpbFwiLFxuICAgIHVybDogXCJcIixcbiAgICBkZXNjcmlwaW9uOiBcIm5ld3RvbiBwYXJrIGJpZyByZXRhaWxcIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGljb246IGhvbWVfX2RlY29yLFxuICAgIHRpdGxlOiBcImhvbWUgZGVjb3JcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayBob21lIGRlY29yXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBpY29uOiBtZWRpdW1fX3JldGFpbCxcbiAgICB0aXRsZTogXCJtZWRpdW0gcmV0YWlsXCIsXG4gICAgdXJsOiBcIlwiLFxuICAgIGRlc2NyaXBpb246IFwibmV3dG9uIHBhcmsgbWVkaXVtIHJldGFpbFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlckJ1cmdlciA9ICgpID0+IHNldFRvZ2dsZSghdG9nZ2xlKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX3dyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyX19idXR0b259IG9uQ2xpY2s9e3RvZ2dsZXJCdXJnZXJ9PlxuICAgICAgICAgICAgPEhhbWJ1cmdlciBjb2xvcj1cIiNmZmZcIiBzaXplPXszM30gZHVyYXRpb249ezAuOH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGhlaWdodD17Mzl9IHdpZHRoPXs3NX0gYWx0PVwibmV3dG9uIHBhcmsgbG9nb1wiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3RvZ2dsZSA/IHN0eWxlcy5idXJnZXJfX21lbnUgOiBzdHlsZXMuYnVyZ2VyX19tZW51X2hpZGV9XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcl9faW5uZXJ9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcl9faXRlbXN9PlxuICAgICAgICAgICAgICB7YnVyZ2VyX19tZW51X2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7dG9nZ2xlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJfX2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogLTEwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHg6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyX19pdGVtX2ltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmRlc2NyaXBpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyX19pdGVtX3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsIkxpbmsiLCJTbGluZyIsIkhhbWJ1cmdlciIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsImxvZ28iLCJidXJnZXIiLCJzaG9wcGluZyIsInJlc3RhdXJhbnQiLCJmYXN0X19mb29kIiwiYmlnX19yZXRhaWwiLCJob21lX19kZWNvciIsIm1lZGl1bV9fcmV0YWlsIiwiYnVyZ2VyX19tZW51X2l0ZW1zIiwiaWQiLCJpY29uIiwidGl0bGUiLCJ1cmwiLCJkZXNjcmlwaW9uIiwiaW5kZXgiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInRvZ2dsZXJCdXJnZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJjb250YWluZXIiLCJoZWFkZXJfX3dyYXBwZXIiLCJidXJnZXJfX2J1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJkdXJhdGlvbiIsImhyZWYiLCJhIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJidXJnZXJfX21lbnUiLCJidXJnZXJfX21lbnVfaGlkZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJuYXYiLCJidXJnZXJfX2lubmVyIiwidWwiLCJidXJnZXJfX2l0ZW1zIiwibWFwIiwiaXRlbSIsImxpIiwiYnVyZ2VyX19pdGVtIiwieCIsInRyYW5zaXRpb24iLCJidXJnZXJfX2l0ZW1faW1hZ2UiLCJidXJnZXJfX2l0ZW1fdGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/index.js\n");

/***/ })

});