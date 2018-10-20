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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/Cart.js":
/*!*********************************!*\
  !*** ./components/Cart/Cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hocs/defaultPage */ "./hocs/defaultPage.js");
/* harmony import */ var _Context_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/AppProvider */ "./components/Context/AppProvider.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v1 */ "uuid/v1");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Cart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart(props) {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this, props));
  }

  _createClass(Cart, [{
    key: "addItem",
    value: function addItem(item) {
      this.props.context.addItem(item);
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this.props.context.removeItem(item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var items = this.props.context.items;
      var isAuthenticated = this.props.isAuthenticated;
      console.log(isAuthenticated);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3176042969"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
        style: {
          padding: "10px 5px"
        },
        className: "cart"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardTitle"], {
        style: {
          margin: 10
        }
      }, "Your Order:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-3176042969"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
        style: {
          padding: 10
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: 6
        },
        className: "jsx-3176042969"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-3176042969"
      }, "Items:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3176042969"
      }, items ? items.map(function (item) {
        if (item.quantity > 0) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            style: {
              marginBottom: 15
            },
            key: uuid_v1__WEBPACK_IMPORTED_MODULE_8___default()(),
            className: "jsx-3176042969" + " " + "items-one"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-3176042969"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            id: "item-price",
            className: "jsx-3176042969"
          }, "\xA0 $", item.price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            id: "item-name",
            className: "jsx-3176042969"
          }, "\xA0 ", item.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-3176042969"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 5,
              marginLeft: 10
            },
            onClick: _this.addItem.bind(_this, item),
            color: "link"
          }, "+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 10
            },
            onClick: _this.removeItem.bind(_this, item),
            color: "link"
          }, "-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity",
            className: "jsx-3176042969"
          }, item.quantity, "x")));
        }
      }) : null, this.props.isAuthenticated ? items.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3176042969"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Badge"], {
        style: {
          width: 200,
          padding: 10
        },
        color: "light"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        style: {
          fontWeight: 100,
          color: "gray"
        },
        className: "jsx-3176042969"
      }, "Total:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-3176042969"
      }, "$", this.props.context.total)), this.props.router.pathname != "/checkout" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: 10,
          marginRight: 10
        },
        className: "jsx-3176042969"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/checkout"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        style: {
          width: "100%"
        },
        color: "primary"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3176042969"
      }, "Order")))) : null) : null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-3176042969"
      }, "Login to Order")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3176042969",
        css: "#item-price.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3176042969{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1JlYWN0Tm9kZS9zdHJhcGktbmV4dC9jb21wb25lbnRzL0NhcnQvQ2FydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SG9CLEFBRzZCLEFBSUMsQUFLRCxnQkFSVSxBQVNBLENBTFAsbUJBQ1UsR0FKL0IsQUFTQSx1QkFKQSIsImZpbGUiOiIvVXNlcnMvcnlhbi9SZWFjdE5vZGUvc3RyYXBpLW5leHQvY29tcG9uZW50cy9DYXJ0L0NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGVmYXVsdFBhZ2UgZnJvbSBcIi4uLy4uL2hvY3MvZGVmYXVsdFBhZ2VcIjtcbmltcG9ydCB7IHdpdGhDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHQvQXBwUHJvdmlkZXJcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVjb21wb3NlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkU3VidGl0bGUsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIEJhZGdlXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgdXVpZHYxIGZyb20gXCJ1dWlkL3YxXCI7XG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbSkge1xuICAgIHRoaXMucHJvcHMuY29udGV4dC5hZGRJdGVtKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtKSB7XG4gICAgdGhpcy5wcm9wcy5jb250ZXh0LnJlbW92ZUl0ZW0oaXRlbSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKGlzQXV0aGVudGljYXRlZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDYXJkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweCA1cHhcIiB9fSBjbGFzc05hbWU9XCJjYXJ0XCI+XG4gICAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17eyBtYXJnaW46IDEwIH19PllvdXIgT3JkZXI6PC9DYXJkVGl0bGU+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDYgfX0+XG4gICAgICAgICAgICAgIDxzbWFsbD5JdGVtczo8L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7aXRlbXNcbiAgICAgICAgICAgICAgICA/IGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2MSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiZuYnNwOyAke2l0ZW0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+Jm5ic3A7IHtpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkSXRlbS5iaW5kKHRoaXMsIGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzLCBpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX14XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc0F1dGhlbnRpY2F0ZWQgPyAoXG4gICAgICAgICAgICAgICAgaXRlbXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBzdHlsZT17eyB3aWR0aDogMjAwLCBwYWRkaW5nOiAxMCB9fSBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCwgY29sb3I6IFwiZ3JheVwiIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPiR7dGhpcy5wcm9wcy5jb250ZXh0LnRvdGFsfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJvdXRlci5wYXRobmFtZSAhPSBcIi9jaGVja291dFwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxoNT5Mb2dpbiB0byBPcmRlcjwvaDU+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjaXRlbS1wcmljZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaXRlbS1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICBjb2xvcjogcmdiYSg5NywgOTcsIDk3LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhDb250ZXh0LFxuICBkZWZhdWx0UGFnZSxcbiAgd2l0aFJvdXRlclxuKShDYXJ0KTtcbiJdfQ== */\n/*@ sourceURL=/Users/ryan/ReactNode/strapi-next/components/Cart/Cart.js */"
      }));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(_Context_AppProvider__WEBPACK_IMPORTED_MODULE_3__["withContext"], _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_2__["default"], next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Cart));

/***/ }),

/***/ "./components/Checkout/CardSection.js":
/*!********************************************!*\
  !*** ./components/Checkout/CardSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stripe-elements */ "react-stripe-elements");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CardSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardSection, _React$Component);

  function CardSection() {
    _classCallCheck(this, CardSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardSection).apply(this, arguments));
  }

  _createClass(CardSection, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1506920519"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1506920519"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "card-element",
        className: "jsx-1506920519"
      }, "Credit or debit card"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1506920519"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
        style: {
          border: "none"
        },
        className: "jsx-1506920519"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1506920519" + " " + "form-row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "card-element",
        style: {
          width: "100%"
        },
        className: "jsx-1506920519"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__["CardElement"], {
        style: {
          width: "100%",
          base: {
            fontSize: "18px"
          }
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1506920519"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1506920519" + " " + "order-button-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.props.submitOrder,
        className: "jsx-1506920519"
      }, "Confirm order")), this.props.stripeError ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1506920519"
      }, this.props.stripeError.toString()) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "card-errors",
        role: "alert",
        className: "jsx-1506920519"
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1506920519",
        css: ".order-button-wrapper.jsx-1506920519{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1JlYWN0Tm9kZS9zdHJhcGktbmV4dC9jb21wb25lbnRzL0NoZWNrb3V0L0NhcmRTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DVyxBQUc0QiwwRUFDRixXQUNVLHFHQUNJLGlHQUMzQiIsImZpbGUiOiIvVXNlcnMvcnlhbi9SZWFjdE5vZGUvc3RyYXBpLW5leHQvY29tcG9uZW50cy9DaGVja291dC9DYXJkU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FyZEVsZW1lbnQsIENhcmROdW1iZXJFbGVtZW50IH0gZnJvbSBcInJlYWN0LXN0cmlwZS1lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5qZWN0U3RyaXBlIH0gZnJvbSBcInJlYWN0LXN0cmlwZS1lbGVtZW50c1wiO1xuXG5jbGFzcyBDYXJkU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhcmQtZWxlbWVudFwiPkNyZWRpdCBvciBkZWJpdCBjYXJkPC9sYWJlbD5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZmllbGRzZXQgc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkLWVsZW1lbnRcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBiYXNlOiB7IGZvbnRTaXplOiBcIjE4cHhcIiB9IH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdWJtaXRPcmRlcn0+XG4gICAgICAgICAgICAgICAgICAgIENvbmZpcm0gb3JkZXJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0cmlwZUVycm9yID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5wcm9wcy5zdHJpcGVFcnJvci50b1N0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkLWVycm9yc1wiIHJvbGU9XCJhbGVydFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5vcmRlci1idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGluamVjdFN0cmlwZShDYXJkU2VjdGlvbik7XG4iXX0= */\n/*@ sourceURL=/Users/ryan/ReactNode/strapi-next/components/Checkout/CardSection.js */"
      }));
    }
  }]);

  return CardSection;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_stripe_elements__WEBPACK_IMPORTED_MODULE_2__["injectStripe"])(CardSection));

/***/ }),

/***/ "./components/Checkout/CheckoutForm.js":
/*!*********************************************!*\
  !*** ./components/Checkout/CheckoutForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardSection */ "./components/Checkout/CardSection.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stripe-elements */ "react-stripe-elements");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "strapi-sdk-javascript/build/main");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var apiUrl = process.env.API_URL || "http://localhost:1337";
var strapi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5___default.a(apiUrl);

var CheckoutForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckoutForm, _React$Component);

  function CheckoutForm(props) {
    var _this;

    _classCallCheck(this, CheckoutForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckoutForm).call(this, props));
    _this.state = {
      data: {
        address: "",
        city: "",
        state: "",
        stripe_id: ""
      },
      error: ""
    };
    _this.submitOrder = _this.submitOrder.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CheckoutForm, [{
    key: "onChange",
    value: function onChange(propertyName, e) {
      var data = this.state.data;
      data[propertyName] = e.target.value;
      this.setState({
        data: data
      });
    }
  }, {
    key: "submitOrder",
    value: function submitOrder() {
      var context = this.props.context;
      var data = this.state.data;
      console.log(context);
      this.props.stripe.createToken().then(function (res) {
        strapi.createEntry("orders", {
          amount: context.total,
          dishes: context.items,
          address: data.address,
          city: data.city,
          state: data.state,
          stripe_id: data.stripe_id,
          token: res.token.id
        }).then(next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/"));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1334613522" + " " + "paper"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        className: "jsx-1334613522"
      }, "Your information:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "jsx-1334613522"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        style: {
          display: "flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          flex: "0.90",
          marginRight: 10
        },
        className: "jsx-1334613522"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], null, "Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        onChange: this.onChange.bind(this, "address")
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        style: {
          display: "flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          flex: "0.65",
          marginRight: "6%"
        },
        className: "jsx-1334613522"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], null, "City"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        onChange: this.onChange.bind(this, "city")
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          flex: "0.25",
          marginRight: 0
        },
        className: "jsx-1334613522"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], null, "State"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        onChange: this.onChange.bind(this, "state")
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CardSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
        context: this.props.context,
        data: this.state.data,
        submitOrder: this.submitOrder
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1334613522",
        css: ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fafafa;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1JlYWN0Tm9kZS9zdHJhcGktbmV4dC9jb21wb25lbnRzL0NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRlcsQUFHMEMsQUFXbEIsQUFHYSxBQUtHLEFBTVgsQUFTQSxBQU9BLEFBTUssQUF1QkEsQUFNUixBQVVHLEFBZUEsQUFNd0IsQUFPNUIsVUFDWixDQXRDaUIsR0FuREMsQUFTQSxBQU9BLEFBNkNLLEFBZXZCLEtBdERXLEFBdUJXLEdBeER0QixHQUtpQixDQTBEVSxDQTNFYSxDQThDNUIsRUF0Qk8sQUFTSyxBQU9DLEtBNkNQLEdBdENLLENBdEN2QixBQTREa0MsQ0FuRHlCLE9BTzFDLElBbURZLEFBVVQsQ0FwREosT0FjRixHQXRCRSxJQVNoQixHQW9EZ0IsRUF0Q0csQUFxQm5CLEtBM0NZLE1BOEV3QixDQWpCTyxHQTVEM0MsRUFzQmlCLE1BL0JqQixTQWlDaUMsYUFzREwsT0FoQlksZ0JBekZ6QixBQXdDZixLQXFDaUMsUUE1RWxCLGFBQ00sT0FrRFIsSUFzRGIsT0FyRG9CLENBbERBLGlCQW1ESCxDQWxEQyxFQXNGUCxTQVpYLEFBYVksR0FwQ00sRUFsRGxCLEtBdUZvQixTQXBDTyxTQXFDUixnQkFwQ00sQ0FxQ3pCLDRHQXBDMkIseUJBQ0osa0RBQ2Esa0NBQ1IsNERBQ1YsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9yeWFuL1JlYWN0Tm9kZS9zdHJhcGktbmV4dC9jb21wb25lbnRzL0NoZWNrb3V0L0NoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENhcmRTZWN0aW9uIGZyb20gXCIuL0NhcmRTZWN0aW9uXCI7XG5cbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBGb3JtVGV4dCwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgaW5qZWN0U3RyaXBlIH0gZnJvbSBcInJlYWN0LXN0cmlwZS1lbGVtZW50c1wiO1xuaW1wb3J0IFN0cmFwaSBmcm9tIFwic3RyYXBpLXNkay1qYXZhc2NyaXB0L2J1aWxkL21haW5cIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcbmNvbnN0IHN0cmFwaSA9IG5ldyBTdHJhcGkoYXBpVXJsKTtcblxuY2xhc3MgQ2hlY2tvdXRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgYWRkcmVzczogXCJcIixcbiAgICAgICAgY2l0eTogXCJcIixcbiAgICAgICAgc3RhdGU6IFwiXCIsXG4gICAgICAgIHN0cmlwZV9pZDogXCJcIlxuICAgICAgfSxcbiAgICAgIGVycm9yOiBcIlwiXG4gICAgfTtcbiAgICB0aGlzLnN1Ym1pdE9yZGVyID0gdGhpcy5zdWJtaXRPcmRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2UocHJvcGVydHlOYW1lLCBlKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGRhdGFbcHJvcGVydHlOYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICB9XG5cbiAgc3VibWl0T3JkZXIoKSB7XG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICB0aGlzLnByb3BzLnN0cmlwZS5jcmVhdGVUb2tlbigpLnRoZW4ocmVzID0+IHtcbiAgICAgIHN0cmFwaVxuICAgICAgICAuY3JlYXRlRW50cnkoXCJvcmRlcnNcIiwge1xuICAgICAgICAgIGFtb3VudDogY29udGV4dC50b3RhbCxcbiAgICAgICAgICBkaXNoZXM6IGNvbnRleHQuaXRlbXMsXG4gICAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICAgIGNpdHk6IGRhdGEuY2l0eSxcbiAgICAgICAgICBzdGF0ZTogZGF0YS5zdGF0ZSxcbiAgICAgICAgICBzdHJpcGVfaWQ6IGRhdGEuc3RyaXBlX2lkLFxuICAgICAgICAgIHRva2VuOiByZXMudG9rZW4uaWRcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oUm91dGVyLnB1c2goXCIvXCIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgICAgICA8aDU+WW91ciBpbmZvcm1hdGlvbjo8L2g1PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC45MFwiLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzLCBcImFkZHJlc3NcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjY1XCIsIG1hcmdpblJpZ2h0OiBcIjYlXCIgfX0+XG4gICAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzLCBcImNpdHlcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgXCJzdGF0ZVwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPENhcmRTZWN0aW9uXG4gICAgICAgICAgY29udGV4dD17dGhpcy5wcm9wcy5jb250ZXh0fVxuICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICBzdWJtaXRPcmRlcj17dGhpcy5zdWJtaXRPcmRlcn1cbiAgICAgICAgLz5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0taGFsZiB7XG4gICAgICAgICAgICAgIGZsZXg6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzIzMjVkO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLkNoZWNrb3V0IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoNTAsIDUwLCA5MywgMC4xMSksXG4gICAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNlNmViZjE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzk1Zjg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXG4gICAgICAgICAgICAgICAgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgLlN0cmlwZUVsZW1lbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTQ5MDIpIDBweCAxcHggM3B4LFxuICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4wMTk2MDc4KSAwcHggMXB4IDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2FhYjdjNDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMsXG4gICAgICAgICAgICAuU3RyaXBlRWxlbWVudC0tZm9jdXMge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTA5ODA0KSAwcHggNHB4IDZweCxcbiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxNCkgMHB4IDFweCAzcHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuU3RyaXBlRWxlbWVudC5JZGVhbEJhbmtFbGVtZW50LFxuICAgICAgICAgICAgLlN0cmlwZUVsZW1lbnQuUGF5bWVudFJlcXVlc3RCdXR0b24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBpbmplY3RTdHJpcGUoQ2hlY2tvdXRGb3JtKTtcbiJdfQ== */\n/*@ sourceURL=/Users/ryan/ReactNode/strapi-next/components/Checkout/CheckoutForm.js */"
      }));
    }
  }]);

  return CheckoutForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_stripe_elements__WEBPACK_IMPORTED_MODULE_4__["injectStripe"])(CheckoutForm));

/***/ }),

/***/ "./components/Context/AppProvider.js":
/*!*******************************************!*\
  !*** ./components/Context/AppProvider.js ***!
  \*******************************************/
/*! exports provided: withContext, default, AppConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConsumer", function() { return AppConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* First we will make a new context */

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* Then create a provider Component */

var AppProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppProvider, _React$Component);

  function AppProvider(props) {
    var _this;

    _classCallCheck(this, AppProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppProvider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addItem", function (item) {
      var items = _this.state.items; //check for item already in cart
      //if not in cart, add item if item is found increase quanity ++

      var newItem = items.find(function (i) {
        return i._id === item._id;
      });

      if (!newItem) {
        //set quantity property to 1
        item.quantity = 1;

        _this.setState({
          items: _this.state.items.concat(item),
          total: _this.state.total + item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("cart", _this.state.items);
        });
      } else {
        _this.setState({
          items: _this.state.items.map(function (item) {
            return item._id === newItem._id ? Object.assign({}, item, {
              quantity: item.quantity + 1
            }) : item;
          }),
          total: _this.state.total + item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("cart", _this.state.items);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeItem", function (item) {
      var items = _this.state.items; //check for item already in cart
      //if not in cart, add item if item is found increase quanity ++

      var newItem = items.find(function (i) {
        return i._id === item._id;
      });

      if (newItem.quantity > 1) {
        _this.setState({
          items: _this.state.items.map(function (item) {
            return item._id === newItem._id ? Object.assign({}, item, {
              quantity: item.quantity - 1
            }) : item;
          }),
          total: _this.state.total - item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("cart", _this.state.items);
        });
      } else {
        var _items = _toConsumableArray(_this.state.items);

        var index = _items.findIndex(function (i) {
          return i._id === newItem._id;
        });

        _items.splice(index, 1);

        _this.setState({
          items: _items,
          total: _this.state.total - item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("cart", _this.state.items);
        });
      }
    });

    _this.state = {
      items: [],
      total: null
    };
    return _this;
  }

  _createClass(AppProvider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppContext.Provider, {
        value: {
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem,
          total: this.state.total
        }
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* then make a consumer which will surface it as an HOC */
// This function takes a component...


function withContext(Component) {
  // ...and returns another component...
  return function ContextComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppContext.Consumer, null, function (context) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
        context: context
      }));
    });
  };
}
/* harmony default export */ __webpack_exports__["default"] = (AppProvider);


/***/ }),

/***/ "./hocs/defaultPage.js":
/*!*****************************!*\
  !*** ./hocs/defaultPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* components/hocs/defaultPage.js */



/* harmony default export */ __webpack_exports__["default"] = (function (Page) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(DefaultPage, _React$Component);

      function DefaultPage() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, DefaultPage);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DefaultPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logout", function (eve) {
          if (eve.key === "logout") {
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/?logout=".concat(eve.newValue));
          }
        });

        return _this;
      }

      _createClass(DefaultPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener("storage", this.logout, false);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("storage", this.logout, false);
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Page, this.props);
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
            var req, loggedUser, pageProps, path;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = _ref.req;
                    loggedUser = process.browser ? Object(_lib_auth__WEBPACK_IMPORTED_MODULE_3__["getUserFromLocalCookie"])() : Object(_lib_auth__WEBPACK_IMPORTED_MODULE_3__["getUserFromServerCookie"])(req);
                    pageProps = Page.getInitialProps && Page.getInitialProps(req);
                    console.log("is authenticated");
                    console.log(loggedUser);
                    path = req ? req.pathname : "";
                    path = "";
                    return _context.abrupt("return", _objectSpread({}, pageProps, {
                      loggedUser: loggedUser,
                      currentUrl: path,
                      isAuthenticated: !!loggedUser
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return DefaultPage;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: strapiRegister, strapiLogin, setToken, unsetToken, getUserFromServerCookie, getUserFromLocalCookie, extractInfoFromHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strapiRegister", function() { return strapiRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strapiLogin", function() { return strapiLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetToken", function() { return unsetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromServerCookie", function() { return getUserFromServerCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromLocalCookie", function() { return getUserFromLocalCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractInfoFromHash", function() { return extractInfoFromHash; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "strapi-sdk-javascript/build/main");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




var apiUrl = process.env.API_URL || "http://localhost:1337";
var strapi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2___default.a(apiUrl);
var strapiRegister = function strapiRegister(username, email, password) {
  if (!process.browser) {
    return undefined;
  }

  strapi.register(username, email, password).then(function (res) {
    setToken(res);
  });
  return Promise.resolve();
}; //use strapi to get a JWT and token object, save
//to approriate cookei for future requests

var strapiLogin = function strapiLogin(email, password) {
  if (!process.browser) {
    return;
  } // Get a token


  strapi.login(email, password).then(function (res) {
    setToken(res);
  });
  return Promise.resolve();
};
var setToken = function setToken(token) {
  if (!process.browser) {
    return;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("username", token.user.username);
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("jwt", token.jwt);

  if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("username")) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
  }
};
var unsetToken = function unsetToken() {
  if (!process.browser) {
    return;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("jwt");
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("username");
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("cart"); // to support logging out from all windows

  window.localStorage.setItem("logout", Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
};
var getUserFromServerCookie = function getUserFromServerCookie(req) {
  if (!req.headers.cookie || "") {
    return undefined;
  }

  var username = req.headers.cookie.split(";").find(function (user) {
    return user.trim().startsWith("username=");
  });

  if (username) {
    username = username.split("=")[1];
  }

  var jwtCookie = req.headers.cookie.split(";").find(function (c) {
    return c.trim().startsWith("jwt=");
  });

  if (!jwtCookie) {
    return undefined;
  }

  var jwt = jwtCookie.split("=")[1];
  return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(jwt), username;
};
var getUserFromLocalCookie = function getUserFromLocalCookie() {
  return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("username");
}; //these will be used if you expand to a provider such as Auth0

var getQueryParams = function getQueryParams() {
  var params = {};
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
    params[$1] = $3;
  });
  return params;
};

var extractInfoFromHash = function extractInfoFromHash() {
  if (!process.browser) {
    return undefined;
  }

  var _getQueryParams = getQueryParams(),
      id_token = _getQueryParams.id_token,
      state = _getQueryParams.state;

  return {
    token: id_token,
    secret: state
  };
};

/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hocs/defaultPage */ "./hocs/defaultPage.js");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart/Cart */ "./components/Cart/Cart.js");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stripe-elements */ "react-stripe-elements");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Checkout/CheckoutForm */ "./components/Checkout/CheckoutForm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Context_AppProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Context/AppProvider */ "./components/Context/AppProvider.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Checkout =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout(props) {
    var _this;

    _classCallCheck(this, Checkout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkout).call(this, props));
    _this.state = {
      items: {},
      stripe: null
    };
    return _this;
  }

  _createClass(Checkout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Create Stripe instance in componentDidMount
      // (componentDidMount only fires in browser/DOM environment)
      var context = this.props.context;
      var isAuthenticated = this.props.isAuthenticated;

      if (context.items.length === 0 || !isAuthenticated) {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/");
      }

      this.setState({
        stripe: window.Stripe("pk_test_5yOGF65rhzZjobGYiOoYJoj0")
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isAuthenticated = this.props.isAuthenticated;
      var context = this.props.context;

      if (context.items.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Loading");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          style: {
            paddingRight: 0
          },
          sm: {
            size: 3,
            order: 1,
            offset: 2
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          style: {
            margin: 20
          }
        }, "Checkout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
          isAuthenticated: isAuthenticated
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          style: {
            paddingLeft: 5
          },
          sm: {
            size: 6,
            order: 2
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_3__["StripeProvider"], {
          stripe: this.state.stripe
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_elements__WEBPACK_IMPORTED_MODULE_3__["Elements"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
          context: this.props.context
        })))));
      }
    }
  }]);

  return Checkout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(_hocs_defaultPage__WEBPACK_IMPORTED_MODULE_1__["default"], _components_Context_AppProvider__WEBPACK_IMPORTED_MODULE_6__["withContext"])(Checkout));

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/checkout.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/checkout.js */"./pages/checkout.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-stripe-elements":
/*!****************************************!*\
  !*** external "react-stripe-elements" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stripe-elements");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "strapi-sdk-javascript/build/main":
/*!***************************************************!*\
  !*** external "strapi-sdk-javascript/build/main" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("strapi-sdk-javascript/build/main");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=checkout.js.map