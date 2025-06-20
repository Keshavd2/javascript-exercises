const reverseString = function(string) {
    let reversedString = "";
    string = string.split("");
    while (string.length > 0) {
        reversedString += string.pop();
    }
    console.log(reversedString);
    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
