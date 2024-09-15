'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("@conform-to/react");
var zod_1 = require("@conform-to/zod");
var react_dom_1 = require("react-dom");
var actions_1 = require("@/other/actions");
var schemas_1 = require("@/other/schemas");
require("./style.css");
function LoginForm() {
    var _a = react_dom_1.useFormState(actions_1.login, undefined), lastResult = _a[0], action = _a[1];
    var _b = react_1.useForm({
        lastResult: lastResult,
        onValidate: function (_a) {
            var formData = _a.formData;
            return zod_1.parseWithZod(formData, { schema: schemas_1.loginSchema });
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput'
    }), form = _b[0], fields = _b[1];
    return (React.createElement("form", { id: form.id, onSubmit: form.onSubmit, action: action, noValidate: true },
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "email" }, "Email"),
            React.createElement("input", { className: 'text-black', id: 'email', type: "email", key: fields.email.key, name: fields.email.name, defaultValue: fields.email.initialValue }),
            React.createElement("div", { className: 'text-xs text-red-400' }, fields.email.errors)),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "password" }, "Password"),
            React.createElement("input", { className: 'text-black', id: 'password', type: "password", key: fields.password.key, name: fields.password.name, defaultValue: fields.password.initialValue }),
            React.createElement("div", { className: 'text-xs text-red-400' }, fields.password.errors)),
        React.createElement("label", { htmlFor: "rememberme" },
            React.createElement("div", null,
                React.createElement("span", null, "Remember me"),
                React.createElement("input", { type: "checkbox", key: fields.remember.key, name: fields.remember.name, defaultChecked: fields.remember.initialValue === 'on' }))),
        React.createElement("button", null, "Login")));
}
exports["default"] = LoginForm;
