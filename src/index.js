const isEscaped = require('./isEscaped')
const reduceNum = require('./reduceNum')
/**
* Reduce json to the smallest allowable for as per spec: www.json.org
* 
* @param {Object} data - object to be reduced
* @returns {string} - minified JOSN
*/
function reduceJSON(data) {
   if (typeof data == 'object') data = JSON.stringify(data);
   let inQuote = false,
       inNum = false,
       inSciNot = false,
       numbers = [],
       startNum;

   for (let i = 0; i < data.length; i++) {
       if (data[i] == '\"' && !isEscaped(data, i)) {
           inQuote = !inQuote;
       } else if (data[i] == '+' && inSciNot) { 
           data = data.slice(0, i) + data.slice(i + 1);
           i--;
       } else if (!inQuote && (/\d/.test(data[i]) || (['-', '.'].indexOf(data[i]) != -1))) {
           if (!inNum) {
               inNum = true, startNum = i;
           } 
       } else if (inNum && (['e', 'E'].indexOf(data[i]) != -1)){
            if ((['e', 'E'].indexOf(data[i]) != -1)) {
                inSciNot = true;
            }
       } else {
           if (inNum) {
               inNum = false;
               inSciNot = false;
               numbers.push([startNum, i]);
           }
       }
   }
   numbers.reverse().forEach(e => {
       data = data.slice(0, e[0]) + reduceNum(data.slice(e[0], e[1])) + data.slice(e[1]);
   })
   return data;
}

module.exports = reduceJSON;