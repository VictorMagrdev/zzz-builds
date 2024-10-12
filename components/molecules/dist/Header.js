'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var zzz_logo_png_1 = require("../../assets/images/zzz-logo.png");
var tokens_1 = require("../tokens");
var profile_webp_1 = require("@/assets/images/profile.webp");
var useStore_1 = require("@/store/useStore");
function Header() {
    var token = useStore_1["default"](function (store) { return store.token; });
    return (react_1["default"].createElement("header", { className: tokens_1.bg_blue_30 + " p-4" },
        react_1["default"].createElement("nav", { className: 'flex justify-center items-center space-x-36 max-w-screen-xl mx-auto h-8' },
            react_1["default"].createElement(link_1["default"], { href: "/", passHref: true },
                react_1["default"].createElement(image_1["default"], { src: zzz_logo_png_1["default"], width: 200, height: 200, alt: "Logo Zenless", className: 'h-auto -ml-16' })),
            react_1["default"].createElement("ul", { className: 'flex space-x-20 text-xl' },
                react_1["default"].createElement(link_1["default"], { href: "/zenless-zone-zero/guides", className: 'text-white hover:text-gray-400 transition-colors' }, "Guides"),
                react_1["default"].createElement(link_1["default"], { href: "/zenless-zone-zero/tier-list", className: 'text-white hover:text-gray-400 transition-colors' }, "Tier List"),
                react_1["default"].createElement(link_1["default"], { href: "#", className: 'text-white hover:text-gray-400 transition-colors' }, "News"),
                react_1["default"].createElement(link_1["default"], { href: "/zenless-zone-zero/characters", className: 'text-white hover:text-gray-400 transition-colors' }, "Characters")),
            token !== null ? (react_1["default"].createElement(link_1["default"], { href: "/profile", passHref: true },
                react_1["default"].createElement(image_1["default"], { src: profile_webp_1["default"], width: 115, height: 115, alt: "Logo Zenless", className: 'h-auto -ml-16 border-4 rounded-full' }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(link_1["default"], { href: "/login", passHref: true }, "Login"),
                react_1["default"].createElement(link_1["default"], { href: "/register", passHref: true }, "Register"))))));
}
exports["default"] = Header;
