"use strict";
exports.__esModule = true;
var drop_down_1 = require("@/components/organisms/drop-down");
var table_tier_post_1 = require("@/components/molecules/table-tier-post");
function Post() {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'flex justify-center' },
            React.createElement("form", { action: "", method: "post" },
                React.createElement("input", { id: 'name', placeholder: 'name', title: 'name', type: 'text', className: 'rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 ' }))),
        React.createElement("div", { className: 'space-y-4 flex' },
            React.createElement("div", { className: 'flex-grow h-4/6' },
                React.createElement(table_tier_post_1["default"], null)),
            React.createElement("div", { className: 'flex w-auto place-self-center' },
                React.createElement(drop_down_1["default"], null))),
        React.createElement("div", { className: 'my-8 flex justify-center' },
            React.createElement("button", { className: 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' }, "publish"),
            React.createElement("button", { className: 'text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' }, "cancel"))));
}
exports["default"] = Post;