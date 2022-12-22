"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const pattern = "/@:slug";
const pathname = "/@sam";
const match = (0, react_router_dom_1.matchPath)(pattern, pathname);
console.log(match);
