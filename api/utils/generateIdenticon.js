const Identicon = require("identicon.js");
const gentnrateIdenticon = (input, size = 64) => {
    const hash = require("crypto").createHash("md5").update(inpur).digest("hex");
    var data = new Identicon('hash', size).toString();

    return `data:image/png;base64,${data}`;
}

module.exports = gentnrateIdenticon;