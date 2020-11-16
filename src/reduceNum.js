function reduceNum(num) {
    let dot = num.indexOf('.'),
        zeros = 0,
        minus, sciNot;
    if (num[0] == '-') {
        minus = true;
        num = num.slice(1);
    }
    sciNot = num.toLowerCase().indexOf('e')
    if (sciNot != -1) {
        let pre = num.slice(0, sciNot),
            post = parseInt(num.slice(sciNot + 1));
        if (dot != -1) {
            post -= pre.length - 2, pre = pre.toString().replace('.', '');
        }
        num = pre + 'e' + post
    } else if (num.slice(0, 3) == '0.0') {
        zeros = 2
        for (let i = 3; i < num.length; i++) {
            if (num[i] == '0') {
                zeros++;
            } else {
                break;
            }
        }
        num = num.slice(zeros + 1) + 'e-' + (num.length - 2);
    } else {
        for (i = num.length - 1; i > -2; i--) {
            if (num[i] == '0') {
                zeros++;
            } else {
                break;
            }
        }
        num = (zeros > 1) ? num.slice(0, num.length - zeros) + 'e' + zeros : num;
    }
    return minus ? '-' + num : num;
}

module.exports =  reduceNum;