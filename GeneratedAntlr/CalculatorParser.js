// Generated from Calculator.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalculatorVisitor = require('./CalculatorVisitor').CalculatorVisitor;

var grammarFileName = "Calculator.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003<\u00a1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0012\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003Z\n\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003a\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003{\n\u0003\f\u0003\u000e\u0003~\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006\u008b\n\u0006",
    "\r\u0006\u000e\u0006\u008c\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u0092\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\u009f\n\u0007\u0003\u0007\u0002\u0003\u0004",
    "\b\u0002\u0004\u0006\b\n\f\u0002\u0007\u0003\u0002\u0004\u0005\u0004",
    "\u0002\u0006\u0006\u0010\u0010\u0003\u0002\u0007\b\u0003\u0002\u0012",
    "\u0013\u0003\u0002\u0014\u0015\u00c9\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0004`\u0003\u0002\u0002\u0002\u0006\u007f\u0003\u0002\u0002\u0002",
    "\b\u0081\u0003\u0002\u0002\u0002\n\u0087\u0003\u0002\u0002\u0002\f\u009e",
    "\u0003\u0002\u0002\u0002\u000e\u0012\u0005\u0004\u0003\u0002\u000f\u0012",
    "\u0005\b\u0005\u0002\u0010\u0012\u0005\n\u0006\u0002\u0011\u000e\u0003",
    "\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0010\u0003",
    "\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002\u0013\u0014\b",
    "\u0003\u0001\u0002\u0014\u0015\u0007\u001d\u0002\u0002\u0015a\u0005",
    "\u0004\u0003*\u0016\u0017\u0007\u001e\u0002\u0002\u0017a\u0005\u0004",
    "\u0003)\u0018\u0019\u0007\u001f\u0002\u0002\u0019a\u0005\u0004\u0003",
    "(\u001a\u001b\u0007 \u0002\u0002\u001b\u001c\u00075\u0002\u0002\u001c",
    "\u001d\u0005\u0004\u0003\u0002\u001d\u001e\u0007\u0003\u0002\u0002\u001e",
    "\u001f\u0005\u0004\u0003\u0002\u001f \u00076\u0002\u0002 a\u0003\u0002",
    "\u0002\u0002!\"\u0007!\u0002\u0002\"a\u0005\u0004\u0003&#$\u0007\"\u0002",
    "\u0002$a\u0005\u0004\u0003%%&\u0007#\u0002\u0002&a\u0005\u0004\u0003",
    "$\'(\u0007$\u0002\u0002(a\u0005\u0004\u0003#)*\u0007%\u0002\u0002*a",
    "\u0005\u0004\u0003\"+,\u0007&\u0002\u0002,a\u0005\u0004\u0003!-.\u0007",
    "\'\u0002\u0002.a\u0005\u0004\u0003 /0\u0007(\u0002\u00020a\u0005\u0004",
    "\u0003\u001f12\u0007)\u0002\u00022a\u0005\u0004\u0003\u001e34\u0007",
    "*\u0002\u00024a\u0005\u0004\u0003\u001d56\u0007+\u0002\u00026a\u0005",
    "\u0004\u0003\u001c78\u0007,\u0002\u00028a\u0005\u0004\u0003\u001b9:",
    "\u0007-\u0002\u0002:;\u00075\u0002\u0002;<\u0005\u0004\u0003\u0002<",
    "=\u0007\u0003\u0002\u0002=>\u0005\u0004\u0003\u0002>?\u00076\u0002\u0002",
    "?a\u0003\u0002\u0002\u0002@A\u0007.\u0002\u0002Aa\u0005\u0004\u0003",
    "\u0019BC\u0007/\u0002\u0002Ca\u0005\u0004\u0003\u0018DE\u00070\u0002",
    "\u0002Ea\u0005\u0004\u0003\u0017FG\u00071\u0002\u0002Ga\u0005\u0004",
    "\u0003\u0016HI\u00072\u0002\u0002Ia\u0005\u0004\u0003\u0015JK\u0007",
    "3\u0002\u0002Ka\u0005\u0004\u0003\u0014LM\u00074\u0002\u0002Ma\u0005",
    "\u0004\u0003\u0013NO\u0007\u001b\u0002\u0002Oa\u0005\u0004\u0003\u0012",
    "PQ\u0007\u001c\u0002\u0002Qa\u0005\u0004\u0003\u0011Ra\u0005\f\u0007",
    "\u0002ST\u00075\u0002\u0002TU\u0005\u0004\u0003\u0002UV\u00076\u0002",
    "\u0002Va\u0003\u0002\u0002\u0002WY\u0007\u0017\u0002\u0002XZ\u0007\t",
    "\u0002\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Za\u0003",
    "\u0002\u0002\u0002[a\u0007\u001a\u0002\u0002\\]\u0007\u0015\u0002\u0002",
    "]a\u0005\u0004\u0003\u0004^_\u0007\u0014\u0002\u0002_a\u0005\u0004\u0003",
    "\u0003`\u0013\u0003\u0002\u0002\u0002`\u0016\u0003\u0002\u0002\u0002",
    "`\u0018\u0003\u0002\u0002\u0002`\u001a\u0003\u0002\u0002\u0002`!\u0003",
    "\u0002\u0002\u0002`#\u0003\u0002\u0002\u0002`%\u0003\u0002\u0002\u0002",
    "`\'\u0003\u0002\u0002\u0002`)\u0003\u0002\u0002\u0002`+\u0003\u0002",
    "\u0002\u0002`-\u0003\u0002\u0002\u0002`/\u0003\u0002\u0002\u0002`1\u0003",
    "\u0002\u0002\u0002`3\u0003\u0002\u0002\u0002`5\u0003\u0002\u0002\u0002",
    "`7\u0003\u0002\u0002\u0002`9\u0003\u0002\u0002\u0002`@\u0003\u0002\u0002",
    "\u0002`B\u0003\u0002\u0002\u0002`D\u0003\u0002\u0002\u0002`F\u0003\u0002",
    "\u0002\u0002`H\u0003\u0002\u0002\u0002`J\u0003\u0002\u0002\u0002`L\u0003",
    "\u0002\u0002\u0002`N\u0003\u0002\u0002\u0002`P\u0003\u0002\u0002\u0002",
    "`R\u0003\u0002\u0002\u0002`S\u0003\u0002\u0002\u0002`W\u0003\u0002\u0002",
    "\u0002`[\u0003\u0002\u0002\u0002`\\\u0003\u0002\u0002\u0002`^\u0003",
    "\u0002\u0002\u0002a|\u0003\u0002\u0002\u0002bc\f\u0010\u0002\u0002c",
    "d\t\u0002\u0002\u0002d{\u0005\u0004\u0003\u0011ef\f\u000f\u0002\u0002",
    "fg\t\u0003\u0002\u0002g{\u0005\u0004\u0003\u0010hi\f\u000e\u0002\u0002",
    "ij\u0007\u0011\u0002\u0002j{\u0005\u0004\u0003\u000fkl\f\r\u0002\u0002",
    "lm\t\u0004\u0002\u0002m{\u0005\u0004\u0003\u000eno\f\f\u0002\u0002o",
    "p\t\u0005\u0002\u0002p{\u0005\u0004\u0003\rqr\f\u000b\u0002\u0002rs",
    "\t\u0006\u0002\u0002s{\u0005\u0004\u0003\ftu\f\u0007\u0002\u0002uv\u0007",
    "\u0018\u0002\u0002v{\u0005\u0004\u0003\bwx\f\u0006\u0002\u0002xy\u0007",
    "\u0019\u0002\u0002y{\u0005\u0004\u0003\u0007zb\u0003\u0002\u0002\u0002",
    "ze\u0003\u0002\u0002\u0002zh\u0003\u0002\u0002\u0002zk\u0003\u0002\u0002",
    "\u0002zn\u0003\u0002\u0002\u0002zq\u0003\u0002\u0002\u0002zt\u0003\u0002",
    "\u0002\u0002zw\u0003\u0002\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003",
    "\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}\u0005\u0003\u0002\u0002",
    "\u0002~|\u0003\u0002\u0002\u0002\u007f\u0080\u0007\u0002\u0002\u0003",
    "\u0080\u0007\u0003\u0002\u0002\u0002\u0081\u0082\u00075\u0002\u0002",
    "\u0082\u0083\u0005\f\u0007\u0002\u0083\u0084\u00077\u0002\u0002\u0084",
    "\u0085\u0005\f\u0007\u0002\u0085\u0086\u00076\u0002\u0002\u0086\t\u0003",
    "\u0002\u0002\u0002\u0087\u008a\u0005\f\u0007\u0002\u0088\u0089\u0007",
    "7\u0002\u0002\u0089\u008b\u0005\f\u0007\u0002\u008a\u0088\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u000b\u0003\u0002",
    "\u0002\u0002\u008e\u009f\u0007\u000e\u0002\u0002\u008f\u009f\u0007\u000f",
    "\u0002\u0002\u0090\u0092\u0007\u000f\u0002\u0002\u0091\u0090\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0007\u0016\u0002\u0002\u0094\u0095\u0007\n",
    "\u0002\u0002\u0095\u0096\u0007\u000f\u0002\u0002\u0096\u0097\u0007\u000b",
    "\u0002\u0002\u0097\u0098\u0007\n\u0002\u0002\u0098\u0099\u0007\u000f",
    "\u0002\u0002\u0099\u009f\u0007\u000b\u0002\u0002\u009a\u009b\u0007\n",
    "\u0002\u0002\u009b\u009c\u0005\f\u0007\u0002\u009c\u009d\u0007\u000b",
    "\u0002\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e\u008e\u0003\u0002",
    "\u0002\u0002\u009e\u008f\u0003\u0002\u0002\u0002\u009e\u0091\u0003\u0002",
    "\u0002\u0002\u009e\u009a\u0003\u0002\u0002\u0002\u009f\r\u0003\u0002",
    "\u0002\u0002\n\u0011Y`z|\u008c\u0091\u009e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'^'", "'**'", "'%'", "'~'", "'//'", "'()'", 
                     "'{'", "'}'", null, null, null, null, null, null, "'*'", 
                     "'/'", "'+'", "'-'", "'\\frac'", null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     "'('", "')'", "','", null, null, "'\\placeholder'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "LENGTH_UNIT", "DEGREE_UNIT", "FLOAT", "INT", 
                      "MOD", "WHOLE", "MUL", "DIV", "ADD", "SUB", "FRAC", 
                      "PI", "EXPONENT", "NEGEXPONENT", "EULER", "SQRT", 
                      "SQR", "FLOOR", "CEIL", "ABS", "ROUNDK", "ROUND", 
                      "TRUNC", "SIN", "COS", "TAN", "COT", "SINH", "COSH", 
                      "TANH", "ARCSIN", "ARCCOS", "ARCTAN", "ARCTAN2", "ARCCOT", 
                      "EXP", "LN", "EEX", "LOG", "RAD", "DEG", "BRACKET_L", 
                      "BRACKET_R", "COMMA", "SEPARATOR", "WS", "PLACEHOLDER", 
                      "COM", "INVALID" ];

var ruleNames =  [ "calculator", "expression", "compileUnit", "coordinate", 
                   "enumlist", "number" ];

function CalculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CalculatorParser.prototype = Object.create(antlr4.Parser.prototype);
CalculatorParser.prototype.constructor = CalculatorParser;

Object.defineProperty(CalculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.LENGTH_UNIT = 10;
CalculatorParser.DEGREE_UNIT = 11;
CalculatorParser.FLOAT = 12;
CalculatorParser.INT = 13;
CalculatorParser.MOD = 14;
CalculatorParser.WHOLE = 15;
CalculatorParser.MUL = 16;
CalculatorParser.DIV = 17;
CalculatorParser.ADD = 18;
CalculatorParser.SUB = 19;
CalculatorParser.FRAC = 20;
CalculatorParser.PI = 21;
CalculatorParser.EXPONENT = 22;
CalculatorParser.NEGEXPONENT = 23;
CalculatorParser.EULER = 24;
CalculatorParser.SQRT = 25;
CalculatorParser.SQR = 26;
CalculatorParser.FLOOR = 27;
CalculatorParser.CEIL = 28;
CalculatorParser.ABS = 29;
CalculatorParser.ROUNDK = 30;
CalculatorParser.ROUND = 31;
CalculatorParser.TRUNC = 32;
CalculatorParser.SIN = 33;
CalculatorParser.COS = 34;
CalculatorParser.TAN = 35;
CalculatorParser.COT = 36;
CalculatorParser.SINH = 37;
CalculatorParser.COSH = 38;
CalculatorParser.TANH = 39;
CalculatorParser.ARCSIN = 40;
CalculatorParser.ARCCOS = 41;
CalculatorParser.ARCTAN = 42;
CalculatorParser.ARCTAN2 = 43;
CalculatorParser.ARCCOT = 44;
CalculatorParser.EXP = 45;
CalculatorParser.LN = 46;
CalculatorParser.EEX = 47;
CalculatorParser.LOG = 48;
CalculatorParser.RAD = 49;
CalculatorParser.DEG = 50;
CalculatorParser.BRACKET_L = 51;
CalculatorParser.BRACKET_R = 52;
CalculatorParser.COMMA = 53;
CalculatorParser.SEPARATOR = 54;
CalculatorParser.WS = 55;
CalculatorParser.PLACEHOLDER = 56;
CalculatorParser.COM = 57;
CalculatorParser.INVALID = 58;

CalculatorParser.RULE_calculator = 0;
CalculatorParser.RULE_expression = 1;
CalculatorParser.RULE_compileUnit = 2;
CalculatorParser.RULE_coordinate = 3;
CalculatorParser.RULE_enumlist = 4;
CalculatorParser.RULE_number = 5;

function CalculatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_calculator;
    return this;
}

CalculatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CalculatorContext.prototype.constructor = CalculatorContext;

CalculatorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CalculatorContext.prototype.coordinate = function() {
    return this.getTypedRuleContext(CoordinateContext,0);
};

CalculatorContext.prototype.enumlist = function() {
    return this.getTypedRuleContext(EnumlistContext,0);
};

CalculatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCalculator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.CalculatorContext = CalculatorContext;

CalculatorParser.prototype.calculator = function() {

    var localctx = new CalculatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalculatorParser.RULE_calculator);
    try {
        this.state = 15;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 13;
            this.coordinate();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 14;
            this.enumlist();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function TanContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TanContext.prototype = Object.create(ExpressionContext.prototype);
TanContext.prototype.constructor = TanContext;

CalculatorParser.TanContext = TanContext;

TanContext.prototype.TAN = function() {
    return this.getToken(CalculatorParser.TAN, 0);
};

TanContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
TanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitTan(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CoshContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CoshContext.prototype = Object.create(ExpressionContext.prototype);
CoshContext.prototype.constructor = CoshContext;

CalculatorParser.CoshContext = CoshContext;

CoshContext.prototype.COSH = function() {
    return this.getToken(CalculatorParser.COSH, 0);
};

CoshContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CoshContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCosh(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SqRootContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SqRootContext.prototype = Object.create(ExpressionContext.prototype);
SqRootContext.prototype.constructor = SqRootContext;

CalculatorParser.SqRootContext = SqRootContext;

SqRootContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
SqRootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSqRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegExponentContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegExponentContext.prototype = Object.create(ExpressionContext.prototype);
NegExponentContext.prototype.constructor = NegExponentContext;

CalculatorParser.NegExponentContext = NegExponentContext;

NegExponentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NegExponentContext.prototype.NEGEXPONENT = function() {
    return this.getToken(CalculatorParser.NEGEXPONENT, 0);
};
NegExponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitNegExponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExponentContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExponentContext.prototype = Object.create(ExpressionContext.prototype);
ExponentContext.prototype.constructor = ExponentContext;

CalculatorParser.ExponentContext = ExponentContext;

ExponentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExponentContext.prototype.EXPONENT = function() {
    return this.getToken(CalculatorParser.EXPONENT, 0);
};
ExponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitExponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Arctan2Context(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Arctan2Context.prototype = Object.create(ExpressionContext.prototype);
Arctan2Context.prototype.constructor = Arctan2Context;

CalculatorParser.Arctan2Context = Arctan2Context;

Arctan2Context.prototype.ARCTAN2 = function() {
    return this.getToken(CalculatorParser.ARCTAN2, 0);
};

Arctan2Context.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
Arctan2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArctan2(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulDivContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivContext.prototype = Object.create(ExpressionContext.prototype);
MulDivContext.prototype.constructor = MulDivContext;

CalculatorParser.MulDivContext = MulDivContext;

MulDivContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MulDivContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitMulDiv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArcsinContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArcsinContext.prototype = Object.create(ExpressionContext.prototype);
ArcsinContext.prototype.constructor = ArcsinContext;

CalculatorParser.ArcsinContext = ArcsinContext;

ArcsinContext.prototype.ARCSIN = function() {
    return this.getToken(CalculatorParser.ARCSIN, 0);
};

ArcsinContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArcsinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArcsin(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryPlusContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPlusContext.prototype = Object.create(ExpressionContext.prototype);
UnaryPlusContext.prototype.constructor = UnaryPlusContext;

CalculatorParser.UnaryPlusContext = UnaryPlusContext;

UnaryPlusContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryPlusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitUnaryPlus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArccotContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArccotContext.prototype = Object.create(ExpressionContext.prototype);
ArccotContext.prototype.constructor = ArccotContext;

CalculatorParser.ArccotContext = ArccotContext;

ArccotContext.prototype.ARCCOT = function() {
    return this.getToken(CalculatorParser.ARCCOT, 0);
};

ArccotContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArccotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArccot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArccosContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArccosContext.prototype = Object.create(ExpressionContext.prototype);
ArccosContext.prototype.constructor = ArccosContext;

CalculatorParser.ArccosContext = ArccosContext;

ArccosContext.prototype.ARCCOS = function() {
    return this.getToken(CalculatorParser.ARCCOS, 0);
};

ArccosContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArccosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArccos(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EulerContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EulerContext.prototype = Object.create(ExpressionContext.prototype);
EulerContext.prototype.constructor = EulerContext;

CalculatorParser.EulerContext = EulerContext;

EulerContext.prototype.EULER = function() {
    return this.getToken(CalculatorParser.EULER, 0);
};
EulerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitEuler(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CalNumberContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CalNumberContext.prototype = Object.create(ExpressionContext.prototype);
CalNumberContext.prototype.constructor = CalNumberContext;

CalculatorParser.CalNumberContext = CalNumberContext;

CalNumberContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
CalNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCalNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArctanContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArctanContext.prototype = Object.create(ExpressionContext.prototype);
ArctanContext.prototype.constructor = ArctanContext;

CalculatorParser.ArctanContext = ArctanContext;

ArctanContext.prototype.ARCTAN = function() {
    return this.getToken(CalculatorParser.ARCTAN, 0);
};

ArctanContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArctanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArctan(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesisContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesisContext.prototype.constructor = ParenthesisContext;

CalculatorParser.ParenthesisContext = ParenthesisContext;

ParenthesisContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesisContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitParenthesis(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AbsContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AbsContext.prototype = Object.create(ExpressionContext.prototype);
AbsContext.prototype.constructor = AbsContext;

CalculatorParser.AbsContext = AbsContext;

AbsContext.prototype.ABS = function() {
    return this.getToken(CalculatorParser.ABS, 0);
};

AbsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
AbsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitAbs(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SinhContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SinhContext.prototype = Object.create(ExpressionContext.prototype);
SinhContext.prototype.constructor = SinhContext;

CalculatorParser.SinhContext = SinhContext;

SinhContext.prototype.SINH = function() {
    return this.getToken(CalculatorParser.SINH, 0);
};

SinhContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SinhContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSinh(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RoundContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RoundContext.prototype = Object.create(ExpressionContext.prototype);
RoundContext.prototype.constructor = RoundContext;

CalculatorParser.RoundContext = RoundContext;

RoundContext.prototype.ROUND = function() {
    return this.getToken(CalculatorParser.ROUND, 0);
};

RoundContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
RoundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitRound(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TruncContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TruncContext.prototype = Object.create(ExpressionContext.prototype);
TruncContext.prototype.constructor = TruncContext;

CalculatorParser.TruncContext = TruncContext;

TruncContext.prototype.TRUNC = function() {
    return this.getToken(CalculatorParser.TRUNC, 0);
};

TruncContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
TruncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitTrunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PiContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PiContext.prototype = Object.create(ExpressionContext.prototype);
PiContext.prototype.constructor = PiContext;

CalculatorParser.PiContext = PiContext;

PiContext.prototype.PI = function() {
    return this.getToken(CalculatorParser.PI, 0);
};
PiContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitPi(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TanhContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TanhContext.prototype = Object.create(ExpressionContext.prototype);
TanhContext.prototype.constructor = TanhContext;

CalculatorParser.TanhContext = TanhContext;

TanhContext.prototype.TANH = function() {
    return this.getToken(CalculatorParser.TANH, 0);
};

TanhContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
TanhContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitTanh(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FloorContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloorContext.prototype = Object.create(ExpressionContext.prototype);
FloorContext.prototype.constructor = FloorContext;

CalculatorParser.FloorContext = FloorContext;

FloorContext.prototype.FLOOR = function() {
    return this.getToken(CalculatorParser.FLOOR, 0);
};

FloorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FloorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitFloor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LnContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LnContext.prototype = Object.create(ExpressionContext.prototype);
LnContext.prototype.constructor = LnContext;

CalculatorParser.LnContext = LnContext;

LnContext.prototype.LN = function() {
    return this.getToken(CalculatorParser.LN, 0);
};

LnContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
LnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitLn(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModContext.prototype = Object.create(ExpressionContext.prototype);
ModContext.prototype.constructor = ModContext;

CalculatorParser.ModContext = ModContext;

ModContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ModContext.prototype.MOD = function() {
    return this.getToken(CalculatorParser.MOD, 0);
};
ModContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitMod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogContext.prototype = Object.create(ExpressionContext.prototype);
LogContext.prototype.constructor = LogContext;

CalculatorParser.LogContext = LogContext;

LogContext.prototype.LOG = function() {
    return this.getToken(CalculatorParser.LOG, 0);
};

LogContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
LogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitLog(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubContext.prototype = Object.create(ExpressionContext.prototype);
AddSubContext.prototype.constructor = AddSubContext;

CalculatorParser.AddSubContext = AddSubContext;

AddSubContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AddSubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitAddSub(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CosContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CosContext.prototype = Object.create(ExpressionContext.prototype);
CosContext.prototype.constructor = CosContext;

CalculatorParser.CosContext = CosContext;

CosContext.prototype.COS = function() {
    return this.getToken(CalculatorParser.COS, 0);
};

CosContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCos(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DegContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DegContext.prototype = Object.create(ExpressionContext.prototype);
DegContext.prototype.constructor = DegContext;

CalculatorParser.DegContext = DegContext;

DegContext.prototype.DEG = function() {
    return this.getToken(CalculatorParser.DEG, 0);
};

DegContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitDeg(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SqrtContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SqrtContext.prototype = Object.create(ExpressionContext.prototype);
SqrtContext.prototype.constructor = SqrtContext;

CalculatorParser.SqrtContext = SqrtContext;

SqrtContext.prototype.SQRT = function() {
    return this.getToken(CalculatorParser.SQRT, 0);
};

SqrtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SqrtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSqrt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CotContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CotContext.prototype = Object.create(ExpressionContext.prototype);
CotContext.prototype.constructor = CotContext;

CalculatorParser.CotContext = CotContext;

CotContext.prototype.COT = function() {
    return this.getToken(CalculatorParser.COT, 0);
};

CotContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WholeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WholeContext.prototype = Object.create(ExpressionContext.prototype);
WholeContext.prototype.constructor = WholeContext;

CalculatorParser.WholeContext = WholeContext;

WholeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

WholeContext.prototype.WHOLE = function() {
    return this.getToken(CalculatorParser.WHOLE, 0);
};
WholeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitWhole(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryContext.prototype = Object.create(ExpressionContext.prototype);
UnaryContext.prototype.constructor = UnaryContext;

CalculatorParser.UnaryContext = UnaryContext;

UnaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RadContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RadContext.prototype = Object.create(ExpressionContext.prototype);
RadContext.prototype.constructor = RadContext;

CalculatorParser.RadContext = RadContext;

RadContext.prototype.RAD = function() {
    return this.getToken(CalculatorParser.RAD, 0);
};

RadContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
RadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitRad(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SqrContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SqrContext.prototype = Object.create(ExpressionContext.prototype);
SqrContext.prototype.constructor = SqrContext;

CalculatorParser.SqrContext = SqrContext;

SqrContext.prototype.SQR = function() {
    return this.getToken(CalculatorParser.SQR, 0);
};

SqrContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SqrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSqr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SinContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SinContext.prototype = Object.create(ExpressionContext.prototype);
SinContext.prototype.constructor = SinContext;

CalculatorParser.SinContext = SinContext;

SinContext.prototype.SIN = function() {
    return this.getToken(CalculatorParser.SIN, 0);
};

SinContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSin(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EexContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EexContext.prototype = Object.create(ExpressionContext.prototype);
EexContext.prototype.constructor = EexContext;

CalculatorParser.EexContext = EexContext;

EexContext.prototype.EEX = function() {
    return this.getToken(CalculatorParser.EEX, 0);
};

EexContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
EexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitEex(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowContext.prototype = Object.create(ExpressionContext.prototype);
PowContext.prototype.constructor = PowContext;

CalculatorParser.PowContext = PowContext;

PowContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
PowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitPow(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CeilContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CeilContext.prototype = Object.create(ExpressionContext.prototype);
CeilContext.prototype.constructor = CeilContext;

CalculatorParser.CeilContext = CeilContext;

CeilContext.prototype.CEIL = function() {
    return this.getToken(CalculatorParser.CEIL, 0);
};

CeilContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CeilContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCeil(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpContext.prototype = Object.create(ExpressionContext.prototype);
ExpContext.prototype.constructor = ExpContext;

CalculatorParser.ExpContext = ExpContext;

ExpContext.prototype.EXP = function() {
    return this.getToken(CalculatorParser.EXP, 0);
};

ExpContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitExp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RoundkContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RoundkContext.prototype = Object.create(ExpressionContext.prototype);
RoundkContext.prototype.constructor = RoundkContext;

CalculatorParser.RoundkContext = RoundkContext;

RoundkContext.prototype.ROUNDK = function() {
    return this.getToken(CalculatorParser.ROUNDK, 0);
};

RoundkContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
RoundkContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitRoundk(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalculatorParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, CalculatorParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        switch(this._input.LA(1)) {
        case CalculatorParser.FLOOR:
            localctx = new FloorContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 18;
            this.match(CalculatorParser.FLOOR);
            this.state = 19;
            this.expression(40);
            break;
        case CalculatorParser.CEIL:
            localctx = new CeilContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 20;
            this.match(CalculatorParser.CEIL);
            this.state = 21;
            this.expression(39);
            break;
        case CalculatorParser.ABS:
            localctx = new AbsContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 22;
            this.match(CalculatorParser.ABS);
            this.state = 23;
            this.expression(38);
            break;
        case CalculatorParser.ROUNDK:
            localctx = new RoundkContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.match(CalculatorParser.ROUNDK);
            this.state = 25;
            this.match(CalculatorParser.BRACKET_L);
            this.state = 26;
            this.expression(0);
            this.state = 27;
            this.match(CalculatorParser.T__0);
            this.state = 28;
            this.expression(0);
            this.state = 29;
            this.match(CalculatorParser.BRACKET_R);
            break;
        case CalculatorParser.ROUND:
            localctx = new RoundContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 31;
            this.match(CalculatorParser.ROUND);
            this.state = 32;
            this.expression(36);
            break;
        case CalculatorParser.TRUNC:
            localctx = new TruncContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 33;
            this.match(CalculatorParser.TRUNC);
            this.state = 34;
            this.expression(35);
            break;
        case CalculatorParser.SIN:
            localctx = new SinContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 35;
            this.match(CalculatorParser.SIN);
            this.state = 36;
            this.expression(34);
            break;
        case CalculatorParser.COS:
            localctx = new CosContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 37;
            this.match(CalculatorParser.COS);
            this.state = 38;
            this.expression(33);
            break;
        case CalculatorParser.TAN:
            localctx = new TanContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 39;
            this.match(CalculatorParser.TAN);
            this.state = 40;
            this.expression(32);
            break;
        case CalculatorParser.COT:
            localctx = new CotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 41;
            this.match(CalculatorParser.COT);
            this.state = 42;
            this.expression(31);
            break;
        case CalculatorParser.SINH:
            localctx = new SinhContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 43;
            this.match(CalculatorParser.SINH);
            this.state = 44;
            this.expression(30);
            break;
        case CalculatorParser.COSH:
            localctx = new CoshContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 45;
            this.match(CalculatorParser.COSH);
            this.state = 46;
            this.expression(29);
            break;
        case CalculatorParser.TANH:
            localctx = new TanhContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 47;
            this.match(CalculatorParser.TANH);
            this.state = 48;
            this.expression(28);
            break;
        case CalculatorParser.ARCSIN:
            localctx = new ArcsinContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 49;
            this.match(CalculatorParser.ARCSIN);
            this.state = 50;
            this.expression(27);
            break;
        case CalculatorParser.ARCCOS:
            localctx = new ArccosContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 51;
            this.match(CalculatorParser.ARCCOS);
            this.state = 52;
            this.expression(26);
            break;
        case CalculatorParser.ARCTAN:
            localctx = new ArctanContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 53;
            this.match(CalculatorParser.ARCTAN);
            this.state = 54;
            this.expression(25);
            break;
        case CalculatorParser.ARCTAN2:
            localctx = new Arctan2Context(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 55;
            this.match(CalculatorParser.ARCTAN2);
            this.state = 56;
            this.match(CalculatorParser.BRACKET_L);
            this.state = 57;
            this.expression(0);
            this.state = 58;
            this.match(CalculatorParser.T__0);
            this.state = 59;
            this.expression(0);
            this.state = 60;
            this.match(CalculatorParser.BRACKET_R);
            break;
        case CalculatorParser.ARCCOT:
            localctx = new ArccotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 62;
            this.match(CalculatorParser.ARCCOT);
            this.state = 63;
            this.expression(23);
            break;
        case CalculatorParser.EXP:
            localctx = new ExpContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 64;
            this.match(CalculatorParser.EXP);
            this.state = 65;
            this.expression(22);
            break;
        case CalculatorParser.LN:
            localctx = new LnContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 66;
            this.match(CalculatorParser.LN);
            this.state = 67;
            this.expression(21);
            break;
        case CalculatorParser.EEX:
            localctx = new EexContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 68;
            this.match(CalculatorParser.EEX);
            this.state = 69;
            this.expression(20);
            break;
        case CalculatorParser.LOG:
            localctx = new LogContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 70;
            this.match(CalculatorParser.LOG);
            this.state = 71;
            this.expression(19);
            break;
        case CalculatorParser.RAD:
            localctx = new RadContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 72;
            this.match(CalculatorParser.RAD);
            this.state = 73;
            this.expression(18);
            break;
        case CalculatorParser.DEG:
            localctx = new DegContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 74;
            this.match(CalculatorParser.DEG);
            this.state = 75;
            this.expression(17);
            break;
        case CalculatorParser.SQRT:
            localctx = new SqrtContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 76;
            this.match(CalculatorParser.SQRT);
            this.state = 77;
            this.expression(16);
            break;
        case CalculatorParser.SQR:
            localctx = new SqrContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 78;
            this.match(CalculatorParser.SQR);
            this.state = 79;
            this.expression(15);
            break;
        case CalculatorParser.T__7:
        case CalculatorParser.FLOAT:
        case CalculatorParser.INT:
        case CalculatorParser.FRAC:
            localctx = new CalNumberContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 80;
            this.number();
            break;
        case CalculatorParser.BRACKET_L:
            localctx = new ParenthesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 81;
            this.match(CalculatorParser.BRACKET_L);
            this.state = 82;
            this.expression(0);
            this.state = 83;
            this.match(CalculatorParser.BRACKET_R);
            break;
        case CalculatorParser.PI:
            localctx = new PiContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 85;
            this.match(CalculatorParser.PI);
            this.state = 87;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            if(la_===1) {
                this.state = 86;
                this.match(CalculatorParser.T__6);

            }
            break;
        case CalculatorParser.EULER:
            localctx = new EulerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 89;
            this.match(CalculatorParser.EULER);
            break;
        case CalculatorParser.SUB:
            localctx = new UnaryContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 90;
            this.match(CalculatorParser.SUB);
            this.state = 91;
            this.expression(2);
            break;
        case CalculatorParser.ADD:
            localctx = new UnaryPlusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 92;
            this.match(CalculatorParser.ADD);
            this.state = 93;
            this.expression(1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 122;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 120;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 96;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 97;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__1 || _la===CalculatorParser.T__2)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 98;
                    this.expression(15);
                    break;

                case 2:
                    localctx = new ModContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 99;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 100;
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__3 || _la===CalculatorParser.MOD)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 101;
                    this.expression(14);
                    break;

                case 3:
                    localctx = new WholeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 103;
                    this.match(CalculatorParser.WHOLE);
                    this.state = 104;
                    this.expression(13);
                    break;

                case 4:
                    localctx = new SqRootContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 105;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 106;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__4 || _la===CalculatorParser.T__5)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 107;
                    this.expression(12);
                    break;

                case 5:
                    localctx = new MulDivContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 108;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 109;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.MUL || _la===CalculatorParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 110;
                    this.expression(11);
                    break;

                case 6:
                    localctx = new AddSubContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 111;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 112;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.ADD || _la===CalculatorParser.SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 113;
                    this.expression(10);
                    break;

                case 7:
                    localctx = new ExponentContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 114;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 115;
                    this.match(CalculatorParser.EXPONENT);
                    this.state = 116;
                    this.expression(6);
                    break;

                case 8:
                    localctx = new NegExponentContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 117;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 118;
                    this.match(CalculatorParser.NEGEXPONENT);
                    this.state = 119;
                    this.expression(5);
                    break;

                } 
            }
            this.state = 124;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function CompileUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_compileUnit;
    return this;
}

CompileUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompileUnitContext.prototype.constructor = CompileUnitContext;

CompileUnitContext.prototype.EOF = function() {
    return this.getToken(CalculatorParser.EOF, 0);
};

CompileUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCompileUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.CompileUnitContext = CompileUnitContext;

CalculatorParser.prototype.compileUnit = function() {

    var localctx = new CompileUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalculatorParser.RULE_compileUnit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(CalculatorParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CoordinateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_coordinate;
    return this;
}

CoordinateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CoordinateContext.prototype.constructor = CoordinateContext;

CoordinateContext.prototype.BRACKET_L = function() {
    return this.getToken(CalculatorParser.BRACKET_L, 0);
};

CoordinateContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

CoordinateContext.prototype.COMMA = function() {
    return this.getToken(CalculatorParser.COMMA, 0);
};

CoordinateContext.prototype.BRACKET_R = function() {
    return this.getToken(CalculatorParser.BRACKET_R, 0);
};

CoordinateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCoordinate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.CoordinateContext = CoordinateContext;

CalculatorParser.prototype.coordinate = function() {

    var localctx = new CoordinateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CalculatorParser.RULE_coordinate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(CalculatorParser.BRACKET_L);
        this.state = 128;
        this.number();
        this.state = 129;
        this.match(CalculatorParser.COMMA);
        this.state = 130;
        this.number();
        this.state = 131;
        this.match(CalculatorParser.BRACKET_R);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EnumlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_enumlist;
    return this;
}

EnumlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnumlistContext.prototype.constructor = EnumlistContext;

EnumlistContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

EnumlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitEnumlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.EnumlistContext = EnumlistContext;

CalculatorParser.prototype.enumlist = function() {

    var localctx = new EnumlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CalculatorParser.RULE_enumlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.number();
        this.state = 136; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 134;
            this.match(CalculatorParser.COMMA);
            this.state = 135;
            this.number();
            this.state = 138; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===CalculatorParser.COMMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;


 
NumberContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FloatContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloatContext.prototype = Object.create(NumberContext.prototype);
FloatContext.prototype.constructor = FloatContext;

CalculatorParser.FloatContext = FloatContext;

FloatContext.prototype.FLOAT = function() {
    return this.getToken(CalculatorParser.FLOAT, 0);
};
FloatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitFloat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntAndFracContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntAndFracContext.prototype = Object.create(NumberContext.prototype);
IntAndFracContext.prototype.constructor = IntAndFracContext;

CalculatorParser.IntAndFracContext = IntAndFracContext;

IntAndFracContext.prototype.FRAC = function() {
    return this.getToken(CalculatorParser.FRAC, 0);
};

IntAndFracContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CalculatorParser.INT);
    } else {
        return this.getToken(CalculatorParser.INT, i);
    }
};

IntAndFracContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitIntAndFrac(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Brackets2NumberContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Brackets2NumberContext.prototype = Object.create(NumberContext.prototype);
Brackets2NumberContext.prototype.constructor = Brackets2NumberContext;

CalculatorParser.Brackets2NumberContext = Brackets2NumberContext;

Brackets2NumberContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
Brackets2NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitBrackets2Number(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntContext(parser, ctx) {
	NumberContext.call(this, parser);
    NumberContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntContext.prototype = Object.create(NumberContext.prototype);
IntContext.prototype.constructor = IntContext;

CalculatorParser.IntContext = IntContext;

IntContext.prototype.INT = function() {
    return this.getToken(CalculatorParser.INT, 0);
};
IntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalculatorParser.NumberContext = NumberContext;

CalculatorParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CalculatorParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FloatContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 140;
            this.match(CalculatorParser.FLOAT);
            break;

        case 2:
            localctx = new IntContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 141;
            this.match(CalculatorParser.INT);
            break;

        case 3:
            localctx = new IntAndFracContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 143;
            _la = this._input.LA(1);
            if(_la===CalculatorParser.INT) {
                this.state = 142;
                this.match(CalculatorParser.INT);
            }

            this.state = 145;
            this.match(CalculatorParser.FRAC);
            this.state = 146;
            this.match(CalculatorParser.T__7);
            this.state = 147;
            this.match(CalculatorParser.INT);
            this.state = 148;
            this.match(CalculatorParser.T__8);
            this.state = 149;
            this.match(CalculatorParser.T__7);
            this.state = 150;
            this.match(CalculatorParser.INT);
            this.state = 151;
            this.match(CalculatorParser.T__8);
            break;

        case 4:
            localctx = new Brackets2NumberContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 152;
            this.match(CalculatorParser.T__7);
            this.state = 153;
            this.number();
            this.state = 154;
            this.match(CalculatorParser.T__8);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CalculatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalculatorParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 5);
		case 7:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalculatorParser = CalculatorParser;
