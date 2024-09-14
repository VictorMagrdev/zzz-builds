"use strict";
exports.__esModule = true;
var react_1 = require("react");
var drop_down_1 = require("../../../../components/organisms/drop-down");
var table_tier_post_1 = require("../../../../components/molecules/table-tier-post");
function Post() {
    return (react_1["default"].createElement("div", { className: 'px-8' },
        react_1["default"].createElement("div", { className: 'flex flex-row ' },
            react_1["default"].createElement("div", { className: 'space-y-4 basis-1/2' },
                react_1["default"].createElement("form", { action: "", method: "post" },
                    react_1["default"].createElement("input", { id: 'name', placeholder: 'name', title: 'name', type: 'text', className: 'my-8 block mb-2 text-sm font-medium text-gray-900 dark:text-white' })),
                react_1["default"].createElement(table_tier_post_1["default"], null)),
            react_1["default"].createElement("div", { className: 'self-center basis-1/4' },
                react_1["default"].createElement(drop_down_1["default"], null))),
        react_1["default"].createElement("div", { className: 'my-8' },
            react_1["default"].createElement("button", { className: 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' }, "publish"),
            react_1["default"].createElement("button", { className: 'text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' }, " cancel"))));
}
exports["default"] = Post;
