"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TierColums;
(function (TierColums) {
    TierColums["SS"] = "S+";
    TierColums["A"] = "A";
    TierColums["B"] = "B";
    TierColums["C"] = "C";
})(TierColums || (TierColums = {}));
function TableTierPost() {
    return (react_1["default"].createElement("div", { className: "grid grid-flow-col grid-rows-4 gap-8 space-y-4" },
        react_1["default"].createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 w-96 " },
            react_1["default"].createElement("div", { className: 'place-items-start ' },
                react_1["default"].createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-red-600 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.SS))),
        react_1["default"].createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 w-96 " },
            react_1["default"].createElement("div", { className: 'place-items-start ' },
                react_1["default"].createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-red-600 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.A))),
        react_1["default"].createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 w-96 " },
            react_1["default"].createElement("div", { className: 'place-items-start ' },
                react_1["default"].createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-red-600 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.B))),
        react_1["default"].createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 w-96 " },
            react_1["default"].createElement("div", { className: 'place-items-start ' },
                react_1["default"].createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-red-600 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.C)))));
}
exports["default"] = TableTierPost;
