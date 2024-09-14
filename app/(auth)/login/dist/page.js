"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
require("./style.css");
exports.metadata = {
    title: 'Login',
    description: 'This coponent is for login on my app'
};
function LoginPage() {
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { htmlFor: "user" }, "User"),
            react_1["default"].createElement("input", { id: 'user', type: "text" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("label", { htmlFor: "password" }, "Password"),
            react_1["default"].createElement("input", { id: 'password', type: "password" })),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("input", { type: "submit", value: "login" }))));
}
exports["default"] = LoginPage;
