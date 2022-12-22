import { matchPath } from "react-router-dom";

const pattern = "/@:slug";
const pathname = "/@sam";
const match = matchPath(pattern, pathname);

console.log(match);
