"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\Trex\\\\Desktop\\\\react-next-testimonials\\\\components\\\\Card\\\\index.js\",\n    _this = undefined;\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var _ref$username = _ref.username,\n      username = _ref$username === void 0 ? 'username' : _ref$username,\n      userImage = _ref.userImage,\n      verifiedGraduate = _ref.verifiedGraduate,\n      _ref$userMessage = _ref.userMessage,\n      userMessage = _ref$userMessage === void 0 ? 'mesage' : _ref$userMessage,\n      _ref$userQuote = _ref.userQuote,\n      userQuote = _ref$userQuote === void 0 ? 'quote' : _ref$userQuote,\n      backgroundColor = _ref.backgroundColor;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CardContentContainer, {\n    color: backgroundColor,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoContainer, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserImage, {\n        src: userImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserDescription, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserName, {\n          children: username\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 21\n        }, _this), verifiedGraduate ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(VerifiedGraduate, {\n          children: \"Verified Graduate\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 39\n        }, _this) : '']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserMessageContainer, {\n      children: userMessage\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserQuoteContainer, {\n      children: userQuote\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Card;\nvar CardContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Card__CardContentContainer\",\n  componentId: \"sc-14xvj6j-0\"\n})([\"padding:30px;background-color:white;border-radius:15px;background-color:\", \";\"], function (props) {\n  return props.color;\n});\n_c2 = CardContentContainer;\nvar UserInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Card__UserInfoContainer\",\n  componentId: \"sc-14xvj6j-1\"\n})([\"display:flex;\"]);\n_c3 = UserInfoContainer;\nvar UserImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.withConfig({\n  displayName: \"Card__UserImage\",\n  componentId: \"sc-14xvj6j-2\"\n})([\"border-radius:50%;\"]);\n_c4 = UserImage;\nvar UserDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Card__UserDescription\",\n  componentId: \"sc-14xvj6j-3\"\n})([\"padding-left:10px;display:flex;align-items:center;\"]);\n_c5 = UserDescription;\nvar UserName = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Card__UserName\",\n  componentId: \"sc-14xvj6j-4\"\n})([\"\"]);\n_c6 = UserName;\nvar VerifiedGraduate = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Card__VerifiedGraduate\",\n  componentId: \"sc-14xvj6j-5\"\n})([\"\"]);\n_c7 = VerifiedGraduate;\nvar UserMessageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Card__UserMessageContainer\",\n  componentId: \"sc-14xvj6j-6\"\n})([\"\"]);\n_c8 = UserMessageContainer;\nvar UserQuoteContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"Card__UserQuoteContainer\",\n  componentId: \"sc-14xvj6j-7\"\n})([\"\"]);\n_c9 = UserQuoteContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"CardContentContainer\");\n$RefreshReg$(_c3, \"UserInfoContainer\");\n$RefreshReg$(_c4, \"UserImage\");\n$RefreshReg$(_c5, \"UserDescription\");\n$RefreshReg$(_c6, \"UserName\");\n$RefreshReg$(_c7, \"VerifiedGraduate\");\n$RefreshReg$(_c8, \"UserMessageContainer\");\n$RefreshReg$(_c9, \"UserQuoteContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRHO0FBQUEsMkJBQTFHQyxRQUEwRztBQUFBLE1BQTFHQSxRQUEwRyw4QkFBakcsVUFBaUc7QUFBQSxNQUF0RkMsU0FBc0YsUUFBdEZBLFNBQXNGO0FBQUEsTUFBNUVDLGdCQUE0RSxRQUE1RUEsZ0JBQTRFO0FBQUEsOEJBQTNEQyxXQUEyRDtBQUFBLE1BQTNEQSxXQUEyRCxpQ0FBL0MsUUFBK0M7QUFBQSw0QkFBdENDLFNBQXNDO0FBQUEsTUFBdENBLFNBQXNDLCtCQUE1QixPQUE0QjtBQUFBLE1BQXBCQyxlQUFvQixRQUFwQkEsZUFBb0I7QUFDckgsc0JBQ0ksOERBQUMsb0JBQUQ7QUFBc0IsU0FBSyxFQUFFQSxlQUE3QjtBQUFBLDRCQUNJLDhEQUFDLGlCQUFEO0FBQUEsOEJBQ0ksOERBQUMsU0FBRDtBQUFXLFdBQUcsRUFBRUo7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMsZUFBRDtBQUFBLGdDQUNJLDhEQUFDLFFBQUQ7QUFBQSxvQkFBV0Q7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUtFLGdCQUFnQixnQkFBQyw4REFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBRCxHQUF3RCxFQUY3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJLDhEQUFDLG9CQUFEO0FBQUEsZ0JBQ0tDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBV0ksOERBQUMsa0JBQUQ7QUFBQSxnQkFDS0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0FsQkQ7O0tBQU1MO0FBbUJOLElBQU1PLG9CQUFvQixHQUFDUix3RUFBRDtBQUFBO0FBQUE7QUFBQSxzRkFJRixVQUFBVSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FKSCxDQUExQjtNQUFNSDtBQU1OLElBQU1JLGlCQUFpQixHQUFDWix3RUFBRDtBQUFBO0FBQUE7QUFBQSxxQkFBdkI7TUFBTVk7QUFHTixJQUFNQyxTQUFTLEdBQUNiLHdFQUFEO0FBQUE7QUFBQTtBQUFBLDBCQUFmO01BQU1hO0FBR04sSUFBTUUsZUFBZSxHQUFDZix3RUFBRDtBQUFBO0FBQUE7QUFBQSwwREFBckI7TUFBTWU7QUFJTixJQUFNQyxRQUFRLEdBQUNoQix3RUFBRDtBQUFBO0FBQUE7QUFBQSxRQUFkO01BQU1nQjtBQUdOLElBQU1DLGdCQUFnQixHQUFDakIsd0VBQUQ7QUFBQTtBQUFBO0FBQUEsUUFBdEI7TUFBTWlCO0FBRU4sSUFBTUMsb0JBQW9CLEdBQUNsQix3RUFBRDtBQUFBO0FBQUE7QUFBQSxRQUExQjtNQUFNa0I7QUFDTixJQUFNQyxrQkFBa0IsR0FBQ25CLHdFQUFEO0FBQUE7QUFBQTtBQUFBLFFBQXhCO01BQU1tQjtBQUVOLCtEQUFlbEIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmQvaW5kZXguanM/YTVhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENhcmQgPSAoe3VzZXJuYW1lPSd1c2VybmFtZScsdXNlckltYWdlLHZlcmlmaWVkR3JhZHVhdGUsdXNlck1lc3NhZ2U9J21lc2FnZScsdXNlclF1b3RlPSdxdW90ZScsYmFja2dyb3VuZENvbG9yfSkgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkQ29udGVudENvbnRhaW5lciBjb2xvcj17YmFja2dyb3VuZENvbG9yfT5cclxuICAgICAgICAgICAgPFVzZXJJbmZvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJJbWFnZSBzcmM9e3VzZXJJbWFnZX0+PC9Vc2VySW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTmFtZT57dXNlcm5hbWV9PC9Vc2VyTmFtZT5cclxuICAgICAgICAgICAgICAgICAgICB7dmVyaWZpZWRHcmFkdWF0ZT88VmVyaWZpZWRHcmFkdWF0ZT5WZXJpZmllZCBHcmFkdWF0ZTwvVmVyaWZpZWRHcmFkdWF0ZT46Jyd9XHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPC9Vc2VySW5mb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFVzZXJNZXNzYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge3VzZXJNZXNzYWdlfVxyXG4gICAgICAgICAgICA8L1VzZXJNZXNzYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VXNlclF1b3RlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAge3VzZXJRdW90ZX1cclxuICAgICAgICAgICAgPC9Vc2VyUXVvdGVDb250YWluZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudENvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcbmNvbnN0IENhcmRDb250ZW50Q29udGFpbmVyPXN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciB9O1xyXG5gO1xyXG5jb25zdCBVc2VySW5mb0NvbnRhaW5lcj1zdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTpmbGV4O1xyXG5gO1xyXG5jb25zdCBVc2VySW1hZ2U9c3R5bGVkLmltZ2BcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG5gO1xyXG5jb25zdCBVc2VyRGVzY3JpcHRpb249c3R5bGVkLmRpdmBcclxucGFkZGluZy1sZWZ0OjEwcHg7XHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6Y2VudGVyO2A7XHJcbmNvbnN0IFVzZXJOYW1lPXN0eWxlZC5kaXZgXHJcblxyXG5gO1xyXG5jb25zdCBWZXJpZmllZEdyYWR1YXRlPXN0eWxlZC5kaXZgXHJcbmA7XHJcbmNvbnN0IFVzZXJNZXNzYWdlQ29udGFpbmVyPXN0eWxlZC5kaXZgYDtcclxuY29uc3QgVXNlclF1b3RlQ29udGFpbmVyPXN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQ2FyZCIsInVzZXJuYW1lIiwidXNlckltYWdlIiwidmVyaWZpZWRHcmFkdWF0ZSIsInVzZXJNZXNzYWdlIiwidXNlclF1b3RlIiwiYmFja2dyb3VuZENvbG9yIiwiQ2FyZENvbnRlbnRDb250YWluZXIiLCJkaXYiLCJwcm9wcyIsImNvbG9yIiwiVXNlckluZm9Db250YWluZXIiLCJVc2VySW1hZ2UiLCJpbWciLCJVc2VyRGVzY3JpcHRpb24iLCJVc2VyTmFtZSIsIlZlcmlmaWVkR3JhZHVhdGUiLCJVc2VyTWVzc2FnZUNvbnRhaW5lciIsIlVzZXJRdW90ZUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Card/index.js\n");

/***/ })

});