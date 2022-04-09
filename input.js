/*
    theFilter function
    [1] if the field is empty return Unknowen
    [2] if the name start or end with space remove space
    [3] if the name.length greater than 10 ignore it
    [4] if the name starts with underscore remove it 
*/

function theFilter(name = "Unknowen") {
    name = name.trim()
    if (name.length > 10) {
        name = name.substring(0, 10);
    }
    if (name.startsWith("_")) {
        name = name.substring(1);
    }
    if (name === "Hell") {
        throw Error("this word is not allowed") // this is for coverage
    }
    return name;
}

module.exports = theFilter;