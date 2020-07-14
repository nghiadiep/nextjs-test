webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TaskListItem.jsx":
/*!*************************************!*\
  !*** ./components/TaskListItem.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ \"./node_modules/@material-ui/core/esm/Icon/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _contansts_ItemStatuses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contansts/ItemStatuses */ \"./contansts/ItemStatuses.js\");\n\n\nvar _icons,\n    _colors,\n    _this = undefined,\n    _jsxFileName = \"/Users/trongnghiadieppham/Downloads/react-test/components/TaskListItem.jsx\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar todo = _contansts_ItemStatuses__WEBPACK_IMPORTED_MODULE_5__[\"default\"].todo,\n    inprogress = _contansts_ItemStatuses__WEBPACK_IMPORTED_MODULE_5__[\"default\"].inprogress,\n    done = _contansts_ItemStatuses__WEBPACK_IMPORTED_MODULE_5__[\"default\"].done,\n    deleted = _contansts_ItemStatuses__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deleted,\n    canceled = _contansts_ItemStatuses__WEBPACK_IMPORTED_MODULE_5__[\"default\"].canceled;\nvar icons = (_icons = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_icons, todo, 'assignment'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_icons, inprogress, 'autorenew'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_icons, done, 'assignment_turned_in'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_icons, deleted, 'delete'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_icons, canceled, 'cancel'), _icons);\nvar colors = (_colors = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_colors, todo, 'grey'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_colors, inprogress, 'blue'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_colors, done, 'green'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_colors, deleted, 'red'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_colors, canceled, 'black'), _colors);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function (_ref) {\n  _s();\n\n  var children = _ref.children,\n      status = _ref.status,\n      updateTask = _ref.updateTask;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('todo'),\n      itemStatus = _useState[0],\n      updateStatus = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"li\", {\n    className: \"jsx-680200067\" + \" \" + \"task-list__item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    style: {\n      color: colors[status],\n      margin: 'auto 4px auto 0px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, icons[status]), __jsx(\"p\", {\n    className: \"jsx-680200067\" + \" \" + \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, children), __jsx(\"div\", {\n    className: \"jsx-680200067\" + \" \" + \"btn-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, status == todo && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    type: \"button\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"Start\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    type: \"button\",\n    onClick: function onClick(e) {\n      updateStatus('deleted');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"Delete\")), status == inprogress && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"680200067\",\n    __self: _this\n  }, \".task-list__item.jsx-680200067{padding:4px 8px;margin:2px 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;}.title.jsx-680200067{-webkit-flex:1;-ms-flex:1;flex:1;margin:auto 0;}.btn-group.jsx-680200067{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cm9uZ25naGlhZGllcHBoYW0vRG93bmxvYWRzL3JlYWN0LXRlc3QvY29tcG9uZW50cy9UYXNrTGlzdEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUSxBQUcyQixBQU1ULEFBSU0sZ0JBVEUsZUFDRixFQUtDLGNBQ2hCLDJCQUdBLCtCQVJrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3Ryb25nbmdoaWFkaWVwcGhhbS9Eb3dubG9hZHMvcmVhY3QtdGVzdC9jb21wb25lbnRzL1Rhc2tMaXN0SXRlbS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0YXR1c2VzIGZyb20gJy4uL2NvbnRhbnN0cy9JdGVtU3RhdHVzZXMnXG5cbmNvbnN0IHsgdG9kbywgaW5wcm9ncmVzcywgZG9uZSwgZGVsZXRlZCwgY2FuY2VsZWQgfSA9IHN0YXR1c2VzXG5cbmNvbnN0IGljb25zID0ge1xuICBbdG9kb106ICdhc3NpZ25tZW50JyxcbiAgW2lucHJvZ3Jlc3NdOiAnYXV0b3JlbmV3JyxcbiAgW2RvbmVdOiAnYXNzaWdubWVudF90dXJuZWRfaW4nLFxuICBbZGVsZXRlZF06ICdkZWxldGUnLFxuICBbY2FuY2VsZWRdOiAnY2FuY2VsJ1xufVxuY29uc3QgY29sb3JzID0ge1xuICBbdG9kb106ICdncmV5JyxcbiAgW2lucHJvZ3Jlc3NdOiAnYmx1ZScsXG4gIFtkb25lXTogJ2dyZWVuJyxcbiAgW2RlbGV0ZWRdOiAncmVkJyxcbiAgW2NhbmNlbGVkXTogJ2JsYWNrJ1xufVxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHN0YXR1cywgdXBkYXRlVGFzayB9KSA9PiB7XG4gIGNvbnN0IFtpdGVtU3RhdHVzLCB1cGRhdGVTdGF0dXNdID0gdXNlU3RhdGUoJ3RvZG8nKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwidGFzay1saXN0X19pdGVtXCI+XG4gICAgICAgIDxJY29uIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnNbc3RhdHVzXSwgbWFyZ2luOiAnYXV0byA0cHggYXV0byAwcHgnIH19PntpY29uc1tzdGF0dXNdfTwvSWNvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57Y2hpbGRyZW59PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXR1cyA9PSB0b2RvICYmICg8PlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIj5TdGFydDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4geyB1cGRhdGVTdGF0dXMoJ2RlbGV0ZWQnKSB9fT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPilcblxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0dXMgPT0gaW5wcm9ncmVzcyAmJiAoPD5cblxuICAgICAgICAgICAgPC8+KVxuICAgICAgICAgIH1cbiAgICAgICAgICB7LyogPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgdXBkYXRlU3RhdHVzKCdpbi1wcm9ncmVzcycpIH19IGNvbG9yPVwicHJpbWFyeVwiPlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgdXBkYXRlU3RhdHVzKCdkb25lJykgfX0gY29sb3I9XCJzZWNvbmRhcnlcIj5Eb25lPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgdXBkYXRlU3RhdHVzKCdjYW5jZWxlZCcpIH19PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB7IHVwZGF0ZVN0YXR1cygnZGVsZXRlZCcpIH19PkRlbGV0ZTwvQnV0dG9uPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgIGBcbiAgICAgICAgLnRhc2stbGlzdF9faXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgIH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59Il19 */\\n/*@ sourceURL=/Users/trongnghiadieppham/Downloads/react-test/components/TaskListItem.jsx */\"));\n}, \"xfnOLqVBqKdo6ASjOcneLU3IZwc=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tMaXN0SXRlbS5qc3g/YTI3MSJdLCJuYW1lcyI6WyJ0b2RvIiwic3RhdHVzZXMiLCJpbnByb2dyZXNzIiwiZG9uZSIsImRlbGV0ZWQiLCJjYW5jZWxlZCIsImljb25zIiwiY29sb3JzIiwiY2hpbGRyZW4iLCJzdGF0dXMiLCJ1cGRhdGVUYXNrIiwidXNlU3RhdGUiLCJpdGVtU3RhdHVzIiwidXBkYXRlU3RhdHVzIiwiY29sb3IiLCJtYXJnaW4iLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLEksR0FBOENDLCtELENBQTlDRCxJO0lBQU1FLFUsR0FBd0NELCtELENBQXhDQyxVO0lBQVlDLEksR0FBNEJGLCtELENBQTVCRSxJO0lBQU1DLE8sR0FBc0JILCtELENBQXRCRyxPO0lBQVNDLFEsR0FBYUosK0QsQ0FBYkksUTtBQUV6QyxJQUFNQyxLQUFLLG1IQUNSTixJQURRLEVBQ0QsWUFEQyxxR0FFUkUsVUFGUSxFQUVLLFdBRkwscUdBR1JDLElBSFEsRUFHRCxzQkFIQyxxR0FJUkMsT0FKUSxFQUlFLFFBSkYscUdBS1JDLFFBTFEsRUFLRyxRQUxILFVBQVg7QUFPQSxJQUFNRSxNQUFNLHFIQUNUUCxJQURTLEVBQ0YsTUFERSxzR0FFVEUsVUFGUyxFQUVJLE1BRkosc0dBR1RDLElBSFMsRUFHRixPQUhFLHNHQUlUQyxPQUpTLEVBSUMsS0FKRCxzR0FLVEMsUUFMUyxFQUtFLE9BTEYsV0FBWjtBQU9lLGtGQUFzQztBQUFBOztBQUFBLE1BQW5DRyxRQUFtQyxRQUFuQ0EsUUFBbUM7QUFBQSxNQUF6QkMsTUFBeUIsUUFBekJBLE1BQXlCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsTUFBRCxDQURRO0FBQUEsTUFDNUNDLFVBRDRDO0FBQUEsTUFDaENDLFlBRGdDOztBQUVuRCxTQUNFLG1FQUNFO0FBQUEsdUNBQWMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFUCxNQUFNLENBQUNFLE1BQUQsQ0FBZjtBQUF5Qk0sWUFBTSxFQUFFO0FBQWpDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzRVQsS0FBSyxDQUFDRyxNQUFELENBQTNFLENBREYsRUFFRTtBQUFBLHVDQUFhLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkQsUUFBdEIsQ0FGRixFQUdFO0FBQUEsdUNBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlDLE1BQU0sSUFBSVQsSUFBVixJQUFtQixtRUFDakIsTUFBQyxnRUFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFNBQUssRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGlCLEVBRWpCLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsaUJBQUNnQixDQUFELEVBQU87QUFBRUgsa0JBQVksQ0FBQyxTQUFELENBQVo7QUFBeUIsS0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZpQixDQUZ2QixFQVNJSixNQUFNLElBQUlQLFVBQVYsSUFBeUIsa0VBVDdCLENBSEYsQ0FERjtBQUFBO0FBQUE7QUFBQSxpaUhBREY7QUEyQ0QsQ0E3Q0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tMaXN0SXRlbS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0YXR1c2VzIGZyb20gJy4uL2NvbnRhbnN0cy9JdGVtU3RhdHVzZXMnXG5cbmNvbnN0IHsgdG9kbywgaW5wcm9ncmVzcywgZG9uZSwgZGVsZXRlZCwgY2FuY2VsZWQgfSA9IHN0YXR1c2VzXG5cbmNvbnN0IGljb25zID0ge1xuICBbdG9kb106ICdhc3NpZ25tZW50JyxcbiAgW2lucHJvZ3Jlc3NdOiAnYXV0b3JlbmV3JyxcbiAgW2RvbmVdOiAnYXNzaWdubWVudF90dXJuZWRfaW4nLFxuICBbZGVsZXRlZF06ICdkZWxldGUnLFxuICBbY2FuY2VsZWRdOiAnY2FuY2VsJ1xufVxuY29uc3QgY29sb3JzID0ge1xuICBbdG9kb106ICdncmV5JyxcbiAgW2lucHJvZ3Jlc3NdOiAnYmx1ZScsXG4gIFtkb25lXTogJ2dyZWVuJyxcbiAgW2RlbGV0ZWRdOiAncmVkJyxcbiAgW2NhbmNlbGVkXTogJ2JsYWNrJ1xufVxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIHN0YXR1cywgdXBkYXRlVGFzayB9KSA9PiB7XG4gIGNvbnN0IFtpdGVtU3RhdHVzLCB1cGRhdGVTdGF0dXNdID0gdXNlU3RhdGUoJ3RvZG8nKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwidGFzay1saXN0X19pdGVtXCI+XG4gICAgICAgIDxJY29uIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnNbc3RhdHVzXSwgbWFyZ2luOiAnYXV0byA0cHggYXV0byAwcHgnIH19PntpY29uc1tzdGF0dXNdfTwvSWNvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57Y2hpbGRyZW59PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXR1cyA9PSB0b2RvICYmICg8PlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIj5TdGFydDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4geyB1cGRhdGVTdGF0dXMoJ2RlbGV0ZWQnKSB9fT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPilcblxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0dXMgPT0gaW5wcm9ncmVzcyAmJiAoPD5cblxuICAgICAgICAgICAgPC8+KVxuICAgICAgICAgIH1cbiAgICAgICAgICB7LyogPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgdXBkYXRlU3RhdHVzKCdpbi1wcm9ncmVzcycpIH19IGNvbG9yPVwicHJpbWFyeVwiPlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgdXBkYXRlU3RhdHVzKCdkb25lJykgfX0gY29sb3I9XCJzZWNvbmRhcnlcIj5Eb25lPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IHsgdXBkYXRlU3RhdHVzKCdjYW5jZWxlZCcpIH19PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiB7IHVwZGF0ZVN0YXR1cygnZGVsZXRlZCcpIH19PkRlbGV0ZTwvQnV0dG9uPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgIGBcbiAgICAgICAgLnRhc2stbGlzdF9faXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgIH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TaskListItem.jsx\n");

/***/ })

})