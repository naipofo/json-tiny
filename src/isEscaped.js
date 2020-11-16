function isEscaped(string, position) {
    if (string[position - 1] != '\\') {
        return false;
    } else {
        if (isEscaped(string, position - 1)) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = isEscaped;