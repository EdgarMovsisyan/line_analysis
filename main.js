const Stack = require("./stack");
const Line = require("./line_analysis");

let line1 = ")4 + 5) * (5 - 2) + (7 * 2)";
let line2 = "(4 + 5) * (5 - 2) + (7 * 2)";
let line3 = "[4-6][a-v][=-)]";
let line4 = "[l][[;yt[khj]";


console.log(Line.bracket_analys(line1, ["(", ")"]));
console.log(Line.bracket_analys(line2, [")", "("]));
console.log(Line.bracket_analys(line3, ["[", "]"]));
console.log(Line.bracket_analys(line4, ["[", "]"]));