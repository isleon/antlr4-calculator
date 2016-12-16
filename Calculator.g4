// **************************************
// *									*
// *  Last change: 2016-09-18			*
// *  Grammar for calculating			*
// *  formulas.							*
// *  � 2015 Georg Dangl				*
// *  info@georgdangl.de				*
// *									*
// **************************************	
// *									*
// *  Grammar written for ANTLR4		*
// *  www.antlr.org						*
// **************************************
	
grammar Calculator;

/*
 * Parser Rules
 */

// Main entry for the calculator
calculator : expression compileUnit?;

// Possible expression types
expression	:	FLOOR  expression 									#Floor			//	Round down to zero accuracy
			|	CEIL  expression 									#Ceil			//	Round up to zero accuracy
			|	ABS  expression 									#Abs			//	Absolute value
			|	ROUNDK '(' expression ';' expression ')'			#Roundk			//	Round expr_1 with expr_2 accuracy
			|	ROUND  expression 									#Round			//	Round with zero accuracy
			|	TRUNC  expression 									#Trunc			//	Trim decimal digits
			|	SIN  expression 									#Sin			//	Sinus
			|	COS  expression 									#Cos			//	Cosinus
			|	TAN  expression 									#Tan			//	Tangens
			|	COT  expression										#Cot			//	Cotangens	
			|	SINH  expression 									#Sinh			//	Sinus Hypererbolicus
			|	COSH  expression 									#Cosh			//	Cosinus Hyperbolicus
			|	TANH  expression 									#Tanh			//	Tangens Hyperbolicus
			|	ARCSIN  expression 									#Arcsin			//	Inverse Sinus
			|	ARCCOS  expression 									#Arccos			//	Inverse Cosinus
			|	ARCTAN  expression 									#Arctan			//	Inverse Tangens
			|	ARCTAN2 '(' expression ';' expression ')'			#Arctan2		//	Atan2
			|	ARCCOT  expression 									#Arccot			//	Inverse Cotangens
			|	EXP  expression 									#Exp			//	e ^ expr
			|	LN  expression 										#Ln				//	Logarithm to e
			|	EEX  expression 									#Eex			//	10 ^ expr
			|	LOG  expression 									#Log			//	Logarithm to 10
			|	RAD  expression 									#Rad			//	Angle to radians (360� base)
			|	DEG  expression 									#Deg			//	Radians to angle (360� base)
			|	SQRT expression 									#Sqrt			//	Square root
			|	SQR expression 										#Sqr			//	Square product
			|	expression op = ('^'|'**') expression				#Pow			//	expr_1 to the expr_2 th power
			|	expression (MOD | '%' ) expression					#Mod			//	Modulo
			|	expression WHOLE expression							#Whole			//	Whole part of division rest
			|	expression op = ('~'|'//') expression				#SqRoot			//	expr_1 nth root of expr_2
			|	expression op = ('*'|'/') expression				#MulDiv			//	Multiplication or division
			|	expression op = ('+'|'-') expression				#AddSub			//	Addition or subtraction
			|	number												#CalNumber			//	Single integer or float number
			|	'(' expression ')'									#Parenthesis	//	Expression within parentheses
			|	PI '()'?											#Pi				//	Mathematical constant pi = 3,141593
			|	expression EXPONENT expression						#Exponent		//  Exponent, e.g. 10e+43
			|	expression NEGEXPONENT expression					#NegExponent	//  Inverted Exponent, e.g. 10e-43
			|	EULER												#Euler			//	Mathematical constant e = 2,718282
			|	'-' expression										#Unary			//	Unary minus sign (negative numbers)
			|	'+' expression										#UnaryPlus		//	Unary plus sign (positive numbers)
			;

// End of file
compileUnit	:	EOF;

/*
 * Lexer Rules
 */

number		:	FLOAT 												#Float
			|	INT													#Int
			| 	INT? FRAC '{'  INT '}' '{' INT '}'  				#IntAndFrac
			| 	'{' number '}'         								# Brackets2Number
			;
FLOAT		:	INT (','|'.') DIGIT*
			|	(','|'.') INT
			;
INT			:	DIGIT+									;
DIGIT		:	[0-9]									;
MOD			:	[Mm][Oo][Dd]							;
WHOLE		:	[Dd][Ii][Vv]							;
MUL			:	'*'										;
DIV			:	'/'										;
ADD			:	'+'										;
SUB			:	'-'										;
FRAC  		: 	'\\frac'								;
PI			:	[Pp][Ii]								;
EXPONENT	:	[Ee] '+'								;
NEGEXPONENT	:	[Ee] '-'								;
EULER		:	[Ee]									;
SQRT		:	[Ss][Qq][Rr][Tt]						;
SQR			:	[Ss][Qq][Rr]							;
FLOOR		:	[Ff][Ll][Oo][Oo][Rr]					;
CEIL		:	[Cc][Ee][Ii][Ll]						;
ABS			:	[Aa][Bb][Ss]							;
ROUNDK		:	[Rr][Oo][Uu][Nn][Dd][Kk]				;	
ROUND		:	[Rr][Oo][Uu][Nn][Dd]					;
TRUNC		:	[Tt][Rr][Uu][Nn][Cc]					;
SIN			:	[Ss][Ii][Nn]							;
COS			:	[Cc][Oo][Ss]							;
TAN			:	[Tt][Aa][Nn]							;
COT			:	[Cc][Oo][Tt]							;
SINH		:	[Ss][Ii][Nn][Hh]						;
COSH		:	[Cc][Oo][Ss][Hh]						;
TANH		:	[Tt][Aa][Nn][Hh]						;
ARCSIN		:	[Aa][Rr][Cc][Ss][Ii][Nn]				;
ARCCOS		:	[Aa][Rr][Cc][Cc][Oo][Ss]				;
ARCTAN		:	[Aa][Rr][Cc][Tt][Aa][Nn]				;
ARCTAN2		:	[Aa][Rr][Cc][Tt][Aa][Nn][2]				;
ARCCOT		:	[Aa][Rr][Cc][Cc][Oo][Tt]				;
EXP			:	[Ee][Xx][Pp]							;
LN			:	[Ll][Nn]								;
EEX			:	[Ee][Ee][Xx]							;
LOG			:	[Ll][Oo][Gg]							;
RAD			:	[Rr][Aa][Dd]							;
DEG			:	[Dd][Ee][Gg]							;
WS			:	(' '|'\t'|'\r'|'\n')		->	skip	;
COM			:	COMMENT						->	skip	;
INVALID		:	.										;

fragment COMMENT	:	'/*' .*? '*/'
					|	'\'' .*? '\''
					|	'"'.*?'"'
					;