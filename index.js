let stringToByteArray = function(value) {
    var bytes = [];
    for (var i = 0; i < value.length; i++) {
        var charCode = value.charCodeAt(i);
        var cLen = Math.ceil(Math.log(charCode)/Math.log(256));
        for (var j = 0; j < cLen; j++) {
            bytes.push((charCode << (j*8)) & 0xFF);
        }
    }
    return bytes;
}

module.exports = stringToByteArray
