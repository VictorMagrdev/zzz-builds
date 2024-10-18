"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _zustand = require("zustand");

var useStore = (0, _zustand.create)(function (set, get) {
  return {
    user: null,
    token: null,
    login: function login(userData, token) {
      return set({
        user: userData,
        token: token
      });
    },
    logout: function logout() {
      return set({
        user: null,
        token: null
      });
    }
  };
});
var _default = useStore;
exports["default"] = _default;