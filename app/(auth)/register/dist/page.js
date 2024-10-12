"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var RegisterForm_1 = require("@/components/screens/RegisterForm");
var router_1 = require("next/router");
exports.metadata = {
    title: 'Register',
    description: 'This component is for register on my app'
};
function RegisterPage() {
    var router = router_1.useRouter();
    return React.createElement(RegisterForm_1["default"], null);
}
exports["default"] = RegisterPage;
