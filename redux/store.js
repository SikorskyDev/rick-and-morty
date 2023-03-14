"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppDispatch = exports.store = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reactRedux = require("react-redux");
var _charactersApi = require("./charactersApi");
var _searchInputSlice = _interopRequireDefault(require("./searchInputSlice"));
var _reducer;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var store = (0, _toolkit.configureStore)({
  reducer: (_reducer = {}, _defineProperty(_reducer, _charactersApi.charactersApi.reducerPath, _charactersApi.charactersApi.reducer), _defineProperty(_reducer, "searchInputSlice", _searchInputSlice.default), _reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(_charactersApi.charactersApi.middleware);
  }
});
exports.store = store;
var useAppDispatch = function useAppDispatch() {
  return (0, _reactRedux.useDispatch)();
};
exports.useAppDispatch = useAppDispatch;