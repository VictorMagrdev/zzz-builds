'use client';
"use strict";
exports.__esModule = true;
<<<<<<< Updated upstream
var react_1 = require("@conform-to/react");
var zod_1 = require("@conform-to/zod");
var react_dom_1 = require("react-dom");
var actions_1 = require("@/other/actions");
var schemas_1 = require("@/other/schemas");
=======
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var schemas_1 = require("@/validators/schemas");
>>>>>>> Stashed changes
var tokens_1 = require("@/components/tokens");
function RegisterForm() {
    var _a = react_dom_1.useFormState(actions_1.register, undefined), lastResult = _a[0], action = _a[1];
    var _b = react_1.useForm({
        lastResult: lastResult,
        onValidate: function (_a) {
            var formData = _a.formData;
            return zod_1.parseWithZod(formData, { schema: schemas_1.RegisterSchema });
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput'
    }), form = _b[0], fields = _b[1];
    return (React.createElement("form", { id: form.id, onSubmit: form.onSubmit, action: action, noValidate: true, className: "flex flex-col p-5 rounded-2xl " + tokens_1.bg_blue_30 },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "user" }, "Name"),
            React.createElement("input", { className: "text-black", id: "name", type: "text", key: fields.name.key, name: fields.name.name, defaultValue: fields.name.initialValue }),
            React.createElement("div", { className: "text-xs text-red-400" }, fields.name.errors)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "email" }, "Email"),
            React.createElement("input", { className: "text-black", id: "email", type: "email", key: fields.email.key, name: fields.email.name, defaultValue: fields.email.initialValue }),
            React.createElement("div", { className: "text-xs text-red-400" }, fields.email.errors)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "user" }, "User"),
            React.createElement("input", { className: "text-black", id: "user", type: "text", key: fields.user.key, name: fields.user.name, defaultValue: fields.user.initialValue }),
            React.createElement("div", { className: "text-xs text-red-400" }, fields.user.errors)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "password" }, "Password"),
            React.createElement("input", { className: "text-black", id: "password", type: "password", key: fields.password.key, name: fields.password.name, defaultValue: fields.password.initialValue }),
            React.createElement("div", { className: "text-xs text-red-400" }, fields.password.errors)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { htmlFor: "confirm_password" }, "Confirm Password"),
            React.createElement("input", { className: "text-black", id: "confirm_password", type: "password", key: fields.confirm_password.key, name: fields.confirm_password.name, defaultValue: fields.confirm_password.initialValue }),
            React.createElement("div", { className: "text-xs text-red-400" }, fields.confirm_password.errors)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("input", { type: "submit", value: "register" }))));
}
exports["default"] = RegisterForm;
