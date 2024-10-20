'use client';
"use strict";
exports.__esModule = true;
exports.ProxyInfo = void 0;
var image_1 = require("next/image");
var tokens_1 = require("@/components/tokens");
function ProxyInfo(_a) {
    var imagen = _a.imagen, username = _a.username, nivel = _a.nivel, uid = _a.uid;
    return (React.createElement("div", { className: "flex flex-col " + tokens_1.bg_blue_30 + " rounded-lg w-96 p-8" },
        React.createElement(image_1["default"], { src: imagen, alt: "Avatar of " + username, width: 96, height: 96, className: "w-24 h-24 mb-2 border-2 rounded-full object-cover mr-4" }),
        React.createElement("div", { className: tokens_1.bg_blue_60 + " rounded-[25px] font-mono" },
            React.createElement("div", { className: "p-2 text-white" },
                React.createElement("h2", null, username),
                React.createElement("p", null,
                    "Nivel: ",
                    nivel),
                React.createElement("p", null,
                    "UID: ",
                    uid)))));
}
exports.ProxyInfo = ProxyInfo;
;
