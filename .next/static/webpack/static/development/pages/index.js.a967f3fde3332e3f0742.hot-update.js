webpackHotUpdate("static/development/pages/index.js",{

/***/ "./hooks/usePersistedState.js":
/*!************************************!*\
  !*** ./hooks/usePersistedState.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n\nfunction usePersistedState(key, defaultValue) {\n  _s();\n\n  console.log('process browser ', true);\n\n  if (true) {\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(JSON.parse(localStorage.getItem(key)) || defaultValue),\n        state = _useState[0],\n        setState = _useState[1];\n\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n      localStorage.setItem(key, JSON.stringify(state));\n    }, [key, state]);\n    return [state, setState];\n  }\n}\n\n_s(usePersistedState, \"TehDsRxRCkk/RrZRXQuHzdFvkPs=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (usePersistedState);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VQZXJzaXN0ZWRTdGF0ZS5qcz9jYjJlIl0sIm5hbWVzIjpbInVzZVBlcnNpc3RlZFN0YXRlIiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsWUFBaEMsRUFBOEM7QUFBQTs7QUFDMUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaOztBQUNBLFlBQXFCO0FBQUEsb0JBQ1NDLHNEQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJSLEdBQXJCLENBQVgsS0FBeUNDLFlBQTFDLENBRGpCO0FBQUEsUUFDVlEsS0FEVTtBQUFBLFFBQ0hDLFFBREc7O0FBRWpCQywyREFBUyxDQUFDLFlBQU07QUFDWkosa0JBQVksQ0FBQ0ssT0FBYixDQUFxQlosR0FBckIsRUFBMEJLLElBQUksQ0FBQ1EsU0FBTCxDQUFlSixLQUFmLENBQTFCO0FBQ0gsS0FGUSxFQUVOLENBQUNULEdBQUQsRUFBTVMsS0FBTixDQUZNLENBQVQ7QUFJQSxXQUFPLENBQUNBLEtBQUQsRUFBUUMsUUFBUixDQUFQO0FBQ0g7QUFHSjs7R0FaUVgsaUI7O0FBY01BLGdGQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlUGVyc2lzdGVkU3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIHVzZVBlcnNpc3RlZFN0YXRlKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coJ3Byb2Nlc3MgYnJvd3NlciAnLCBwcm9jZXNzLmJyb3dzZXIpXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgZGVmYXVsdFZhbHVlKVxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXG4gICAgICAgIH0sIFtrZXksIHN0YXRlXSlcblxuICAgICAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV1cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQZXJzaXN0ZWRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/usePersistedState.js\n");

/***/ })

})