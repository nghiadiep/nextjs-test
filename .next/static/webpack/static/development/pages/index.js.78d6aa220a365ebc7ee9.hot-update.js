webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TaskList */ \"./components/TaskList.jsx\");\n/* harmony import */ var components_TaskListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/TaskListItem */ \"./components/TaskListItem.jsx\");\n/* harmony import */ var components_TaskInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TaskInput */ \"./components/TaskInput.jsx\");\n\n\nvar _jsxFileName = \"/Users/trongnghiadieppham/Downloads/react-test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      tasks = _useState[0],\n      setTasks = _useState[1];\n\n  var updateTask = function updateTask(id, _ref) {\n    var title = _ref.title,\n        status = _ref.status;\n    var editTask = {\n      id: id,\n      title: title,\n      status: status\n    };\n    setTasks(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks));\n  };\n\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Todo Task Web App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400,500|Material+Icons\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    style: {\n      maxWidth: '966px',\n      margin: 'auto'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(components_TaskInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onAdd: function onAdd(task) {\n      return setTasks([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks), [task]));\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(components_TaskList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, tasks.map(function (task) {\n    return __jsx(components_TaskListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: task.id,\n      status: task.status,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 15\n      }\n    }, task.title);\n  }))));\n}\n\n_s(Home, \"+34uIVDBalDkucWnJ7Aj1Xxb0MA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInRhc2tzIiwic2V0VGFza3MiLCJ1cGRhdGVUYXNrIiwiaWQiLCJ0aXRsZSIsInN0YXR1cyIsImVkaXRUYXNrIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJ0YXNrIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFFN0IsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsRUFBRCxRQUEyQjtBQUFBLFFBQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxRQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDNUMsUUFBTUMsUUFBUSxHQUFHO0FBQ2ZILFFBQUUsRUFBRkEsRUFEZTtBQUVmQyxXQUFLLEVBQUxBLEtBRmU7QUFHZkMsWUFBTSxFQUFOQTtBQUhlLEtBQWpCO0FBS0FKLFlBQVEsQ0FBQyw2RkFBSUQsS0FBTCxFQUFSO0FBQ0QsR0FQRDs7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLFFBQUksRUFBQyw2R0FEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBU0U7QUFBTSxTQUFLLEVBQUU7QUFBRU8sY0FBUSxFQUFFLE9BQVo7QUFBcUJDLFlBQU0sRUFBRTtBQUE3QixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVcsU0FBSyxFQUFFLGVBQUNDLElBQUQ7QUFBQSxhQUFVUixRQUFRLHdHQUFLRCxLQUFMLElBQVlTLElBQVosR0FBbEI7QUFBQSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsS0FBSyxDQUFDVSxHQUFOLENBQVUsVUFBQ0QsSUFBRCxFQUFVO0FBQ25CLFdBQ0UsTUFBQywrREFBRDtBQUFjLFNBQUcsRUFBRUEsSUFBSSxDQUFDTixFQUF4QjtBQUE0QixZQUFNLEVBQUVNLElBQUksQ0FBQ0osTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSSxJQUFJLENBQUNMLEtBRFIsQ0FERjtBQUtELEdBTkEsQ0FESCxDQUZGLENBVEYsQ0FERjtBQXdCRDs7R0FsQ3VCTixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRhc2tMaXN0IGZyb20gJ2NvbXBvbmVudHMvVGFza0xpc3QnXG5pbXBvcnQgVGFza0xpc3RJdGVtIGZyb20gJ2NvbXBvbmVudHMvVGFza0xpc3RJdGVtJ1xuaW1wb3J0IFRhc2tJbnB1dCBmcm9tICdjb21wb25lbnRzL1Rhc2tJbnB1dCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaWQsIHsgdGl0bGUsIHN0YXR1cyB9KSA9PiB7XG4gICAgY29uc3QgZWRpdFRhc2sgPSB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgc3RhdHVzLFxuICAgIH1cbiAgICBzZXRUYXNrcyhbLi4udGFza3MsXSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ub2RvIFRhc2sgV2ViIEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwLDQwMGl0YWxpY3xSb2JvdG8rTW9ubzo0MDAsNTAwfE1hdGVyaWFsK0ljb25zJ1xuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIHN0eWxlPXt7IG1heFdpZHRoOiAnOTY2cHgnLCBtYXJnaW46ICdhdXRvJyB9fT5cbiAgICAgICAgPFRhc2tJbnB1dCBvbkFkZD17KHRhc2spID0+IHNldFRhc2tzKFsuLi50YXNrcywgdGFza10pfSAvPlxuICAgICAgICA8VGFza0xpc3Q+XG4gICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRhc2tMaXN0SXRlbSBrZXk9e3Rhc2suaWR9IHN0YXR1cz17dGFzay5zdGF0dXN9PlxuICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICA8L1Rhc2tMaXN0SXRlbT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UYXNrTGlzdD5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})