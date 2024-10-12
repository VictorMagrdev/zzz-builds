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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var schemas_1 = require("@/validators/schemas");
var tokens_1 = require("@/components/tokens");
var api_general_1 = require("@/libs/api_general");
var useStore_1 = require("@/store/useStore");
var navigation_1 = require("next/navigation");
function RegisterForm() {
    var _this = this;
    var _a, _b, _c, _d, _e;
    var _f = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.RegisterSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    }), register = _f.register, handleSubmit = _f.handleSubmit, errors = _f.formState.errors;
    var login = useStore_1["default"]().login;
    var router = navigation_1.useRouter();
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var result, loginResult, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, api_general_1.registerUser(data.name, data.user, data.email, data.password, data.confirm_password)];
                case 1:
                    result = _a.sent();
                    return [4 /*yield*/, api_general_1.loginUser(data.email, data.password)];
                case 2:
                    loginResult = _a.sent();
                    localStorage.setItem('token', loginResult.token);
                    login(loginResult.user, loginResult.token);
                    router.push('/');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error al registrarse:', error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, className: "flex flex-col p-5 rounded-2xl " + tokens_1.bg_blue_30 },
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { className: "text-white mb-1", htmlFor: "name" }, "Name"),
            React.createElement("input", __assign({ className: "text-black", id: "name", type: "text" }, register('name'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_a = errors.name) === null || _a === void 0 ? void 0 : _a.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { className: "text-white mb-1", htmlFor: "email" }, "Email"),
            React.createElement("input", __assign({ className: "text-black", id: "email", type: "email" }, register('email'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_b = errors.email) === null || _b === void 0 ? void 0 : _b.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { className: "text-white mb-1", htmlFor: "user" }, "User"),
            React.createElement("input", __assign({ className: "text-black", id: "user", type: "text" }, register('user'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_c = errors.user) === null || _c === void 0 ? void 0 : _c.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { className: "text-white mb-1", htmlFor: "password" }, "Password"),
            React.createElement("input", __assign({ className: "text-black", id: "password", type: "password" }, register('password'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_d = errors.password) === null || _d === void 0 ? void 0 : _d.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("label", { className: "text-white mb-1", htmlFor: "confirm_password" }, "Confirm Password"),
            React.createElement("input", __assign({ className: "text-black", id: "confirm_password", type: "password" }, register('confirm_password'))),
            React.createElement("div", { className: "text-xs text-red-400" }, (_e = errors.confirm_password) === null || _e === void 0 ? void 0 : _e.message)),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("input", { className: "text-white mb-1", type: "submit", value: "Register" }))));
}
exports["default"] = RegisterForm;
