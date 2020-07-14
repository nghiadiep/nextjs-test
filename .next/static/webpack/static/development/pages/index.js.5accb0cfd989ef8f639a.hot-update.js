webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TaskList */ \"./components/TaskList.jsx\");\n/* harmony import */ var components_TaskListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/TaskListItem */ \"./components/TaskListItem.jsx\");\n/* harmony import */ var components_TaskInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TaskInput */ \"./components/TaskInput.jsx\");\n\n\nvar _jsxFileName = \"/Users/trongnghiadieppham/Downloads/react-test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      tasks = _useState[0],\n      setTasks = _useState[1];\n\n  var _updateTask = function updateTask(_ref) {\n    var id = _ref.id,\n        title = _ref.title,\n        status = _ref.status;\n    var editedTask = {\n      id: id,\n      title: title,\n      status: status\n    };\n    var newTasks = tasks.map(function (item) {\n      return item.id === editedTask.id ? Object.assign({}, item, editedTask) : Object.assign({}, item);\n    });\n    setTasks(newTasks);\n  };\n\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Todo Task Web App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400,500|Material+Icons\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    style: {\n      maxWidth: '966px',\n      margin: 'auto'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(components_TaskInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    onAdd: function onAdd(task) {\n      return setTasks([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks), [task]));\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(components_TaskList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, tasks.map(function (task) {\n    return __jsx(components_TaskListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: task.id,\n      id: task.id,\n      status: task.status,\n      title: task.title,\n      updateTask: function updateTask(task) {\n        return _updateTask(task);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 15\n      }\n    }, task.title);\n  }))));\n}\n\n_s(Home, \"+34uIVDBalDkucWnJ7Aj1Xxb0MA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInRhc2tzIiwic2V0VGFza3MiLCJ1cGRhdGVUYXNrIiwiaWQiLCJ0aXRsZSIsInN0YXR1cyIsImVkaXRlZFRhc2siLCJuZXdUYXNrcyIsIm1hcCIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUc3QixNQUFNQyxXQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEyQjtBQUFBLFFBQXhCQyxFQUF3QixRQUF4QkEsRUFBd0I7QUFBQSxRQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsUUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBRTVDLFFBQU1DLFVBQVUsR0FBRztBQUNqQkgsUUFBRSxFQUFGQSxFQURpQjtBQUVqQkMsV0FBSyxFQUFMQSxLQUZpQjtBQUdqQkMsWUFBTSxFQUFOQTtBQUhpQixLQUFuQjtBQU1BLFFBQU1FLFFBQVEsR0FBR1AsS0FBSyxDQUFDUSxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ04sRUFBTCxLQUFZRyxVQUFVLENBQUNILEVBQXZCLEdBQTRCTyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QkgsVUFBeEIsQ0FBNUIsR0FBa0VJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLElBQWxCLENBQXRFO0FBQUEsS0FBZCxDQUFqQjtBQUVBUixZQUFRLENBQUNNLFFBQUQsQ0FBUjtBQUNELEdBWEQ7O0FBWUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFDRSxRQUFJLEVBQUMsNkdBRFA7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQVNFO0FBQU0sU0FBSyxFQUFFO0FBQUVLLGNBQVEsRUFBRSxPQUFaO0FBQXFCQyxZQUFNLEVBQUU7QUFBN0IsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFXLFNBQUssRUFBRSxlQUFDQyxJQUFEO0FBQUEsYUFBVWIsUUFBUSx3R0FBS0QsS0FBTCxJQUFZYyxJQUFaLEdBQWxCO0FBQUEsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dkLEtBQUssQ0FBQ1EsR0FBTixDQUFVLFVBQUNNLElBQUQsRUFBVTtBQUNuQixXQUNFLE1BQUMsK0RBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ1gsRUFEWjtBQUVFLFFBQUUsRUFBRVcsSUFBSSxDQUFDWCxFQUZYO0FBR0UsWUFBTSxFQUFFVyxJQUFJLENBQUNULE1BSGY7QUFJRSxXQUFLLEVBQUVTLElBQUksQ0FBQ1YsS0FKZDtBQUtFLGdCQUFVLEVBQUUsb0JBQUFVLElBQUk7QUFBQSxlQUFJWixXQUFVLENBQUNZLElBQUQsQ0FBZDtBQUFBLE9BTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNR0EsSUFBSSxDQUFDVixLQU5SLENBREY7QUFVRCxHQVhBLENBREgsQ0FGRixDQVRGLENBREY7QUE2QkQ7O0dBNUN1Qk4sSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUYXNrTGlzdCBmcm9tICdjb21wb25lbnRzL1Rhc2tMaXN0J1xuaW1wb3J0IFRhc2tMaXN0SXRlbSBmcm9tICdjb21wb25lbnRzL1Rhc2tMaXN0SXRlbSdcbmltcG9ydCBUYXNrSW5wdXQgZnJvbSAnY29tcG9uZW50cy9UYXNrSW5wdXQnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoeyBpZCwgdGl0bGUsIHN0YXR1cyB9KSA9PiB7XG5cbiAgICBjb25zdCBlZGl0ZWRUYXNrID0ge1xuICAgICAgaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIHN0YXR1cyxcbiAgICB9XG5cbiAgICBjb25zdCBuZXdUYXNrcyA9IHRhc2tzLm1hcChpdGVtID0+IGl0ZW0uaWQgPT09IGVkaXRlZFRhc2suaWQgPyBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCBlZGl0ZWRUYXNrKSA6IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKTtcblxuICAgIHNldFRhc2tzKG5ld1Rhc2tzKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRvZG8gVGFzayBXZWIgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAsNDAwaXRhbGljfFJvYm90bytNb25vOjQwMCw1MDB8TWF0ZXJpYWwrSWNvbnMnXG4gICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gc3R5bGU9e3sgbWF4V2lkdGg6ICc5NjZweCcsIG1hcmdpbjogJ2F1dG8nIH19PlxuICAgICAgICA8VGFza0lucHV0IG9uQWRkPXsodGFzaykgPT4gc2V0VGFza3MoWy4uLnRhc2tzLCB0YXNrXSl9IC8+XG4gICAgICAgIDxUYXNrTGlzdD5cbiAgICAgICAgICB7dGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGFza0xpc3RJdGVtXG4gICAgICAgICAgICAgICAga2V5PXt0YXNrLmlkfVxuICAgICAgICAgICAgICAgIGlkPXt0YXNrLmlkfVxuICAgICAgICAgICAgICAgIHN0YXR1cz17dGFzay5zdGF0dXN9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgICAgdXBkYXRlVGFzaz17dGFzayA9PiB1cGRhdGVUYXNrKHRhc2spfT5cbiAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgPC9UYXNrTGlzdEl0ZW0+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGFza0xpc3Q+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXYgPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})