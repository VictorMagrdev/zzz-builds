"use strict";
exports.__esModule = true;
require("./layout.css");
var auth_background_png_1 = require("@/assets/images/auth-background.png");
var image_1 = require("next/image");
function AuthLayout(_a) {
    var children = _a.children;
    return (React.createElement("main", { className: 'auth' },
        React.createElement(image_1["default"], { src: auth_background_png_1["default"], placeholder: "blur", quality: 100, fill: true, sizes: "100vw", style: {
                objectFit: "cover"
            }, alt: "auth-background", className: 'auth-background' }),
        React.createElement("section", null),
        React.createElement("section", null, children)));
}
exports["default"] = AuthLayout;
