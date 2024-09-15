"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var Header_1 = require("@/components/layout/Header");
exports.metadata = {
    title: 'Tier List',
    description: 'Tier List description'
};
function TierList() {
    return (React.createElement("div", { className: "flex flex-col" },
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: "p-8 place-self-center" },
            React.createElement("input", { type: "text", placeholder: "seach tier list", name: "", id: "" })),
        React.createElement("div", { className: 'flex items-stretch' },
            React.createElement("div", { className: 'p-8' }),
            React.createElement("div", { className: "place-self-center" },
                React.createElement("button", { className: "h-[100px] w-[100px] rounded-full bg-gray-200" }, "+")))));
}
exports["default"] = TierList;
