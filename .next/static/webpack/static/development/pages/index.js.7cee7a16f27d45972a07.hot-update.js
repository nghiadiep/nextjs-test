webpackHotUpdate("static/development/pages/index.js",{

/***/ "./hooks/usePersistedState.js":
/*!************************************!*\
  !*** ./hooks/usePersistedState.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n\nfunction usePersistedState(key, defaultValue) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultValue),\n      state = _useState[0],\n      setState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _JSON$parse;\n\n    console.log('persisted ', JSON.parse(localStorage.getItem(key)));\n\n    if ((_JSON$parse = JSON.parse(localStorage.getItem(key))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.length) {\n      setState(JSON.parse(localStorage.getItem(key)));\n    } else {\n      console.log('set item ', localStorage);\n    }\n  }, [key, state]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    localStorage.setItem(key, JSON.stringify(state));\n  }, [state]);\n  return [state, setState];\n}\n\n_s(usePersistedState, \"xAmCnWeT3nitFcsytb0lcJ3uWbw=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (usePersistedState);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VQZXJzaXN0ZWRTdGF0ZS5qcz9jYjJlIl0sIm5hbWVzIjpbInVzZVBlcnNpc3RlZFN0YXRlIiwia2V5IiwiZGVmYXVsdFZhbHVlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsWUFBaEMsRUFBOEM7QUFBQTs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUNELFlBQUQsQ0FEUTtBQUFBLE1BQ25DRSxLQURtQztBQUFBLE1BQzVCQyxRQUQ0Qjs7QUFHMUNDLHlEQUFTLENBQUMsWUFBTTtBQUFBOztBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCWCxHQUFyQixDQUFYLENBQTFCOztBQUNBLHVCQUFJUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCWCxHQUFyQixDQUFYLENBQUosZ0RBQUksWUFBdUNZLE1BQTNDLEVBQW1EO0FBQy9DUixjQUFRLENBQUNJLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJYLEdBQXJCLENBQVgsQ0FBRCxDQUFSO0FBQ0gsS0FGRCxNQUVPO0FBQ0hNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJHLFlBQXpCO0FBRUg7QUFDSixHQVJRLEVBUU4sQ0FBQ1YsR0FBRCxFQUFNRyxLQUFOLENBUk0sQ0FBVDtBQVVBRSx5REFBUyxDQUFDLFlBQU07QUFDWkssZ0JBQVksQ0FBQ0csT0FBYixDQUFxQmIsR0FBckIsRUFBMEJRLElBQUksQ0FBQ00sU0FBTCxDQUFlWCxLQUFmLENBQTFCO0FBQ0gsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUO0FBSUEsU0FBTyxDQUFDQSxLQUFELEVBQVFDLFFBQVIsQ0FBUDtBQUNIOztHQWxCUUwsaUI7O0FBb0JNQSxnRkFBZiIsImZpbGUiOiIuL2hvb2tzL3VzZVBlcnNpc3RlZFN0YXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiB1c2VQZXJzaXN0ZWRTdGF0ZShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BlcnNpc3RlZCAnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKVxuICAgICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBpdGVtICcsIGxvY2FsU3RvcmFnZSlcblxuICAgICAgICB9XG4gICAgfSwgW2tleSwgc3RhdGVdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpXG4gICAgfSwgW3N0YXRlXSlcblxuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQZXJzaXN0ZWRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/usePersistedState.js\n");

/***/ })

})