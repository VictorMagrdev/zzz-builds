'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var myPlace_1 = require("myPlace");
var TierColums;
(function (TierColums) {
    TierColums["SS"] = "S+";
    TierColums["S"] = "S";
    TierColums["A"] = "A";
    TierColums["B"] = "B";
    TierColums["C"] = "C";
})(TierColums || (TierColums = {}));
function TableTierPost() {
    var _a = react_1.useState(), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        setTimeout(function () {
            setData(myPlace_1.thisIsMyData);
        }, 2000);
    }, []);
    return (React.createElement("div", { className: "grid grid-col-1 grid-rows-4 gap-8 space-y-4 bg-indigo-800 rounded-lg " },
        React.createElement("div", { className: 'p-4 size-full' },
            React.createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border w-96 border-y-indigo-50 border-x-indigo-700 " },
                React.createElement("div", { className: 'place-items-start ' },
                    React.createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-red-600 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.SS))),
            React.createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-indigo-700 w-96 " },
                React.createElement("div", { className: 'place-items-start ' },
                    React.createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-orange-500 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.S))),
            React.createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-indigo-700 w-96 " },
                React.createElement("div", { className: 'place-items-start ' },
                    React.createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-orange-400 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.A))),
            React.createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-indigo-700 w-96 " },
                React.createElement("div", { className: 'place-items-start ' },
                    React.createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-yellow-400 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.B))),
            React.createElement("div", { className: "grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-indigo-700 w-96 " },
                React.createElement("div", { className: 'place-items-start ' },
                    React.createElement("div", { className: 'w-[50px] h-[75px] skew-y-12 bg-green-500 place-self-center rounded-lg flex justify-center content-center items-center' }, TierColums.C))))));
}
exports["default"] = TableTierPost;
