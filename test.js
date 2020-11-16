console.log("starting test\n");

const reduceJSON = require('./src/index')
const obEqual = require('fast-deep-equal');


let test = {
    a: 20,
    b: 200,
    c: -20,
    d: -200,
    e: 123,
    f: -123,
    g: 1000000000000001,
    i: 100000000000000,
    j: 99999000099900000,
    k: 10e+30,
    l: 10e-30,
    m: -10e-20,
    o: 1234.00000000001,
    p: true,
    q: false,
    r: 'abcdefghijklmnopq\n\nrstuvwx\\yz\\\"\"\"\\\'\"', 
    s: {
        a: "abc",
        b: [1234,10000,30e+30,'e\\\n'],
        c: [[['\\\\\"\\']]]
    }
};

let builtIn = JSON.stringify(test);
let jsTinyStr = reduceJSON(test);

console.log('JSON.stringify:\n',builtIn);
console.log('\nJSON-tiny:\n',jsTinyStr);

console.log('\n\nEqual (must be true): ', obEqual(JSON.parse(builtIn),JSON.parse(jsTinyStr)));
console.log('Saved: ', ((1-jsTinyStr.length / builtIn.length)*100).toFixed(3),'%');