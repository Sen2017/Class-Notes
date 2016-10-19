// slides http://slides.com/ifang/javascriptbasics#/0/20

// this is a comment
/* This is a block comment */

// variables store data

	// this is a string
		var myName = "Sen";
		// alphanumeric not a number or boolean
		// must be in quotes

	// this is an integer
		var myAge = "17";

	// boolean type
		var booleanExample = true;

	// unassigned variable
		undefined

	// not a number
		NaN

	// array

	// objects

var camelCaseExample 
	// can't have spaces
	// do note begin with numbers

//conditional statements
	if (true) {}

// function is an execute statement

	// annonymous function
	function (){

	}

	// named function

	function nameOfFunction (){
		console.log
	}

	// invoking a function
	nameOfFunction();

	// parameters
	function hello (a, b) {
		console.log(a + b);
	}

	hello(10, 11);

	function createGreeting (name, age){
		if (age < 32){
				console.log("hello " + name);
				return "hello " + name;
		} else {
			console.log("hello Mr. " + name);
			return "hello Mr. " + name;
			return "hello Mrs. " + name;
		}
	}