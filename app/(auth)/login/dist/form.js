'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function FormLogin() {
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState({}), errors = _c[0], setErrors = _c[1];
    var _d = react_1.useState(false), isFormValid = _d[0], setIsFormValid = _d[1];
    var validateForm = react_1.useCallback(function () {
        var errors = {};
        if (!name) {
            errors.name = 'User is required.';
        }
        if (!password) {
            errors.password = 'Password is required.';
        }
        else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }, [name, password]);
    react_1.useEffect(function () {
        validateForm();
    }, [name, password, validateForm]);
    var handleSubmit = function (e) {
        e.preventDefault();
        if (isFormValid) {
            console.log('Form submitted successfully!');
        }
        else {
            console.log('Form has errors. Please correct them.');
        }
    };
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "user" }, "User"),
            React.createElement("input", { id: "user", name: "username", type: "text", value: name, onChange: function (e) { return setName(e.target.value); }, autoComplete: "username" }),
            errors.name && React.createElement("p", { className: "error" }, errors.name)),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "password" }, "Password"),
            React.createElement("input", { id: "password", name: "password", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, autoComplete: "current-password" }),
            errors.password && React.createElement("p", { className: "error" }, errors.password)),
        React.createElement("div", null,
            React.createElement("input", { type: "submit", value: "Login", disabled: !isFormValid }))));
}
exports["default"] = FormLogin;
