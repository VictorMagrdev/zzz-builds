'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var schemas_1 = require("@/other/schemas");
require("./style.css");
function LoginForm() {
    var _a, _b;
    var _c = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.loginSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    }), register = _c.register, handleSubmit = _c.handleSubmit, errors = _c.formState.errors;
    var onSubmit = function (data) {
        console.log(data);
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit), noValidate: true },
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "email" }, "Email"),
            React.createElement("input", __assign({ className: 'text-black', id: 'email', type: "email" }, register('email'))),
            React.createElement("div", { className: 'text-xs text-red-400' }, (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message)),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "password" }, "Password"),
            React.createElement("input", __assign({ className: 'text-black', id: 'password', type: "password" }, register('password'))),
            React.createElement("div", { className: 'text-xs text-red-400' }, (_b = errors.password) === null || _b === void 0 ? void 0 : _b.message)),
        React.createElement("label", { htmlFor: "rememberme" },
            React.createElement("div", null,
                React.createElement("span", null, "Remember me"),
                React.createElement("input", __assign({ type: "checkbox" }, register('remember'))))),
        React.createElement("button", { type: "submit" }, "Login")));
}
exports["default"] = LoginForm;
