function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    if (r === undefined || g === undefined || b === undefined) {
        return rgbToHex(23, 134, 0);
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(12, 152, 200));