'use client';
"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var tokens_1 = require("@/components/tokens");
var components_1 = require("@/components");
var Ben_png_1 = require("@/assets/images/Ben.png");
exports.metadata = {
    title: 'Profile',
    description: 'Profile info'
};
function Profile() {
    // const token = useStore((store) => store.token);
    // useEffect(() => {
    //     if (!token) {
    //       redirect("/");
    //     }
    //   }, [token]);
    return (React.createElement("div", { className: "flex flex-col " + tokens_1.bg_blue_60 + " space-y-4 min-h-screen" },
        React.createElement("div", { className: "m-8 grid grid-rows-2 grid-flow-col gap-x-0 gap-y-4" },
            React.createElement(components_1.ProxyInfo, { imagen: Ben_png_1["default"], username: "Usuario123", nivel: 5, uid: "12345" }),
            React.createElement("div", { className: "rounded-lg max-w-md p-8 " + tokens_1.bg_blue_30 + " space-y-2 font-mono w-96 min-h-80 text-white" },
                React.createElement("div", null,
                    React.createElement("a", { href: "#" },
                        "my tier list ",
                        ">")),
                React.createElement("hr", null),
                React.createElement("div", null,
                    React.createElement("a", { href: "#" },
                        "my news ",
                        ">")),
                React.createElement("hr", null),
                React.createElement("div", null,
                    React.createElement("a", { href: "#" },
                        "my guides ",
                        ">")),
                React.createElement("hr", null),
                React.createElement("div", null,
                    React.createElement("a", { href: "#" }, "account settings")),
                React.createElement("hr", null)),
            React.createElement("div", { className: "place-self-start col-span-2 text-white" },
                React.createElement("div", null, "social links")),
            React.createElement("div", { className: "place-self-start col-span-2 text-white" },
                React.createElement("div", null, "proxy info")))));
}
exports["default"] = Profile;
