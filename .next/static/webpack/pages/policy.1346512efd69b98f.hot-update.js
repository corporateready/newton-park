/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/policy",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/policy.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/policy.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".policy_policy__wrapper__vRspd {\\n  padding-top: 10%;\\n  padding-bottom: 5%;\\n  font-family: Roboto;\\n}\\n\\n.policy_container__onqMy {\\n  margin-left: auto;\\n  margin-right: auto;\\n  height: 100%;\\n  width: 1210px;\\n}\\n@media screen and (max-width: 1440px) {\\n  .policy_container__onqMy {\\n    width: calc(300px + 910 * (100vw - 320px) / 1120);\\n  }\\n}\\n\\n.policy_title__FJRTD {\\n  font-size: 23px;\\n  line-height: 135%;\\n  font-weight: 300;\\n  color: #333;\\n}\\n\\n.policy_subTitle__TsDdO {\\n  font-size: 17px;\\n  line-height: 135%;\\n  font-weight: 300;\\n  color: #333;\\n}\\n\\n.policy_text__PojFz {\\n  font-size: 14px;\\n  line-height: 135%;\\n  font-weight: 300;\\n  color: #333;\\n}\\n\\n.policy_link__to__EMSPB {\\n  --tw-text-opacity: 1;\\n  color: rgb(59 130 246 / var(--tw-text-opacity));\\n  -webkit-text-decoration-line: underline;\\n          text-decoration-line: underline;\\n}\\n\\n.policy_items__disc__toTJP {\\n  margin-left: 3%;\\n  list-style-type: disc;\\n}\\n\\n.policy_items__mi__loHZU {\\n  margin-left: 3%;\\n  list-style-type: disc;\\n}\", \"\",{\"version\":3,\"sources\":[\"<no source>\",\"webpack://styles/policy.module.scss\",\"webpack://styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAAA;EAAA,iBAAA;EAAA,mBAAA;ECII;CDJJ;;AAAA;EAAA,kBAAA;EAAA,mBAAA;EAAA,aAAA;EAAA;CAAA;ACUI;EAHJ;IAIQ,iDAAA;EAAN;AACF;;AAGA;ECVI,eDWc;ECVd,iBDUoB;ECTpB,gBDS0B;ECR1B,WDQ+B;AAGnC;;AAAA;ECdI,eDec;ECdd,iBDcoB;ECbpB,gBDa0B;ECZ1B,WDY+B;AAMnC;;AAHA;EClBI,eDmBc;EClBd,iBDkBoB;ECjBpB,gBDiB0B;EChB1B,WDgB+B;AASnC;;ADjCA;EAAA,qBAAA;EAAA,gDAAA;EAAA,wCAAA;UAAA;CAAA;;AAAA;EAAA,gBAAA;EAAA;CAAA;;AAAA;EAAA,gBAAA;EAAA;CAAA\",\"sourcesContent\":[null,\"@import './mixins.scss';\\n\\n.policy__wrapper {\\n    @apply pt-[10%] pb-[5%];\\n    font-family: Roboto;\\n}\\n\\n.container {\\n    @apply h-full w-[1210px] mx-auto;\\n\\n    @media screen and(max-width: 1440px) {\\n        width: calc(300px + (1210 - 300)*(100vw - 320px)/(1440 - 320));\\n    }\\n}\\n\\n.title {\\n    @include text(23px, 135%, 300, #333);\\n}\\n\\n.subTitle {\\n    @include text(17px, 135%, 300, #333);\\n}\\n\\n.text {\\n    @include text(14px, 135%, 300, #333);\\n}\\n\\n.link__to {\\n    @apply text-blue-500 underline;\\n}\\n\\n.items__disc {\\n    @apply list-disc ml-[3%];\\n}\\n\\n.items__mi {\\n    @apply list-disc ml-[3%];\\n}\",\"$medium_black: #31414b;\\n$white_color: #fff;\\n$sapfir_color: #2bb018;\\n\\n@mixin text($fs, $lh, $fw, $color) {\\n    font-size: $fs;\\n    line-height: $lh;\\n    font-weight: $fw;\\n    color: $color;\\n}\\n\\n@mixin np_text($fs, $lh, $fw) {\\n    font-size: $fs;\\n    line-height: $lh;\\n    font-weight: $fw;\\n    color: $sapfir_color;\\n}\\n\\n@mixin shadow_std() {\\n    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"policy__wrapper\": \"policy_policy__wrapper__vRspd\",\n\t\"container\": \"policy_container__onqMy\",\n\t\"title\": \"policy_title__FJRTD\",\n\t\"subTitle\": \"policy_subTitle__TsDdO\",\n\t\"text\": \"policy_text__PojFz\",\n\t\"link__to\": \"policy_link__to__EMSPB\",\n\t\"items__disc\": \"policy_items__disc__toTJP\",\n\t\"items__mi\": \"policy_items__mi__loHZU\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9wb2xpY3kubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLDBFQUEwRSxxQkFBcUIsdUJBQXVCLHdCQUF3QixHQUFHLDhCQUE4QixzQkFBc0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsR0FBRyx5Q0FBeUMsOEJBQThCLHdEQUF3RCxLQUFLLEdBQUcsMEJBQTBCLG9CQUFvQixzQkFBc0IscUJBQXFCLGdCQUFnQixHQUFHLDZCQUE2QixvQkFBb0Isc0JBQXNCLHFCQUFxQixnQkFBZ0IsR0FBRyx5QkFBeUIsb0JBQW9CLHNCQUFzQixxQkFBcUIsZ0JBQWdCLEdBQUcsNkJBQTZCLHlCQUF5QixvREFBb0QsNENBQTRDLDRDQUE0QyxHQUFHLGdDQUFnQyxvQkFBb0IsMEJBQTBCLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIsR0FBRyxPQUFPLHVJQUF1SSxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxlQUFlLGNBQWMsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLHNEQUFzRCxzQkFBc0IsOEJBQThCLDBCQUEwQixHQUFHLGdCQUFnQix1Q0FBdUMsOENBQThDLHlFQUF5RSxPQUFPLEdBQUcsWUFBWSwyQ0FBMkMsR0FBRyxlQUFlLDJDQUEyQyxHQUFHLFdBQVcsMkNBQTJDLEdBQUcsZUFBZSxxQ0FBcUMsR0FBRyxrQkFBa0IsK0JBQStCLEdBQUcsZ0JBQWdCLCtCQUErQixHQUFHLDBCQUEwQixxQkFBcUIseUJBQXlCLHdDQUF3QyxxQkFBcUIsdUJBQXVCLHVCQUF1QixvQkFBb0IsR0FBRyxtQ0FBbUMscUJBQXFCLHVCQUF1Qix1QkFBdUIsMkJBQTJCLEdBQUcseUJBQXlCLGtEQUFrRCxHQUFHLG1CQUFtQjtBQUN4b0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9wb2xpY3kubW9kdWxlLnNjc3M/NmJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvbGljeV9wb2xpY3lfX3dyYXBwZXJfX3ZSc3BkIHtcXG4gIHBhZGRpbmctdG9wOiAxMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNSU7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4ucG9saWN5X2NvbnRhaW5lcl9fb25xTXkge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTIxMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcXG4gIC5wb2xpY3lfY29udGFpbmVyX19vbnFNeSB7XFxuICAgIHdpZHRoOiBjYWxjKDMwMHB4ICsgOTEwICogKDEwMHZ3IC0gMzIwcHgpIC8gMTEyMCk7XFxuICB9XFxufVxcblxcbi5wb2xpY3lfdGl0bGVfX0ZKUlREIHtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMzUlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ucG9saWN5X3N1YlRpdGxlX19Uc0RkTyB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBsaW5lLWhlaWdodDogMTM1JTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnBvbGljeV90ZXh0X19Qb2pGeiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMTM1JTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnBvbGljeV9saW5rX190b19fRU1TUEIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDU5IDEzMCAyNDYgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG59XFxuXFxuLnBvbGljeV9pdGVtc19fZGlzY19fdG9USlAge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbn1cXG5cXG4ucG9saWN5X2l0ZW1zX19taV9fbG9IWlUge1xcbiAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCI8bm8gc291cmNlPlwiLFwid2VicGFjazovL3N0eWxlcy9wb2xpY3kubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VDSUk7Q0RKSjs7QUFBQTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxhQUFBO0VBQUE7Q0FBQTtBQ1VJO0VBSEo7SUFJUSxpREFBQTtFQUFOO0FBQ0Y7O0FBR0E7RUNWSSxlRFdjO0VDVmQsaUJEVW9CO0VDVHBCLGdCRFMwQjtFQ1IxQixXRFErQjtBQUduQzs7QUFBQTtFQ2RJLGVEZWM7RUNkZCxpQkRjb0I7RUNicEIsZ0JEYTBCO0VDWjFCLFdEWStCO0FBTW5DOztBQUhBO0VDbEJJLGVEbUJjO0VDbEJkLGlCRGtCb0I7RUNqQnBCLGdCRGlCMEI7RUNoQjFCLFdEZ0IrQjtBQVNuQzs7QURqQ0E7RUFBQSxxQkFBQTtFQUFBLGdEQUFBO0VBQUEsd0NBQUE7VUFBQTtDQUFBOztBQUFBO0VBQUEsZ0JBQUE7RUFBQTtDQUFBOztBQUFBO0VBQUEsZ0JBQUE7RUFBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltudWxsLFwiQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XFxuXFxuLnBvbGljeV9fd3JhcHBlciB7XFxuICAgIEBhcHBseSBwdC1bMTAlXSBwYi1bNSVdO1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgQGFwcGx5IGgtZnVsbCB3LVsxMjEwcHhdIG14LWF1dG87XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogMTQ0MHB4KSB7XFxuICAgICAgICB3aWR0aDogY2FsYygzMDBweCArICgxMjEwIC0gMzAwKSooMTAwdncgLSAzMjBweCkvKDE0NDAgLSAzMjApKTtcXG4gICAgfVxcbn1cXG5cXG4udGl0bGUge1xcbiAgICBAaW5jbHVkZSB0ZXh0KDIzcHgsIDEzNSUsIDMwMCwgIzMzMyk7XFxufVxcblxcbi5zdWJUaXRsZSB7XFxuICAgIEBpbmNsdWRlIHRleHQoMTdweCwgMTM1JSwgMzAwLCAjMzMzKTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBAaW5jbHVkZSB0ZXh0KDE0cHgsIDEzNSUsIDMwMCwgIzMzMyk7XFxufVxcblxcbi5saW5rX190byB7XFxuICAgIEBhcHBseSB0ZXh0LWJsdWUtNTAwIHVuZGVybGluZTtcXG59XFxuXFxuLml0ZW1zX19kaXNjIHtcXG4gICAgQGFwcGx5IGxpc3QtZGlzYyBtbC1bMyVdO1xcbn1cXG5cXG4uaXRlbXNfX21pIHtcXG4gICAgQGFwcGx5IGxpc3QtZGlzYyBtbC1bMyVdO1xcbn1cIixcIiRtZWRpdW1fYmxhY2s6ICMzMTQxNGI7XFxuJHdoaXRlX2NvbG9yOiAjZmZmO1xcbiRzYXBmaXJfY29sb3I6ICMyYmIwMTg7XFxuXFxuQG1peGluIHRleHQoJGZzLCAkbGgsICRmdywgJGNvbG9yKSB7XFxuICAgIGZvbnQtc2l6ZTogJGZzO1xcbiAgICBsaW5lLWhlaWdodDogJGxoO1xcbiAgICBmb250LXdlaWdodDogJGZ3O1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbn1cXG5cXG5AbWl4aW4gbnBfdGV4dCgkZnMsICRsaCwgJGZ3KSB7XFxuICAgIGZvbnQtc2l6ZTogJGZzO1xcbiAgICBsaW5lLWhlaWdodDogJGxoO1xcbiAgICBmb250LXdlaWdodDogJGZ3O1xcbiAgICBjb2xvcjogJHNhcGZpcl9jb2xvcjtcXG59XFxuXFxuQG1peGluIHNoYWRvd19zdGQoKSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBvbGljeV9fd3JhcHBlclwiOiBcInBvbGljeV9wb2xpY3lfX3dyYXBwZXJfX3ZSc3BkXCIsXG5cdFwiY29udGFpbmVyXCI6IFwicG9saWN5X2NvbnRhaW5lcl9fb25xTXlcIixcblx0XCJ0aXRsZVwiOiBcInBvbGljeV90aXRsZV9fRkpSVERcIixcblx0XCJzdWJUaXRsZVwiOiBcInBvbGljeV9zdWJUaXRsZV9fVHNEZE9cIixcblx0XCJ0ZXh0XCI6IFwicG9saWN5X3RleHRfX1BvakZ6XCIsXG5cdFwibGlua19fdG9cIjogXCJwb2xpY3lfbGlua19fdG9fX0VNU1BCXCIsXG5cdFwiaXRlbXNfX2Rpc2NcIjogXCJwb2xpY3lfaXRlbXNfX2Rpc2NfX3RvVEpQXCIsXG5cdFwiaXRlbXNfX21pXCI6IFwicG9saWN5X2l0ZW1zX19taV9fbG9IWlVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/policy.module.scss\n");

/***/ })

});