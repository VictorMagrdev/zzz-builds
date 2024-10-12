"use strict";
exports.__esModule = true;
var zustand_1 = require("zustand");
var useStore = zustand_1.create(function (set, get) { return ({
    token: "",
    login: function (token) { return set({ token: token }); },
    logout: function () { return set({ token: null }); }
}); });
exports["default"] = useStore;
