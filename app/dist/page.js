"use strict";
exports.__esModule = true;
var tokens_1 = require("@/components/tokens");
var ZenlessIndex_jpeg_1 = require("../assets/images/ZenlessIndex.jpeg");
var image_1 = require("next/image");
var react_1 = require("react");
function Home() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("main", { className: "flex flex-col max-w-5xl mx-auto h-screen p-4 mt-4 " + tokens_1.bg_blue_30 },
            react_1["default"].createElement("h1", { className: "text-2xl font-bold text-white drop-shadow-md" }, "Zenless Zone Zero Guides Community"),
            react_1["default"].createElement(image_1["default"], { src: ZenlessIndex_jpeg_1["default"], width: 800, alt: "Zenless main", className: "mt-2 shadow-lg shadow-blue-500/50 rounded-sm" }))));
}
exports["default"] = Home;
