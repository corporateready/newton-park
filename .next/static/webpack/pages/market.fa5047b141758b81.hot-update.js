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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_static_common_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/common/logo.svg */ \"./public/static/common/logo.svg\");\n/* harmony import */ var _public_static_common_burger_button_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/static/common/burger-button.svg */ \"./public/static/common/burger-button.svg\");\n/* harmony import */ var _public_static_common_shoping_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/common/shoping.svg */ \"./public/static/common/shoping.svg\");\n/* harmony import */ var _public_static_common_restaurant_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/static/common/restaurant.svg */ \"./public/static/common/restaurant.svg\");\n/* harmony import */ var _public_static_common_fast_food_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/static/common/fast-food.svg */ \"./public/static/common/fast-food.svg\");\n/* harmony import */ var _public_static_common_big_retail_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/static/common/big-retail.svg */ \"./public/static/common/big-retail.svg\");\n/* harmony import */ var _public_static_common_home_decor_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/static/common/home-decor.svg */ \"./public/static/common/home-decor.svg\");\n/* harmony import */ var _public_static_common_medium_retail_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/static/common/medium-retail.svg */ \"./public/static/common/medium-retail.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar burger__menu_items = [\n    {\n        id: 1,\n        icon: _public_static_common_shoping_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        title: \"supermarket\",\n        url: \"\",\n        descripion: \"newton park supermarket\"\n    },\n    {\n        id: 2,\n        icon: _public_static_common_restaurant_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        title: \"restaurant\",\n        url: \"\",\n        descripion: \"newton park restaurant\"\n    },\n    {\n        id: 3,\n        icon: _public_static_common_fast_food_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        title: \"fast-food\",\n        url: \"\",\n        descripion: \"newton park fast-food\"\n    },\n    {\n        id: 4,\n        icon: _public_static_common_big_retail_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        title: \"big retail\",\n        url: \"\",\n        descripion: \"newton park big retail\"\n    },\n    {\n        id: 5,\n        icon: _public_static_common_home_decor_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n        title: \"home decor\",\n        url: \"\",\n        descripion: \"newton park home decor\"\n    },\n    {\n        id: 6,\n        icon: _public_static_common_medium_retail_svg__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n        title: \"medium retail\",\n        url: \"\",\n        descripion: \"newton park medium retail\"\n    }, \n];\nfunction index() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), toggle = ref[0], setToggle = ref[1];\n    var togglerBurger = function() {\n        return setToggle(!toggle);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().header),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().header__wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__button),\n                            onClick: togglerBurger,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_13__.Sling, {\n                                color: \"#fff\",\n                                size: 33,\n                                duration: 0.8\n                            }, void 0, false, {\n                                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().logo),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _public_static_common_logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    height: 39,\n                                    width: 75,\n                                    alt: \"newton park logo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: toggle ? (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__menu) : (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__menu_hide),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.nav, {\n                        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__inner),\n                        initial: op,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__items),\n                            children: burger__menu_items.map(function(item) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__item),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__item_image),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: item.icon,\n                                                width: 37,\n                                                height: 25,\n                                                alt: item.descripion\n                                            }, void 0, false, {\n                                                fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 23\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_12___default().burger__item_title),\n                                            children: item.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                            lineNumber: 99,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, item.id, true, {\n                                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 19\n                                }, _this));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/evgheninujnenco/ready-projects/newton-park/components/header/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this));\n};\n_s(index, \"KMOoc8w16Lq5ZnA3xKzfamBycFo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxzREFBVTt3QkFBQ3FCLFNBQVMsRUFBRTFCLDJFQUFvQjt3QkFDM0M2QyxPQUFPLEVBQUVDLEVBQUU7OEdBQ1JDLENBQUU7NEJBQUNyQixTQUFTLEVBQUUxQiwyRUFBb0I7c0NBQ2hDYyxrQkFBa0IsQ0FBQ21DLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO2dDQUNqQyxNQUFNLDZFQUNIQyxDQUFFO29DQUFDekIsU0FBUyxFQUFFMUIsMEVBQW1COztvSEFDL0IyQixDQUFHOzRDQUFDRCxTQUFTLEVBQUUxQixnRkFBeUI7a0lBQ3RDQyxtREFBSztnREFDSm9DLEdBQUcsRUFBRWEsSUFBSSxDQUFDbEMsSUFBSTtnREFDZHVCLEtBQUssRUFBRSxFQUFFO2dEQUNURCxNQUFNLEVBQUUsRUFBRTtnREFDVkUsR0FBRyxFQUFFVSxJQUFJLENBQUMvQixVQUFVOzs7Ozs7Ozs7OztvSEFHdkJRLENBQUc7NENBQUNELFNBQVMsRUFBRTFCLGdGQUF5QjtzREFDdENrRCxJQUFJLENBQUNqQyxLQUFLOzs7Ozs7O21DQVYwQmlDLElBQUksQ0FBQ25DLEVBQUU7Ozs7OzRCQWNwRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZixDQUFDO0dBL0N1QkssS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcz9lMGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgU2xpbmcgYXMgSGFtYnVyZ2VyIH0gZnJvbSBcImhhbWJ1cmdlci1yZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vbG9nby5zdmdcIjtcbmltcG9ydCBidXJnZXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvY29tbW9uL2J1cmdlci1idXR0b24uc3ZnXCI7XG5cbmltcG9ydCBzaG9wcGluZyBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vc2hvcGluZy5zdmdcIjtcbmltcG9ydCByZXN0YXVyYW50IGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2NvbW1vbi9yZXN0YXVyYW50LnN2Z1wiO1xuaW1wb3J0IGZhc3RfX2Zvb2QgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvY29tbW9uL2Zhc3QtZm9vZC5zdmdcIjtcbmltcG9ydCBiaWdfX3JldGFpbCBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vYmlnLXJldGFpbC5zdmdcIjtcbmltcG9ydCBob21lX19kZWNvciBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vaG9tZS1kZWNvci5zdmdcIjtcbmltcG9ydCBtZWRpdW1fX3JldGFpbCBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9jb21tb24vbWVkaXVtLXJldGFpbC5zdmdcIjtcblxuY29uc3QgYnVyZ2VyX19tZW51X2l0ZW1zID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaWNvbjogc2hvcHBpbmcsXG4gICAgdGl0bGU6IFwic3VwZXJtYXJrZXRcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayBzdXBlcm1hcmtldFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaWNvbjogcmVzdGF1cmFudCxcbiAgICB0aXRsZTogXCJyZXN0YXVyYW50XCIsXG4gICAgdXJsOiBcIlwiLFxuICAgIGRlc2NyaXBpb246IFwibmV3dG9uIHBhcmsgcmVzdGF1cmFudFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaWNvbjogZmFzdF9fZm9vZCxcbiAgICB0aXRsZTogXCJmYXN0LWZvb2RcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayBmYXN0LWZvb2RcIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGljb246IGJpZ19fcmV0YWlsLFxuICAgIHRpdGxlOiBcImJpZyByZXRhaWxcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgZGVzY3JpcGlvbjogXCJuZXd0b24gcGFyayBiaWcgcmV0YWlsXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBpY29uOiBob21lX19kZWNvcixcbiAgICB0aXRsZTogXCJob21lIGRlY29yXCIsXG4gICAgdXJsOiBcIlwiLFxuICAgIGRlc2NyaXBpb246IFwibmV3dG9uIHBhcmsgaG9tZSBkZWNvclwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgaWNvbjogbWVkaXVtX19yZXRhaWwsXG4gICAgdGl0bGU6IFwibWVkaXVtIHJldGFpbFwiLFxuICAgIHVybDogXCJcIixcbiAgICBkZXNjcmlwaW9uOiBcIm5ld3RvbiBwYXJrIG1lZGl1bSByZXRhaWxcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZXJCdXJnZXIgPSAoKSA9PiBzZXRUb2dnbGUoIXRvZ2dsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX193cmFwcGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcl9fYnV0dG9ufSBvbkNsaWNrPXt0b2dnbGVyQnVyZ2VyfT5cbiAgICAgICAgICAgIDxIYW1idXJnZXIgY29sb3I9XCIjZmZmXCIgc2l6ZT17MzN9IGR1cmF0aW9uPXswLjh9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBoZWlnaHQ9ezM5fSB3aWR0aD17NzV9IGFsdD1cIm5ld3RvbiBwYXJrIGxvZ29cIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3RvZ2dsZSA/IHN0eWxlcy5idXJnZXJfX21lbnUgOiBzdHlsZXMuYnVyZ2VyX19tZW51X2hpZGV9XG4gICAgICAgID5cbiAgICAgICAgICA8bW90aW9uLm5hdiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJfX2lubmVyfVxuICAgICAgICAgIGluaXRpYWw9e29wfT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJfX2l0ZW1zfT5cbiAgICAgICAgICAgICAge2J1cmdlcl9fbWVudV9pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmJ1cmdlcl9faXRlbX0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXJnZXJfX2l0ZW1faW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Mzd9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLmRlc2NyaXBpb259XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnVyZ2VyX19pdGVtX3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L21vdGlvbi5uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJJbWFnZSIsIkxpbmsiLCJTbGluZyIsIkhhbWJ1cmdlciIsIm1vdGlvbiIsImxvZ28iLCJidXJnZXIiLCJzaG9wcGluZyIsInJlc3RhdXJhbnQiLCJmYXN0X19mb29kIiwiYmlnX19yZXRhaWwiLCJob21lX19kZWNvciIsIm1lZGl1bV9fcmV0YWlsIiwiYnVyZ2VyX19tZW51X2l0ZW1zIiwiaWQiLCJpY29uIiwidGl0bGUiLCJ1cmwiLCJkZXNjcmlwaW9uIiwiaW5kZXgiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInRvZ2dsZXJCdXJnZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJjb250YWluZXIiLCJoZWFkZXJfX3dyYXBwZXIiLCJidXJnZXJfX2J1dHRvbiIsIm9uQ2xpY2siLCJjb2xvciIsInNpemUiLCJkdXJhdGlvbiIsImhyZWYiLCJhIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJidXJnZXJfX21lbnUiLCJidXJnZXJfX21lbnVfaGlkZSIsIm5hdiIsImJ1cmdlcl9faW5uZXIiLCJpbml0aWFsIiwib3AiLCJ1bCIsImJ1cmdlcl9faXRlbXMiLCJtYXAiLCJpdGVtIiwibGkiLCJidXJnZXJfX2l0ZW0iLCJidXJnZXJfX2l0ZW1faW1hZ2UiLCJidXJnZXJfX2l0ZW1fdGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/index.js\n");

/***/ })

});