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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return strapiRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strapiLogin; });
/* unused harmony export setToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unsetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserFromServerCookie; });
/* unused harmony export getUserFromLocalCookie */
/* unused harmony export extractInfoFromHash */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




var apiUrl = process.env.API_URL || "http://localhost:1337";
var strapi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_2___default.a(apiUrl);
var strapiRegister = function strapiRegister(username, email, password) {
  if (true) {
    return undefined;
  }

  strapi.register(username, email, password).then(function (res) {
    setToken(res);
  });
  return Promise.resolve();
}; //use strapi to get a JWT and token object, save
//to approriate cookei for future requests

var strapiLogin = function strapiLogin(email, password) {
  if (true) {
    return;
  } // Get a token


  strapi.login(email, password).then(function (res) {
    setToken(res);
  });
  return Promise.resolve();
};
var setToken = function setToken(token) {
  if (true) {
    return;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("username", token.user.username);
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("jwt", token.jwt);

  if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("username")) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
  }
};
var unsetToken = function unsetToken() {
  if (true) {
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
  if (true) {
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("strapi-sdk-javascript/build/main");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);


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



/* harmony default export */ __webpack_exports__["a"] = (function (Page) {
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
                    loggedUser =  false ? undefined : Object(_lib_auth__WEBPACK_IMPORTED_MODULE_3__[/* getUserFromServerCookie */ "a"])(req);
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withContext; });
/* unused harmony export AppConsumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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
/* harmony default export */ __webpack_exports__["a"] = (AppProvider);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-elements");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _Context_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
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
        css: ["#item-price.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}", "#item-quantity.jsx-3176042969{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}", "#item-name.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}"]
      }));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(_Context_AppProvider__WEBPACK_IMPORTED_MODULE_3__[/* withContext */ "b"], _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Cart));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./hocs/defaultPage.js
var defaultPage = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Cart/Cart.js
var Cart = __webpack_require__(14);

// EXTERNAL MODULE: external "react-stripe-elements"
var external_react_stripe_elements_ = __webpack_require__(13);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(5);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/Checkout/CardSection.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CardSection_CardSection =
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
      return external_react_default.a.createElement("div", {
        className: "jsx-1506920519"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1506920519"
      }, external_react_default.a.createElement("label", {
        htmlFor: "card-element",
        className: "jsx-1506920519"
      }, "Credit or debit card"), external_react_default.a.createElement("div", {
        className: "jsx-1506920519"
      }, external_react_default.a.createElement("fieldset", {
        style: {
          border: "none"
        },
        className: "jsx-1506920519"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1506920519" + " " + "form-row"
      }, external_react_default.a.createElement("div", {
        id: "card-element",
        style: {
          width: "100%"
        },
        className: "jsx-1506920519"
      }, external_react_default.a.createElement(external_react_stripe_elements_["CardElement"], {
        style: {
          width: "100%",
          base: {
            fontSize: "18px"
          }
        }
      })), external_react_default.a.createElement("br", {
        className: "jsx-1506920519"
      }), external_react_default.a.createElement("div", {
        className: "jsx-1506920519" + " " + "order-button-wrapper"
      }, external_react_default.a.createElement("button", {
        onClick: this.props.submitOrder,
        className: "jsx-1506920519"
      }, "Confirm order")), this.props.stripeError ? external_react_default.a.createElement("div", {
        className: "jsx-1506920519"
      }, this.props.stripeError.toString()) : null, external_react_default.a.createElement("div", {
        id: "card-errors",
        role: "alert",
        className: "jsx-1506920519"
      }))))), external_react_default.a.createElement(style_default.a, {
        styleId: "1506920519",
        css: [".order-button-wrapper.jsx-1506920519{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}"]
      }));
    }
  }]);

  return CardSection;
}(external_react_default.a.Component);

/* harmony default export */ var Checkout_CardSection = (Object(external_react_stripe_elements_["injectStripe"])(CardSection_CardSection));
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(1);

// EXTERNAL MODULE: external "strapi-sdk-javascript/build/main"
var main_ = __webpack_require__(7);
var main_default = /*#__PURE__*/__webpack_require__.n(main_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/Checkout/CheckoutForm.js


function CheckoutForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CheckoutForm_typeof = function _typeof(obj) { return typeof obj; }; } else { CheckoutForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CheckoutForm_typeof(obj); }

function CheckoutForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CheckoutForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CheckoutForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) CheckoutForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) CheckoutForm_defineProperties(Constructor, staticProps); return Constructor; }

function CheckoutForm_possibleConstructorReturn(self, call) { if (call && (CheckoutForm_typeof(call) === "object" || typeof call === "function")) { return call; } return CheckoutForm_assertThisInitialized(self); }

function CheckoutForm_getPrototypeOf(o) { CheckoutForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CheckoutForm_getPrototypeOf(o); }

function CheckoutForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CheckoutForm_setPrototypeOf(subClass, superClass); }

function CheckoutForm_setPrototypeOf(o, p) { CheckoutForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CheckoutForm_setPrototypeOf(o, p); }

function CheckoutForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var apiUrl = process.env.API_URL || "http://localhost:1337";
var strapi = new main_default.a(apiUrl);

var CheckoutForm_CheckoutForm =
/*#__PURE__*/
function (_React$Component) {
  CheckoutForm_inherits(CheckoutForm, _React$Component);

  function CheckoutForm(props) {
    var _this;

    CheckoutForm_classCallCheck(this, CheckoutForm);

    _this = CheckoutForm_possibleConstructorReturn(this, CheckoutForm_getPrototypeOf(CheckoutForm).call(this, props));
    _this.state = {
      data: {
        address: "",
        city: "",
        state: "",
        stripe_id: ""
      },
      error: ""
    };
    _this.submitOrder = _this.submitOrder.bind(CheckoutForm_assertThisInitialized(CheckoutForm_assertThisInitialized(_this)));
    return _this;
  }

  CheckoutForm_createClass(CheckoutForm, [{
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
        }).then(router_default.a.push("/"));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-1334613522" + " " + "paper"
      }, external_react_default.a.createElement("h5", {
        className: "jsx-1334613522"
      }, "Your information:"), external_react_default.a.createElement("hr", {
        className: "jsx-1334613522"
      }), external_react_default.a.createElement(external_reactstrap_["FormGroup"], {
        style: {
          display: "flex"
        }
      }, external_react_default.a.createElement("div", {
        style: {
          flex: "0.90",
          marginRight: 10
        },
        className: "jsx-1334613522"
      }, external_react_default.a.createElement(external_reactstrap_["Label"], null, "Address"), external_react_default.a.createElement(external_reactstrap_["Input"], {
        onChange: this.onChange.bind(this, "address")
      }))), external_react_default.a.createElement(external_reactstrap_["FormGroup"], {
        style: {
          display: "flex"
        }
      }, external_react_default.a.createElement("div", {
        style: {
          flex: "0.65",
          marginRight: "6%"
        },
        className: "jsx-1334613522"
      }, external_react_default.a.createElement(external_reactstrap_["Label"], null, "City"), external_react_default.a.createElement(external_reactstrap_["Input"], {
        onChange: this.onChange.bind(this, "city")
      })), external_react_default.a.createElement("div", {
        style: {
          flex: "0.25",
          marginRight: 0
        },
        className: "jsx-1334613522"
      }, external_react_default.a.createElement(external_reactstrap_["Label"], null, "State"), external_react_default.a.createElement(external_reactstrap_["Input"], {
        onChange: this.onChange.bind(this, "state")
      }))), external_react_default.a.createElement(Checkout_CardSection, {
        context: this.props.context,
        data: this.state.data,
        submitOrder: this.submitOrder
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "1334613522",
        css: [".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fafafa;border-radius:6px;margin-top:90px;}", ".form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}", "*{box-sizing:border-box;}", "body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}", "h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}", ".Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}", "label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}", "button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}", "form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}", "button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}", "input,.StripeElement{display:block;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}", "input::-webkit-input-placeholder{color:#aab7c4;}", "input::-moz-placeholder{color:#aab7c4;}", "input:-ms-input-placeholder{color:#aab7c4;}", "input::placeholder{color:#aab7c4;}", "input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}", ".StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}"]
      }));
    }
  }]);

  return CheckoutForm;
}(external_react_default.a.Component);

/* harmony default export */ var Checkout_CheckoutForm = (Object(external_react_stripe_elements_["injectStripe"])(CheckoutForm_CheckoutForm));
// EXTERNAL MODULE: ./components/Context/AppProvider.js
var AppProvider = __webpack_require__(11);

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/checkout.js
function checkout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { checkout_typeof = function _typeof(obj) { return typeof obj; }; } else { checkout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return checkout_typeof(obj); }

function checkout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function checkout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function checkout_createClass(Constructor, protoProps, staticProps) { if (protoProps) checkout_defineProperties(Constructor.prototype, protoProps); if (staticProps) checkout_defineProperties(Constructor, staticProps); return Constructor; }

function checkout_possibleConstructorReturn(self, call) { if (call && (checkout_typeof(call) === "object" || typeof call === "function")) { return call; } return checkout_assertThisInitialized(self); }

function checkout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function checkout_getPrototypeOf(o) { checkout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return checkout_getPrototypeOf(o); }

function checkout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) checkout_setPrototypeOf(subClass, superClass); }

function checkout_setPrototypeOf(o, p) { checkout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return checkout_setPrototypeOf(o, p); }












var checkout_Checkout =
/*#__PURE__*/
function (_Component) {
  checkout_inherits(Checkout, _Component);

  function Checkout(props) {
    var _this;

    checkout_classCallCheck(this, Checkout);

    _this = checkout_possibleConstructorReturn(this, checkout_getPrototypeOf(Checkout).call(this, props));
    _this.state = {
      items: {},
      stripe: null
    };
    return _this;
  }

  checkout_createClass(Checkout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Create Stripe instance in componentDidMount
      // (componentDidMount only fires in browser/DOM environment)
      var context = this.props.context;
      var isAuthenticated = this.props.isAuthenticated;

      if (context.items.length === 0 || !isAuthenticated) {
        router_default.a.push("/");
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
        return external_react_default.a.createElement("h1", null, "Loading");
      } else {
        return external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
          style: {
            paddingRight: 0
          },
          sm: {
            size: 3,
            order: 1,
            offset: 2
          }
        }, external_react_default.a.createElement("h1", {
          style: {
            margin: 20
          }
        }, "Checkout"), external_react_default.a.createElement(Cart["a" /* default */], {
          isAuthenticated: isAuthenticated
        })), external_react_default.a.createElement(external_reactstrap_["Col"], {
          style: {
            paddingLeft: 5
          },
          sm: {
            size: 6,
            order: 2
          }
        }, external_react_default.a.createElement(external_react_stripe_elements_["StripeProvider"], {
          stripe: this.state.stripe
        }, external_react_default.a.createElement(external_react_stripe_elements_["Elements"], null, external_react_default.a.createElement(Checkout_CheckoutForm, {
          context: this.props.context
        })))));
      }
    }
  }]);

  return Checkout;
}(external_react_["Component"]);

/* harmony default export */ var checkout = __webpack_exports__["default"] = (Object(external_recompose_["compose"])(defaultPage["a" /* default */], AppProvider["b" /* withContext */])(checkout_Checkout));

/***/ })
/******/ ]);