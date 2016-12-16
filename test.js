var antlrCalc = require('./Calculator')

var result = antlrCalc.Calculator.calculate('1+1 \\frac {1} {2}');
console.log(JSON.stringify(result, null, 2));