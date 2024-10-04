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
<<<<<<< HEAD
<<<<<<< Updated upstream
var react_1 = require("@conform-to/react");
var zod_1 = require("@conform-to/zod");
var react_dom_1 = require("react-dom");
var actions_1 = require("@/other/actions");
=======
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
>>>>>>> 6883642a3be370993070b6c19c0fba8fee240378
var schemas_1 = require("@/other/schemas");
=======
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var schemas_1 = require("@/validators/schemas");
>>>>>>> Stashed changes
var tokens_1 = require("@/components/tokens");
function RegisterForm() {
    var _a, _b, _c, _d, _e;
    var _f = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.RegisterSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    }), register = _f.register, handleSubmit = _f.handleSubmit, errors = _f.formState.errors;
    var onSubmit = function (data) {
        console.log(data);
    };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, className: "flex flex-col p-5 rounded-2xl " + tokens_1.bg_blue_30 },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "name" }, "Name"),
            React.createElement("input", __assign({ className: "text-black", id: "name", type: "text" }, register('name'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_a = errors.name) === null || _a === void 0 ? void 0 : _a.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "email" }, "Email"),
            React.createElement("input", __assign({ className: "text-black", id: "email", type: "email" }, register('email'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_b = errors.email) === null || _b === void 0 ? void 0 : _b.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "user" }, "User"),
            React.createElement("input", __assign({ className: "text-black", id: "user", type: "text" }, register('user'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_c = errors.user) === null || _c === void 0 ? void 0 : _c.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "password" }, "Password"),
            React.createElement("input", __assign({ className: "text-black", id: "password", type: "password" }, register('password'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_d = errors.password) === null || _d === void 0 ? void 0 : _d.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "confirm_password" }, "Confirm Password"),
            React.createElement("input", __assign({ className: "text-black", id: "confirm_password", type: "password" }, register('confirm_password'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_e = errors.confirm_password) === null || _e === void 0 ? void 0 : _e.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("input", { type: "submit", value: "register" }))));
}
exports["default"] = RegisterForm;
