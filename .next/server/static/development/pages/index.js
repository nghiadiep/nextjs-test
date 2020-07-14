module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TaskInput.jsx":
/*!**********************************!*\
  !*** ./components/TaskInput.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contansts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contansts */ \"./contansts/index.js\");\nvar _jsxFileName = \"/Users/trongnghiadieppham/Downloads/react-test/components/TaskInput.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  onAdd\n}) => {\n  const {\n    0: taskTitle,\n    1: updateTaskTitle\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    todo\n  } = _contansts__WEBPACK_IMPORTED_MODULE_3__[\"itemStatuses\"];\n\n  const addTask = () => {\n    if (onAdd && taskTitle) {\n      onAdd({\n        id: Date.now(),\n        title: taskTitle,\n        status: todo\n      });\n    }\n\n    updateTaskTitle('');\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"form\", {\n    onSubmit: e => {\n      e.preventDefault();\n      addTask();\n    },\n    className: \"jsx-657363717\" + \" \" + \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    value: taskTitle,\n    onChange: e => updateTaskTitle(e.currentTarget.value),\n    className: \"jsx-657363717\" + \" \" + \"task-input\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"657363717\",\n    __self: undefined\n  }, \".container.jsx-657363717{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:16px 0px;}.task-input.jsx-657363717{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:8px 4px;display:block;-webkit-flex:1;-ms-flex:1;flex:1;border:1px solid #dedede;border-radius:2px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cm9uZ25naGlhZGllcHBoYW0vRG93bmxvYWRzL3JlYWN0LXRlc3QvY29tcG9uZW50cy9UYXNrSW5wdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHc0IsQUFJRyw2REFDQSxhQUpBLEdBS0YsYUFKaEIsQ0FLUyxpQ0FDa0IseUJBQ1Asa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90cm9uZ25naGlhZGllcHBoYW0vRG93bmxvYWRzL3JlYWN0LXRlc3QvY29tcG9uZW50cy9UYXNrSW5wdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IHsgaXRlbVN0YXR1c2VzIH0gZnJvbSAnLi4vY29udGFuc3RzJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBvbkFkZCB9KSA9PiB7XG4gIGNvbnN0IFt0YXNrVGl0bGUsIHVwZGF0ZVRhc2tUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgeyB0b2RvIH0gPSBpdGVtU3RhdHVzZXNcbiAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBpZiAob25BZGQgJiYgdGFza1RpdGxlKSB7XG4gICAgICBvbkFkZCh7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgICBzdGF0dXM6IHRvZG9cbiAgICAgIH0pXG4gICAgfVxuICAgIHVwZGF0ZVRhc2tUaXRsZSgnJylcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb250YWluZXJcIiBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGFkZFRhc2soKVxuICAgICAgfX0gPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGFzay1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Rhc2tUaXRsZX0gb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVUYXNrVGl0bGUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgICAgfVxuICAgICAgLnRhc2staW5wdXQge1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59Il19 */\\n/*@ sourceURL=/Users/trongnghiadieppham/Downloads/react-test/components/TaskInput.jsx */\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tJbnB1dC5qc3g/Mzc3MyJdLCJuYW1lcyI6WyJvbkFkZCIsInRhc2tUaXRsZSIsInVwZGF0ZVRhc2tUaXRsZSIsInVzZVN0YXRlIiwidG9kbyIsIml0ZW1TdGF0dXNlcyIsImFkZFRhc2siLCJpZCIsIkRhdGUiLCJub3ciLCJ0aXRsZSIsInN0YXR1cyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsZ0VBQUM7QUFBRUE7QUFBRixDQUFELEtBQWU7QUFDNUIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQStCQyxzREFBUSxDQUFDLEVBQUQsQ0FBN0M7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBV0MsdURBQWpCOztBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQUlOLEtBQUssSUFBSUMsU0FBYixFQUF3QjtBQUN0QkQsV0FBSyxDQUFDO0FBQ0pPLFVBQUUsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLEVBREE7QUFFSkMsYUFBSyxFQUFFVCxTQUZIO0FBR0pVLGNBQU0sRUFBRVA7QUFISixPQUFELENBQUw7QUFLRDs7QUFDREYsbUJBQWUsQ0FBQyxFQUFELENBQWY7QUFDRCxHQVREOztBQVVBLFNBQ0UsbUVBQ0U7QUFBNEIsWUFBUSxFQUFHVSxDQUFELElBQU87QUFDM0NBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUCxhQUFPO0FBQ1IsS0FIRDtBQUFBLHVDQUFnQixXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBOEIsUUFBSSxFQUFDLE1BQW5DO0FBQTBDLFNBQUssRUFBRUwsU0FBakQ7QUFBNEQsWUFBUSxFQUFHVyxDQUFELElBQU9WLGVBQWUsQ0FBQ1UsQ0FBQyxDQUFDRSxhQUFGLENBQWdCQyxLQUFqQixDQUE1RjtBQUFBLHVDQUFpQixZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERjtBQUFBO0FBQUE7QUFBQSwwdEVBREY7QUF3QkQsQ0FyQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rhc2tJbnB1dC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgeyBpdGVtU3RhdHVzZXMgfSBmcm9tICcuLi9jb250YW5zdHMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IG9uQWRkIH0pID0+IHtcbiAgY29uc3QgW3Rhc2tUaXRsZSwgdXBkYXRlVGFza1RpdGxlXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCB7IHRvZG8gfSA9IGl0ZW1TdGF0dXNlc1xuICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgIGlmIChvbkFkZCAmJiB0YXNrVGl0bGUpIHtcbiAgICAgIG9uQWRkKHtcbiAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgICAgIHN0YXR1czogdG9kb1xuICAgICAgfSlcbiAgICB9XG4gICAgdXBkYXRlVGFza1RpdGxlKCcnKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYWRkVGFzaygpXG4gICAgICB9fSA+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0YXNrLWlucHV0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dGFza1RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVRhc2tUaXRsZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICB9XG4gICAgICAudGFzay1pbnB1dCB7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCA0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TaskInput.jsx\n");

/***/ }),

/***/ "./components/TaskList.jsx":
/*!*********************************!*\
  !*** ./components/TaskList.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/trongnghiadieppham/Downloads/react-test/components/TaskList.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  children\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"ul\", {\n    className: \"jsx-772329859\" + \" \" + \"task-list\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }\n  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"772329859\",\n    __self: undefined\n  }, \".task-list.jsx-772329859{border:0;padding:5px;margin:0;border-radius:2px;background:#f0f0f0;box-shadow:0 1px 4px rgba(0,0,0,0.35);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cm9uZ25naGlhZGllcHBoYW0vRG93bmxvYWRzL3JlYWN0LXRlc3QvY29tcG9uZW50cy9UYXNrTGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT1EsQUFFb0IsU0FDRyxZQUNILFNBQ1Msa0JBQ0MsbUJBQ21CLHNDQUN4QyIsImZpbGUiOiIvVXNlcnMvdHJvbmduZ2hpYWRpZXBwaGFtL0Rvd25sb2Fkcy9yZWFjdC10ZXN0L2NvbXBvbmVudHMvVGFza0xpc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwidGFzay1saXN0XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdWw+XG4gICAgICA8c3R5bGUganN4PntcbiAgICAgICAgYC50YXNrLWxpc3Qge1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMzUpO1xuICAgICAgICB9YFxuICAgICAgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn0iXX0= */\\n/*@ sourceURL=/Users/trongnghiadieppham/Downloads/react-test/components/TaskList.jsx */\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tMaXN0LmpzeD82NmMzIl0sIm5hbWVzIjpbImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZSxnRUFBQztBQUFFQTtBQUFGLENBQUQsS0FBa0I7QUFDL0IsU0FDRSxtRUFDRTtBQUFBLHVDQUFjLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQURILENBREY7QUFBQTtBQUFBO0FBQUEsa3FDQURGO0FBaUJELENBbEJEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYXNrTGlzdC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YXNrLWxpc3RcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC91bD5cbiAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICBgLnRhc2stbGlzdCB7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4zNSk7XG4gICAgICAgIH1gXG4gICAgICB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TaskList.jsx\n");

/***/ }),

/***/ "./components/TaskListItem.jsx":
/*!*************************************!*\
  !*** ./components/TaskListItem.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contansts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contansts */ \"./contansts/index.js\");\nvar _jsxFileName = \"/Users/trongnghiadieppham/Downloads/react-test/components/TaskListItem.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nconst {\n  todo,\n  inprogress,\n  done,\n  deleted,\n  canceled\n} = _contansts__WEBPACK_IMPORTED_MODULE_4__[\"itemStatuses\"];\nconst icons = {\n  [todo]: 'assignment',\n  [inprogress]: 'autorenew',\n  [done]: 'assignment_turned_in',\n  [deleted]: 'delete',\n  [canceled]: 'cancel'\n};\nconst colors = {\n  [todo]: 'grey',\n  [inprogress]: 'blue',\n  [done]: 'green',\n  [deleted]: 'red',\n  [canceled]: 'black'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  children,\n  status,\n  updateTask,\n  id,\n  title\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"li\", {\n    className: \"jsx-680200067\" + \" \" + \"task-list__item\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: {\n      color: colors[status],\n      margin: 'auto 4px auto 0px'\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, icons[status]), __jsx(\"p\", {\n    className: \"jsx-680200067\" + \" \" + \"title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, children), __jsx(\"div\", {\n    className: \"jsx-680200067\" + \" \" + \"btn-group\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, status === todo && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"button\",\n    onClick: () => {\n      updateTask({\n        id,\n        title,\n        status: inprogress\n      });\n    },\n    color: \"primary\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, \"Start\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"button\",\n    onClick: () => {\n      updateTask({\n        id,\n        title,\n        status: deleted\n      });\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"Delete\")), status === inprogress && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"button\",\n    color: \"secondary\",\n    onClick: () => {\n      updateTask({\n        id,\n        title,\n        status: done\n      });\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }, \"Done\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"button\",\n    onClick: () => {\n      updateTask({\n        id,\n        title,\n        status: canceled\n      });\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }, \"Cancel\")), (status === done || status === canceled) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    type: \"button\",\n    onClick: () => {\n      updateTask({\n        id,\n        title,\n        status: deleted\n      });\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }, \"Delete\")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"680200067\",\n    __self: undefined\n  }, \".task-list__item.jsx-680200067{padding:4px 8px;margin:2px 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff;}.title.jsx-680200067{-webkit-flex:1;-ms-flex:1;flex:1;margin:auto 0;}.btn-group.jsx-680200067{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cm9uZ25naGlhZGllcHBoYW0vRG93bmxvYWRzL3JlYWN0LXRlc3QvY29tcG9uZW50cy9UYXNrTGlzdEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUSxBQUcyQixBQU1ULEFBSU0sZ0JBVEUsZUFDRixFQUtDLGNBQ2hCLDJCQUdBLCtCQVJrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3Ryb25nbmdoaWFkaWVwcGhhbS9Eb3dubG9hZHMvcmVhY3QtdGVzdC9jb21wb25lbnRzL1Rhc2tMaXN0SXRlbS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaXRlbVN0YXR1c2VzIH0gZnJvbSAnLi4vY29udGFuc3RzJ1xuXG5jb25zdCB7IHRvZG8sIGlucHJvZ3Jlc3MsIGRvbmUsIGRlbGV0ZWQsIGNhbmNlbGVkIH0gPSBpdGVtU3RhdHVzZXNcblxuY29uc3QgaWNvbnMgPSB7XG4gIFt0b2RvXTogJ2Fzc2lnbm1lbnQnLFxuICBbaW5wcm9ncmVzc106ICdhdXRvcmVuZXcnLFxuICBbZG9uZV06ICdhc3NpZ25tZW50X3R1cm5lZF9pbicsXG4gIFtkZWxldGVkXTogJ2RlbGV0ZScsXG4gIFtjYW5jZWxlZF06ICdjYW5jZWwnXG59XG5jb25zdCBjb2xvcnMgPSB7XG4gIFt0b2RvXTogJ2dyZXknLFxuICBbaW5wcm9ncmVzc106ICdibHVlJyxcbiAgW2RvbmVdOiAnZ3JlZW4nLFxuICBbZGVsZXRlZF06ICdyZWQnLFxuICBbY2FuY2VsZWRdOiAnYmxhY2snXG59XG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgc3RhdHVzLCB1cGRhdGVUYXNrLCBpZCwgdGl0bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwidGFzay1saXN0X19pdGVtXCI+XG4gICAgICAgIDxJY29uIHN0eWxlPXt7IGNvbG9yOiBjb2xvcnNbc3RhdHVzXSwgbWFyZ2luOiAnYXV0byA0cHggYXV0byAwcHgnIH19PntpY29uc1tzdGF0dXNdfTwvSWNvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj57Y2hpbGRyZW59PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXR1cyA9PT0gdG9kbyAmJiAoPD5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4geyB1cGRhdGVUYXNrKHsgaWQsIHRpdGxlLCBzdGF0dXM6IGlucHJvZ3Jlc3MgfSkgfX0gY29sb3I9XCJwcmltYXJ5XCI+U3RhcnQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4geyB1cGRhdGVUYXNrKHsgaWQsIHRpdGxlLCBzdGF0dXM6IGRlbGV0ZWQgfSkgfX0+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz4pXG5cbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdHVzID09PSBpbnByb2dyZXNzICYmICg8PlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHsgdXBkYXRlVGFzayh7IGlkLCB0aXRsZSwgc3RhdHVzOiBkb25lIH0pIH19PkRvbmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4geyB1cGRhdGVUYXNrKHsgaWQsIHRpdGxlLCBzdGF0dXM6IGNhbmNlbGVkIH0pIH19PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICAoc3RhdHVzID09PSBkb25lIHx8IHN0YXR1cyA9PT0gY2FuY2VsZWQpICYmICg8PlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHVwZGF0ZVRhc2soeyBpZCwgdGl0bGUsIHN0YXR1czogZGVsZXRlZCB9KSB9fT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPilcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICAgIDxzdHlsZSBqc3g+e1xuICAgICAgICBgXG4gICAgICAgIC50YXNrLWxpc3RfX2l0ZW0ge1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgbWFyZ2luOiAycHggMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICBgXG4gICAgICB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufSJdfQ== */\\n/*@ sourceURL=/Users/trongnghiadieppham/Downloads/react-test/components/TaskListItem.jsx */\"));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tMaXN0SXRlbS5qc3g/YTI3MSJdLCJuYW1lcyI6WyJ0b2RvIiwiaW5wcm9ncmVzcyIsImRvbmUiLCJkZWxldGVkIiwiY2FuY2VsZWQiLCJpdGVtU3RhdHVzZXMiLCJpY29ucyIsImNvbG9ycyIsImNoaWxkcmVuIiwic3RhdHVzIiwidXBkYXRlVGFzayIsImlkIiwidGl0bGUiLCJjb2xvciIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRUEsTUFBRjtBQUFRQyxZQUFSO0FBQW9CQyxNQUFwQjtBQUEwQkMsU0FBMUI7QUFBbUNDO0FBQW5DLElBQWdEQyx1REFBdEQ7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFDWixHQUFDTixJQUFELEdBQVEsWUFESTtBQUVaLEdBQUNDLFVBQUQsR0FBYyxXQUZGO0FBR1osR0FBQ0MsSUFBRCxHQUFRLHNCQUhJO0FBSVosR0FBQ0MsT0FBRCxHQUFXLFFBSkM7QUFLWixHQUFDQyxRQUFELEdBQVk7QUFMQSxDQUFkO0FBT0EsTUFBTUcsTUFBTSxHQUFHO0FBQ2IsR0FBQ1AsSUFBRCxHQUFRLE1BREs7QUFFYixHQUFDQyxVQUFELEdBQWMsTUFGRDtBQUdiLEdBQUNDLElBQUQsR0FBUSxPQUhLO0FBSWIsR0FBQ0MsT0FBRCxHQUFXLEtBSkU7QUFLYixHQUFDQyxRQUFELEdBQVk7QUFMQyxDQUFmO0FBT2UsZ0VBQUM7QUFBRUksVUFBRjtBQUFZQyxRQUFaO0FBQW9CQyxZQUFwQjtBQUFnQ0MsSUFBaEM7QUFBb0NDO0FBQXBDLENBQUQsS0FBaUQ7QUFDOUQsU0FDRSxtRUFDRTtBQUFBLHVDQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRU4sTUFBTSxDQUFDRSxNQUFELENBQWY7QUFBeUJLLFlBQU0sRUFBRTtBQUFqQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0VSLEtBQUssQ0FBQ0csTUFBRCxDQUEzRSxDQURGLEVBRUU7QUFBQSx1Q0FBYSxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JELFFBQXRCLENBRkYsRUFHRTtBQUFBLHVDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJQyxNQUFNLEtBQUtULElBQVgsSUFBb0IsbUVBQ2xCLE1BQUMsK0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUUsTUFBTTtBQUFFVSxnQkFBVSxDQUFDO0FBQUVDLFVBQUY7QUFBTUMsYUFBTjtBQUFhSCxjQUFNLEVBQUVSO0FBQXJCLE9BQUQsQ0FBVjtBQUErQyxLQUF0RjtBQUF3RixTQUFLLEVBQUMsU0FBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURrQixFQUVsQixNQUFDLCtEQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFLE1BQU07QUFBRVMsZ0JBQVUsQ0FBQztBQUFFQyxVQUFGO0FBQU1DLGFBQU47QUFBYUgsY0FBTSxFQUFFTjtBQUFyQixPQUFELENBQVY7QUFBNEMsS0FBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZrQixDQUZ4QixFQVNJTSxNQUFNLEtBQUtSLFVBQVgsSUFBMEIsbUVBQ3hCLE1BQUMsK0RBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixTQUFLLEVBQUMsV0FBNUI7QUFBd0MsV0FBTyxFQUFFLE1BQU07QUFBRVMsZ0JBQVUsQ0FBQztBQUFFQyxVQUFGO0FBQU1DLGFBQU47QUFBYUgsY0FBTSxFQUFFUDtBQUFyQixPQUFELENBQVY7QUFBeUMsS0FBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUR3QixFQUV4QixNQUFDLCtEQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFLE1BQU07QUFBRVEsZ0JBQVUsQ0FBQztBQUFFQyxVQUFGO0FBQU1DLGFBQU47QUFBYUgsY0FBTSxFQUFFTDtBQUFyQixPQUFELENBQVY7QUFBNkMsS0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZ3QixDQVQ5QixFQWVJLENBQUNLLE1BQU0sS0FBS1AsSUFBWCxJQUFtQk8sTUFBTSxLQUFLTCxRQUEvQixLQUE2QyxtRUFDM0MsTUFBQywrREFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRSxNQUFNO0FBQUVNLGdCQUFVLENBQUM7QUFBRUMsVUFBRjtBQUFNQyxhQUFOO0FBQWFILGNBQU0sRUFBRU47QUFBckIsT0FBRCxDQUFWO0FBQTRDLEtBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEMkMsQ0FmakQsQ0FIRixDQURGO0FBQUE7QUFBQTtBQUFBLHFwSEFERjtBQTZDRCxDQTlDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGFza0xpc3RJdGVtLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpdGVtU3RhdHVzZXMgfSBmcm9tICcuLi9jb250YW5zdHMnXG5cbmNvbnN0IHsgdG9kbywgaW5wcm9ncmVzcywgZG9uZSwgZGVsZXRlZCwgY2FuY2VsZWQgfSA9IGl0ZW1TdGF0dXNlc1xuXG5jb25zdCBpY29ucyA9IHtcbiAgW3RvZG9dOiAnYXNzaWdubWVudCcsXG4gIFtpbnByb2dyZXNzXTogJ2F1dG9yZW5ldycsXG4gIFtkb25lXTogJ2Fzc2lnbm1lbnRfdHVybmVkX2luJyxcbiAgW2RlbGV0ZWRdOiAnZGVsZXRlJyxcbiAgW2NhbmNlbGVkXTogJ2NhbmNlbCdcbn1cbmNvbnN0IGNvbG9ycyA9IHtcbiAgW3RvZG9dOiAnZ3JleScsXG4gIFtpbnByb2dyZXNzXTogJ2JsdWUnLFxuICBbZG9uZV06ICdncmVlbicsXG4gIFtkZWxldGVkXTogJ3JlZCcsXG4gIFtjYW5jZWxlZF06ICdibGFjaydcbn1cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCBzdGF0dXMsIHVwZGF0ZVRhc2ssIGlkLCB0aXRsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YXNrLWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgPEljb24gc3R5bGU9e3sgY29sb3I6IGNvbG9yc1tzdGF0dXNdLCBtYXJnaW46ICdhdXRvIDRweCBhdXRvIDBweCcgfX0+e2ljb25zW3N0YXR1c119PC9JY29uPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntjaGlsZHJlbn08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdHVzID09PSB0b2RvICYmICg8PlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHVwZGF0ZVRhc2soeyBpZCwgdGl0bGUsIHN0YXR1czogaW5wcm9ncmVzcyB9KSB9fSBjb2xvcj1cInByaW1hcnlcIj5TdGFydDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHVwZGF0ZVRhc2soeyBpZCwgdGl0bGUsIHN0YXR1czogZGVsZXRlZCB9KSB9fT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPilcblxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0dXMgPT09IGlucHJvZ3Jlc3MgJiYgKDw+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4geyB1cGRhdGVUYXNrKHsgaWQsIHRpdGxlLCBzdGF0dXM6IGRvbmUgfSkgfX0+RG9uZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7IHVwZGF0ZVRhc2soeyBpZCwgdGl0bGUsIHN0YXR1czogY2FuY2VsZWQgfSkgfX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz4pXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIChzdGF0dXMgPT09IGRvbmUgfHwgc3RhdHVzID09PSBjYW5jZWxlZCkgJiYgKDw+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHsgdXBkYXRlVGFzayh7IGlkLCB0aXRsZSwgc3RhdHVzOiBkZWxldGVkIH0pIH19PkRlbGV0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgPC8+KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgPHN0eWxlIGpzeD57XG4gICAgICAgIGBcbiAgICAgICAgLnRhc2stbGlzdF9faXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICAgIH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TaskListItem.jsx\n");

/***/ }),

/***/ "./contansts/ItemStatuses.js":
/*!***********************************!*\
  !*** ./contansts/ItemStatuses.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst statuses = {\n  todo: 'todo',\n  inprogress: 'in-progress',\n  done: 'done',\n  deleted: 'deleted',\n  canceled: 'canceled'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (statuses);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YW5zdHMvSXRlbVN0YXR1c2VzLmpzP2ZjMzkiXSwibmFtZXMiOlsic3RhdHVzZXMiLCJ0b2RvIiwiaW5wcm9ncmVzcyIsImRvbmUiLCJkZWxldGVkIiwiY2FuY2VsZWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLE1BQUksRUFBRSxNQURTO0FBRWZDLFlBQVUsRUFBRSxhQUZHO0FBR2ZDLE1BQUksRUFBRSxNQUhTO0FBSWZDLFNBQU8sRUFBRSxTQUpNO0FBS2ZDLFVBQVEsRUFBRTtBQUxLLENBQWpCO0FBUWVMLHVFQUFmIiwiZmlsZSI6Ii4vY29udGFuc3RzL0l0ZW1TdGF0dXNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0YXR1c2VzID0ge1xuICB0b2RvOiAndG9kbycsXG4gIGlucHJvZ3Jlc3M6ICdpbi1wcm9ncmVzcycsXG4gIGRvbmU6ICdkb25lJyxcbiAgZGVsZXRlZDogJ2RlbGV0ZWQnLFxuICBjYW5jZWxlZDogJ2NhbmNlbGVkJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0dXNlc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contansts/ItemStatuses.js\n");

/***/ }),

/***/ "./contansts/index.js":
/*!****************************!*\
  !*** ./contansts/index.js ***!
  \****************************/
/*! exports provided: itemStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemStatuses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemStatuses */ \"./contansts/ItemStatuses.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"itemStatuses\", function() { return _ItemStatuses__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YW5zdHMvaW5kZXguanM/YzNhNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vY29udGFuc3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGl0ZW1TdGF0dXNlcyBmcm9tICcuL0l0ZW1TdGF0dXNlcydcblxuZXhwb3J0IHtcbiAgICBpdGVtU3RhdHVzZXNcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contansts/index.js\n");

/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: usePersistedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _usePersistedState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usePersistedState */ \"./hooks/usePersistedState.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"usePersistedState\", function() { return _usePersistedState__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9pbmRleC5qcz9lN2UwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9ob29rcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VQZXJzaXN0ZWRTdGF0ZSBmcm9tICcuL3VzZVBlcnNpc3RlZFN0YXRlJ1xuXG5leHBvcnQge1xuICAgIHVzZVBlcnNpc3RlZFN0YXRlXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/index.js\n");

/***/ }),

/***/ "./hooks/usePersistedState.js":
/*!************************************!*\
  !*** ./hooks/usePersistedState.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction usePersistedState(key, defaultValue) {\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultValue);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var _JSON$parse;\n\n    if ((_JSON$parse = JSON.parse(localStorage.getItem(key))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.length) {\n      setState(JSON.parse(localStorage.getItem(key)));\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    localStorage.setItem(key, JSON.stringify(state));\n  }, [key, state]);\n  return [state, setState];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (usePersistedState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VQZXJzaXN0ZWRTdGF0ZS5qcz9jYjJlIl0sIm5hbWVzIjpbInVzZVBlcnNpc3RlZFN0YXRlIiwia2V5IiwiZGVmYXVsdFZhbHVlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxlbmd0aCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsWUFBaEMsRUFBOEM7QUFDMUMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDSCxZQUFELENBQWxDO0FBRUFJLHlEQUFTLENBQUMsTUFBTTtBQUFBOztBQUNaLHVCQUFJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCVCxHQUFyQixDQUFYLENBQUosZ0RBQUksWUFBdUNVLE1BQTNDLEVBQW1EO0FBQy9DUCxjQUFRLENBQUNHLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJULEdBQXJCLENBQVgsQ0FBRCxDQUFSO0FBQ0g7QUFDSixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFLLHlEQUFTLENBQUMsTUFBTTtBQUNaRyxnQkFBWSxDQUFDRyxPQUFiLENBQXFCWCxHQUFyQixFQUEwQk0sSUFBSSxDQUFDTSxTQUFMLENBQWVWLEtBQWYsQ0FBMUI7QUFDSCxHQUZRLEVBRU4sQ0FBQ0YsR0FBRCxFQUFNRSxLQUFOLENBRk0sQ0FBVDtBQUlBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRQyxRQUFSLENBQVA7QUFDSDs7QUFFY0osZ0ZBQWYiLCJmaWxlIjoiLi9ob29rcy91c2VQZXJzaXN0ZWRTdGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gdXNlUGVyc2lzdGVkU3RhdGUoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFN0YXRlKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKVxuICAgIH0sIFtrZXksIHN0YXRlXSlcblxuICAgIHJldHVybiBbc3RhdGUsIHNldFN0YXRlXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQZXJzaXN0ZWRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/usePersistedState.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_TaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TaskList */ \"./components/TaskList.jsx\");\n/* harmony import */ var components_TaskListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TaskListItem */ \"./components/TaskListItem.jsx\");\n/* harmony import */ var components_TaskInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/TaskInput */ \"./components/TaskInput.jsx\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ \"./hooks/index.js\");\nvar _jsxFileName = \"/Users/trongnghiadieppham/Downloads/react-test/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Home() {\n  const [tasks, setTasks] = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[\"usePersistedState\"])('tasks', []);\n\n  const updateTask = ({\n    id,\n    title,\n    status\n  }) => {\n    const editedTask = {\n      id,\n      title,\n      status\n    };\n    const newTasks = tasks.map(item => item.id === editedTask.id ? Object.assign({}, item, editedTask) : Object.assign({}, item));\n    setTasks(newTasks);\n  };\n\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"Todo Task Web App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400,500|Material+Icons\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    style: {\n      maxWidth: '966px',\n      margin: 'auto'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(components_TaskInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onAdd: task => setTasks([...tasks, task]),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(components_TaskList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, tasks.map(task => {\n    return __jsx(components_TaskListItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: task.id,\n      id: task.id,\n      status: task.status,\n      title: task.title,\n      updateTask: task => updateTask(task),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }\n    }, task.title);\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ0YXNrcyIsInNldFRhc2tzIiwidXNlUGVyc2lzdGVkU3RhdGUiLCJ1cGRhdGVUYXNrIiwiaWQiLCJ0aXRsZSIsInN0YXR1cyIsImVkaXRlZFRhc2siLCJuZXdUYXNrcyIsIm1hcCIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRhc2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyxnRUFBaUIsQ0FBQyxPQUFELEVBQVUsRUFBVixDQUEzQzs7QUFFQSxRQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQU1DLFNBQU47QUFBYUM7QUFBYixHQUFELEtBQTJCO0FBRTVDLFVBQU1DLFVBQVUsR0FBRztBQUNqQkgsUUFEaUI7QUFFakJDLFdBRmlCO0FBR2pCQztBQUhpQixLQUFuQjtBQU1BLFVBQU1FLFFBQVEsR0FBR1IsS0FBSyxDQUFDUyxHQUFOLENBQVVDLElBQUksSUFBSUEsSUFBSSxDQUFDTixFQUFMLEtBQVlHLFVBQVUsQ0FBQ0gsRUFBdkIsR0FBNEJPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLElBQWxCLEVBQXdCSCxVQUF4QixDQUE1QixHQUFrRUksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsSUFBbEIsQ0FBcEYsQ0FBakI7QUFFQVQsWUFBUSxDQUFDTyxRQUFELENBQVI7QUFDRCxHQVhEOztBQVlBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQ0UsUUFBSSxFQUFDLDZHQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFTRTtBQUFNLFNBQUssRUFBRTtBQUFFSyxjQUFRLEVBQUUsT0FBWjtBQUFxQkMsWUFBTSxFQUFFO0FBQTdCLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBVyxTQUFLLEVBQUdDLElBQUQsSUFBVWQsUUFBUSxDQUFDLENBQUMsR0FBR0QsS0FBSixFQUFXZSxJQUFYLENBQUQsQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dmLEtBQUssQ0FBQ1MsR0FBTixDQUFXTSxJQUFELElBQVU7QUFDbkIsV0FDRSxNQUFDLCtEQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNYLEVBRFo7QUFFRSxRQUFFLEVBQUVXLElBQUksQ0FBQ1gsRUFGWDtBQUdFLFlBQU0sRUFBRVcsSUFBSSxDQUFDVCxNQUhmO0FBSUUsV0FBSyxFQUFFUyxJQUFJLENBQUNWLEtBSmQ7QUFLRSxnQkFBVSxFQUFFVSxJQUFJLElBQUlaLFVBQVUsQ0FBQ1ksSUFBRCxDQUxoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUdBLElBQUksQ0FBQ1YsS0FOUixDQURGO0FBVUQsR0FYQSxDQURILENBRkYsQ0FURixDQURGO0FBNkJEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRhc2tMaXN0IGZyb20gJ2NvbXBvbmVudHMvVGFza0xpc3QnXG5pbXBvcnQgVGFza0xpc3RJdGVtIGZyb20gJ2NvbXBvbmVudHMvVGFza0xpc3RJdGVtJ1xuaW1wb3J0IFRhc2tJbnB1dCBmcm9tICdjb21wb25lbnRzL1Rhc2tJbnB1dCdcbmltcG9ydCB7IHVzZVBlcnNpc3RlZFN0YXRlIH0gZnJvbSAnLi4vaG9va3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlUGVyc2lzdGVkU3RhdGUoJ3Rhc2tzJywgW10pXG5cbiAgY29uc3QgdXBkYXRlVGFzayA9ICh7IGlkLCB0aXRsZSwgc3RhdHVzIH0pID0+IHtcblxuICAgIGNvbnN0IGVkaXRlZFRhc2sgPSB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgc3RhdHVzLFxuICAgIH1cblxuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGFza3MubWFwKGl0ZW0gPT4gaXRlbS5pZCA9PT0gZWRpdGVkVGFzay5pZCA/IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIGVkaXRlZFRhc2spIDogT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpO1xuXG4gICAgc2V0VGFza3MobmV3VGFza3MpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VG9kbyBUYXNrIFdlYiBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCw0MDBpdGFsaWN8Um9ib3RvK01vbm86NDAwLDUwMHxNYXRlcmlhbCtJY29ucydcbiAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBzdHlsZT17eyBtYXhXaWR0aDogJzk2NnB4JywgbWFyZ2luOiAnYXV0bycgfX0+XG4gICAgICAgIDxUYXNrSW5wdXQgb25BZGQ9eyh0YXNrKSA9PiBzZXRUYXNrcyhbLi4udGFza3MsIHRhc2tdKX0gLz5cbiAgICAgICAgPFRhc2tMaXN0PlxuICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUYXNrTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e3Rhc2suaWR9XG4gICAgICAgICAgICAgICAgaWQ9e3Rhc2suaWR9XG4gICAgICAgICAgICAgICAgc3RhdHVzPXt0YXNrLnN0YXR1c31cbiAgICAgICAgICAgICAgICB0aXRsZT17dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgICB1cGRhdGVUYXNrPXt0YXNrID0+IHVwZGF0ZVRhc2sodGFzayl9PlxuICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICA8L1Rhc2tMaXN0SXRlbT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UYXNrTGlzdD5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2RpdiA+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/trongnghiadieppham/Downloads/react-test/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCI/MDE0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9JY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Icon\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });