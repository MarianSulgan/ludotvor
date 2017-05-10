// Extension of String class, with replaceAll functionality

// eslint-disable-next-line
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};