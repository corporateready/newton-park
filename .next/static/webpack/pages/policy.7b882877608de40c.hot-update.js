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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".policy_policy__wrapper__vRspd {\\n  padding-top: 10%;\\n  padding-bottom: 5%;\\n  font-family: \\\"Roboto\\\";\\n}\\n\\n.policy_container__onqMy {\\n  margin-left: auto;\\n  margin-right: auto;\\n  height: 100%;\\n  width: 1210px;\\n}\\n@media screen and (max-width: 1440px) {\\n  .policy_container__onqMy {\\n    width: calc(300px + 910 * (100vw - 320px) / 1120);\\n  }\\n}\\n\\n.policy_title__FJRTD {\\n  font-size: 23px;\\n  line-height: 135%;\\n  font-weight: 300;\\n  color: #333;\\n}\\n\\n.policy_subTitle__TsDdO {\\n  margin-top: 3%;\\n  font-size: 17px;\\n  line-height: 135%;\\n  font-weight: 300;\\n  color: #333;\\n}\\n\\n.policy_text__PojFz {\\n  margin-top: 1%;\\n  font-size: 16px;\\n  line-height: 135%;\\n  font-weight: 300;\\n  color: #333;\\n}\\n\\n.policy_link__to__EMSPB {\\n  --tw-text-opacity: 1;\\n  color: rgb(59 130 246 / var(--tw-text-opacity));\\n  -webkit-text-decoration-line: underline;\\n          text-decoration-line: underline;\\n}\\n\\n.policy_items__disc__toTJP {\\n  margin-left: 2%;\\n  list-style-type: disc;\\n}\\n\\n.policy_items__minus___Si_m {\\n  margin-left: 2%;\\n}\\n\\n.policy_semibold__text__qdFZU {\\n  font-weight: 600;\\n}\", \"\",{\"version\":3,\"sources\":[\"<no source>\",\"webpack://styles/policy.module.scss\",\"webpack://styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAAA;EAAA,iBAAA;EAAA,mBAAA;ECII;CDJJ;;AAAA;EAAA,kBAAA;EAAA,mBAAA;EAAA,aAAA;EAAA;CAAA;ACUI;EAHJ;IAIQ,iDAAA;EAAN;AACF;;ADZA;EEKI,eDYc;ECXd,iBDWoB;ECVpB,gBDU0B;ECT1B;CFRJ;;AAAA;EAAA,eAAA;EEKI,eDiBc;EChBd,iBDgBoB;ECfpB,gBDe0B;ECd1B;CFRJ;;AAAA;EAAA,eAAA;EEKI,eDsBc;ECrBd,iBDqBoB;ECpBpB,gBDoB0B;ECnB1B;CFRJ;;AAAA;EAAA,qBAAA;EAAA,gDAAA;EAAA,wCAAA;UAAA;CAAA;;AAAA;EAAA,gBAAA;EAAA;CAAA;;AAAA;EAAA;CAAA;;AAAA;EAAA;CAAA\",\"sourcesContent\":[null,\"@import './mixins.scss';\\n\\n.policy__wrapper {\\n    @apply pt-[10%] pb-[5%];\\n    font-family: 'Roboto';\\n}\\n\\n.container {\\n    @apply h-full w-[1210px] mx-auto;\\n\\n    @media screen and(max-width: 1440px) {\\n        width: calc(300px + (1210 - 300)*(100vw - 320px)/(1440 - 320));\\n    }\\n}\\n\\n.title {\\n    @apply font-semibold;\\n    @include text(23px, 135%, 300, #333);\\n}\\n\\n.subTitle {\\n    @apply mt-[3%];\\n    @include text(17px, 135%, 300, #333);\\n}\\n\\n.text {\\n    @apply mt-[1%];\\n    @include text(16px, 135%, 300, #333);\\n}\\n\\n.link__to {\\n    @apply text-blue-500 underline;\\n}\\n\\n.items__disc {\\n    @apply list-disc ml-[2%];\\n}\\n\\n.items__minus {\\n    @apply ml-[2%];\\n}\\n.semibold__text {\\n    @apply font-semibold\\n}\",\"$medium_black: #31414b;\\n$white_color: #fff;\\n$sapfir_color: #2bb018;\\n\\n@mixin text($fs, $lh, $fw, $color) {\\n    font-size: $fs;\\n    line-height: $lh;\\n    font-weight: $fw;\\n    color: $color;\\n}\\n\\n@mixin np_text($fs, $lh, $fw) {\\n    font-size: $fs;\\n    line-height: $lh;\\n    font-weight: $fw;\\n    color: $sapfir_color;\\n}\\n\\n@mixin shadow_std() {\\n    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"policy__wrapper\": \"policy_policy__wrapper__vRspd\",\n\t\"container\": \"policy_container__onqMy\",\n\t\"title\": \"policy_title__FJRTD\",\n\t\"subTitle\": \"policy_subTitle__TsDdO\",\n\t\"text\": \"policy_text__PojFz\",\n\t\"link__to\": \"policy_link__to__EMSPB\",\n\t\"items__disc\": \"policy_items__disc__toTJP\",\n\t\"items__minus\": \"policy_items__minus___Si_m\",\n\t\"semibold__text\": \"policy_semibold__text__qdFZU\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9wb2xpY3kubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLDBFQUEwRSxxQkFBcUIsdUJBQXVCLDRCQUE0QixHQUFHLDhCQUE4QixzQkFBc0IsdUJBQXVCLGlCQUFpQixrQkFBa0IsR0FBRyx5Q0FBeUMsOEJBQThCLHdEQUF3RCxLQUFLLEdBQUcsMEJBQTBCLG9CQUFvQixzQkFBc0IscUJBQXFCLGdCQUFnQixHQUFHLDZCQUE2QixtQkFBbUIsb0JBQW9CLHNCQUFzQixxQkFBcUIsZ0JBQWdCLEdBQUcseUJBQXlCLG1CQUFtQixvQkFBb0Isc0JBQXNCLHFCQUFxQixnQkFBZ0IsR0FBRyw2QkFBNkIseUJBQXlCLG9EQUFvRCw0Q0FBNEMsNENBQTRDLEdBQUcsZ0NBQWdDLG9CQUFvQiwwQkFBMEIsR0FBRyxpQ0FBaUMsb0JBQW9CLEdBQUcsbUNBQW1DLHFCQUFxQixHQUFHLE9BQU8sdUlBQXVJLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLGNBQWMsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsY0FBYyxlQUFlLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxzREFBc0Qsc0JBQXNCLDhCQUE4Qiw0QkFBNEIsR0FBRyxnQkFBZ0IsdUNBQXVDLDhDQUE4Qyx5RUFBeUUsT0FBTyxHQUFHLFlBQVksMkJBQTJCLDJDQUEyQyxHQUFHLGVBQWUscUJBQXFCLDJDQUEyQyxHQUFHLFdBQVcscUJBQXFCLDJDQUEyQyxHQUFHLGVBQWUscUNBQXFDLEdBQUcsa0JBQWtCLCtCQUErQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxtQkFBbUIsNkJBQTZCLDBCQUEwQixxQkFBcUIseUJBQXlCLHdDQUF3QyxxQkFBcUIsdUJBQXVCLHVCQUF1QixvQkFBb0IsR0FBRyxtQ0FBbUMscUJBQXFCLHVCQUF1Qix1QkFBdUIsMkJBQTJCLEdBQUcseUJBQXlCLGtEQUFrRCxHQUFHLG1CQUFtQjtBQUMxMEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3BvbGljeS5tb2R1bGUuc2Nzcz82YmYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9saWN5X3BvbGljeV9fd3JhcHBlcl9fdlJzcGQge1xcbiAgcGFkZGluZy10b3A6IDEwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuXFxuLnBvbGljeV9jb250YWluZXJfX29ucU15IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEyMTBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XFxuICAucG9saWN5X2NvbnRhaW5lcl9fb25xTXkge1xcbiAgICB3aWR0aDogY2FsYygzMDBweCArIDkxMCAqICgxMDB2dyAtIDMyMHB4KSAvIDExMjApO1xcbiAgfVxcbn1cXG5cXG4ucG9saWN5X3RpdGxlX19GSlJURCB7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBsaW5lLWhlaWdodDogMTM1JTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnBvbGljeV9zdWJUaXRsZV9fVHNEZE8ge1xcbiAgbWFyZ2luLXRvcDogMyU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBsaW5lLWhlaWdodDogMTM1JTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnBvbGljeV90ZXh0X19Qb2pGeiB7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxMzUlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4ucG9saWN5X2xpbmtfX3RvX19FTVNQQiB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucG9saWN5X2l0ZW1zX19kaXNjX190b1RKUCB7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XFxufVxcblxcbi5wb2xpY3lfaXRlbXNfX21pbnVzX19fU2lfbSB7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbi5wb2xpY3lfc2VtaWJvbGRfX3RleHRfX3FkRlpVIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIjxubyBzb3VyY2U+XCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3BvbGljeS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUNJSTtDREpKOztBQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGFBQUE7RUFBQTtDQUFBO0FDVUk7RUFISjtJQUlRLGlEQUFBO0VBQU47QUFDRjs7QURaQTtFRUtJLGVEWWM7RUNYZCxpQkRXb0I7RUNWcEIsZ0JEVTBCO0VDVDFCO0NGUko7O0FBQUE7RUFBQSxlQUFBO0VFS0ksZURpQmM7RUNoQmQsaUJEZ0JvQjtFQ2ZwQixnQkRlMEI7RUNkMUI7Q0ZSSjs7QUFBQTtFQUFBLGVBQUE7RUVLSSxlRHNCYztFQ3JCZCxpQkRxQm9CO0VDcEJwQixnQkRvQjBCO0VDbkIxQjtDRlJKOztBQUFBO0VBQUEscUJBQUE7RUFBQSxnREFBQTtFQUFBLHdDQUFBO1VBQUE7Q0FBQTs7QUFBQTtFQUFBLGdCQUFBO0VBQUE7Q0FBQTs7QUFBQTtFQUFBO0NBQUE7O0FBQUE7RUFBQTtDQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltudWxsLFwiQGltcG9ydCAnLi9taXhpbnMuc2Nzcyc7XFxuXFxuLnBvbGljeV9fd3JhcHBlciB7XFxuICAgIEBhcHBseSBwdC1bMTAlXSBwYi1bNSVdO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBAYXBwbHkgaC1mdWxsIHctWzEyMTBweF0gbXgtYXV0bztcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiAxNDQwcHgpIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDMwMHB4ICsgKDEyMTAgLSAzMDApKigxMDB2dyAtIDMyMHB4KS8oMTQ0MCAtIDMyMCkpO1xcbiAgICB9XFxufVxcblxcbi50aXRsZSB7XFxuICAgIEBhcHBseSBmb250LXNlbWlib2xkO1xcbiAgICBAaW5jbHVkZSB0ZXh0KDIzcHgsIDEzNSUsIDMwMCwgIzMzMyk7XFxufVxcblxcbi5zdWJUaXRsZSB7XFxuICAgIEBhcHBseSBtdC1bMyVdO1xcbiAgICBAaW5jbHVkZSB0ZXh0KDE3cHgsIDEzNSUsIDMwMCwgIzMzMyk7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgQGFwcGx5IG10LVsxJV07XFxuICAgIEBpbmNsdWRlIHRleHQoMTZweCwgMTM1JSwgMzAwLCAjMzMzKTtcXG59XFxuXFxuLmxpbmtfX3RvIHtcXG4gICAgQGFwcGx5IHRleHQtYmx1ZS01MDAgdW5kZXJsaW5lO1xcbn1cXG5cXG4uaXRlbXNfX2Rpc2Mge1xcbiAgICBAYXBwbHkgbGlzdC1kaXNjIG1sLVsyJV07XFxufVxcblxcbi5pdGVtc19fbWludXMge1xcbiAgICBAYXBwbHkgbWwtWzIlXTtcXG59XFxuLnNlbWlib2xkX190ZXh0IHtcXG4gICAgQGFwcGx5IGZvbnQtc2VtaWJvbGRcXG59XCIsXCIkbWVkaXVtX2JsYWNrOiAjMzE0MTRiO1xcbiR3aGl0ZV9jb2xvcjogI2ZmZjtcXG4kc2FwZmlyX2NvbG9yOiAjMmJiMDE4O1xcblxcbkBtaXhpbiB0ZXh0KCRmcywgJGxoLCAkZncsICRjb2xvcikge1xcbiAgICBmb250LXNpemU6ICRmcztcXG4gICAgbGluZS1oZWlnaHQ6ICRsaDtcXG4gICAgZm9udC13ZWlnaHQ6ICRmdztcXG4gICAgY29sb3I6ICRjb2xvcjtcXG59XFxuXFxuQG1peGluIG5wX3RleHQoJGZzLCAkbGgsICRmdykge1xcbiAgICBmb250LXNpemU6ICRmcztcXG4gICAgbGluZS1oZWlnaHQ6ICRsaDtcXG4gICAgZm9udC13ZWlnaHQ6ICRmdztcXG4gICAgY29sb3I6ICRzYXBmaXJfY29sb3I7XFxufVxcblxcbkBtaXhpbiBzaGFkb3dfc3RkKCkge1xcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwb2xpY3lfX3dyYXBwZXJcIjogXCJwb2xpY3lfcG9saWN5X193cmFwcGVyX192UnNwZFwiLFxuXHRcImNvbnRhaW5lclwiOiBcInBvbGljeV9jb250YWluZXJfX29ucU15XCIsXG5cdFwidGl0bGVcIjogXCJwb2xpY3lfdGl0bGVfX0ZKUlREXCIsXG5cdFwic3ViVGl0bGVcIjogXCJwb2xpY3lfc3ViVGl0bGVfX1RzRGRPXCIsXG5cdFwidGV4dFwiOiBcInBvbGljeV90ZXh0X19Qb2pGelwiLFxuXHRcImxpbmtfX3RvXCI6IFwicG9saWN5X2xpbmtfX3RvX19FTVNQQlwiLFxuXHRcIml0ZW1zX19kaXNjXCI6IFwicG9saWN5X2l0ZW1zX19kaXNjX190b1RKUFwiLFxuXHRcIml0ZW1zX19taW51c1wiOiBcInBvbGljeV9pdGVtc19fbWludXNfX19TaV9tXCIsXG5cdFwic2VtaWJvbGRfX3RleHRcIjogXCJwb2xpY3lfc2VtaWJvbGRfX3RleHRfX3FkRlpVXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/policy.module.scss\n");

/***/ })

});