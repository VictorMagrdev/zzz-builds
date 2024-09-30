"use strict";
exports.__esModule = true;
exports.Card = void 0;
var image_1 = require("next/image");
var link_1 = require("next/link");
function Card(_a) {
    var character = _a.character;
    return (React.createElement("article", { className: "relative flex flex-col h-max rounded-sm border-slate-400 p-4 w-[350px] overflow-hidden" },
        React.createElement(link_1["default"], { href: "/zenless-zone-zero/characters/" + character.id, className: "relative block" },
            React.createElement(image_1["default"], { className: "rounded-md transition-transform duration-300 transform hover:scale-105", src: "http://localhost:3001/imagenes/" + character.imagen, alt: character.nombre, width: 244, height: 255, layout: "intrinsic" }),
            React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100" },
                React.createElement("p", { className: "text-white font-semibold text-xl" }, character.nombre)))));
}
exports.Card = Card;
