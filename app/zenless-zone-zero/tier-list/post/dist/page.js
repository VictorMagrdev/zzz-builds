"use strict";
exports.__esModule = true;
var drop_down_1 = require("@/components/organisms/drop-down");
var table_tier_post_1 = require("@/components/molecules/table-tier-post");
var tokens_1 = require("@/components/tokens");
function Post() {
    return (React.createElement("div", { className: tokens_1.bg_blue_60 },
        React.createElement("div", { className: 'flex justify-center' },
            React.createElement("form", { action: "", method: "post" },
                React.createElement("input", { className: " placeholder:text-slate-900 block " + tokens_1.bg_blue_10 + " border py-2 pl-9 pr-3 rounded-lg size-8 my-8 w-96 mb-2 focus:outline-none sm:text-sm\" placeholder=\"Name\" type=\"text\" name=\"name" }))),
        React.createElement("div", { className: 'space-y-4 flex' },
            React.createElement("div", { className: 'flex-grow h-4/6' },
                React.createElement(table_tier_post_1["default"], null)),
            React.createElement("div", { className: 'flex w-auto place-self-center' },
                React.createElement(drop_down_1["default"], null))),
        React.createElement("div", { className: 'my-8 flex justify-center space-x-4' },
            React.createElement("button", { className: "rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 " + tokens_1.bg_blue_10 }, "publish"),
            React.createElement("button", { className: "rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 " + tokens_1.bg_blue_10 }, "cancel"))));
}
exports["default"] = Post;
