const repeatString = function(string, num) {
    strValue = "";
    if (num < 0) return "ERROR";
    for (let i = 0; i < num; ++i) {
        strValue += string;
    }
    return strValue;
};

// Do not edit below this line
module.exports = repeatString;
