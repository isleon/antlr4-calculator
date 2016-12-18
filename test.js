var antlrCalc = require('./Calculator')

var result = antlrCalc.Calculator.calculate('100,20');
console.log(JSON.stringify(result, null, 2));