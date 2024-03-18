"use strict";
;
let postSize = 2;
console.log(postSize);
function tax(year = 2022, tax) {
    if (year < 2023)
        return year * tax * 1.3;
    return year * tax * 1.7;
}
//# sourceMappingURL=index.js.map