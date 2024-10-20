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
var js_cookie_1 = require("js-cookie");
var react_1 = require("react");
var api_general_1 = require("@/libs/api_general");
var useStore_1 = require("@/store/useStore");
var navigation_1 = require("next/navigation");
require("./login.css");
function LoginForm() {
    var _this = this;
    var _a, _b;
    var _c = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.loginSchema),
        mode: 'onBlur',
        reValidateMode: 'onChange'
    }), register = _c.register, handleSubmit = _c.handleSubmit, errors = _c.formState.errors;
    var _d = react_1.useState(''), errorMessage = _d[0], setErrorMessage = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var login = useStore_1["default"](function (store) { return store.login; });
    var token = useStore_1["default"](function (store) { return store.token; });
    var router = navigation_1.useRouter();
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var result, currentUser, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setLoading(true);
                    setErrorMessage('');
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api_general_1.loginUser(data.email, data.password)];
                case 2:
                    result = _c.sent();
                    currentUser = js_cookie_1["default"].get("token");
                    console.log('cookie', currentUser);
                    login(result.token);
                    console.log(token);
                    router.push('/profile');
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _c.sent();
                    setErrorMessage(((_b = (_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || error_1.message || 'Error desconocido');
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        console.log(token);
    }, [token]);
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit), noValidate: true },
        errorMessage && React.createElement("div", { className: "text-red-400" }, errorMessage),
        React.createElement("div", null,
            React.createElement("label", { className: 'text-white my-1', htmlFor: "email" }, "Email"),
            React.createElement("input", __assign({ className: 'text-black', id: 'email', type: "email" }, register('email'), { "aria-invalid": errors.email ? "true" : "false" })),
            React.createElement("div", { className: 'text-xs text-red-400' }, (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message)),
        React.createElement("div", null,
            React.createElement("label", { className: 'text-white my-1', htmlFor: "password" }, "Password"),
            React.createElement("input", __assign({ className: 'text-black', id: 'password', type: "password" }, register('password'), { "aria-invalid": errors.password ? "true" : "false" })),
            React.createElement("div", { className: 'text-xs text-red-400' }, (_b = errors.password) === null || _b === void 0 ? void 0 : _b.message)),
        React.createElement("label", { className: 'text-white my-1 text-xs', htmlFor: "rememberme" },
            React.createElement("div", null,
                React.createElement("span", null, "Remember me"),
                React.createElement("input", __assign({ type: "checkbox" }, register('remember'))))),
        React.createElement("button", { className: 'text-white', type: "submit", disabled: loading }, loading ? 'Loading...' : 'Login')));
}
exports["default"] = LoginForm;
