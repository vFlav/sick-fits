webpackHotUpdate("static/development/pages/permissions.js",{

/***/ "./components/Permissions.js":
/*!***********************************!*\
  !*** ./components/Permissions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _queries_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/queries */ "./queries/queries.js");
/* harmony import */ var _styles_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Table */ "./components/styles/Table.js");
var _jsxFileName = "/Users/FlaviuVadan/Documents/Git/sick-fits/frontend/components/Permissions.js";





var PERMISSIONS = ['ADMIN', '', ''];

var Permissions = function Permissions(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _queries_queries__WEBPACK_IMPORTED_MODULE_3__["ALL_USERS_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;

    if (error) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
    } else if (loading) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Loading...");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Email"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, data.users.map(function (user) {
      return user.name;
    }), ";"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Permissions);

/***/ })

})
//# sourceMappingURL=permissions.js.b523221fe5b0b68d0889.hot-update.js.map