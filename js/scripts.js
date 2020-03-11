/**
 * Let's see what some of our newer array methods are...
 */

/**
 * Find Method:
 */
var myArray = [ 'Hello, World!', 2, 3, true, 5, null, 38 ];
var myValue = myArray.find( function ( element ) { return element > 4; } );
console.log( myValue ); // Returns 5, an element from our array! Only gives us one item back.

// For checking if an element exists in the array.
var isMyStringInside = myArray.find( function ( element ) { return element === 'Hello, World!'; } );
console.log( isMyStringInside ); // We would get the matching element.

// Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find( function ( element ) { return element === 'Goodbye, Everyone :('; } );
console.log( isMyStringInside ); // Not found :(

/**
 * .findIndex()
 */

// Still searching for an element!
var findAnIndex = myArray.findIndex( function ( element ) { return element === 2; } );
console.log( findAnIndex ); // But this time, it returned the value's INDEX.

/**
 * .entries()
 */

var pairing = myArray.entries();
console.log( pairing );
console.log( pairing.next().value );    // shows index position, shows value in index
console.log( pairing.next().value );    // we can keeping bumping to the next item
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );      

/*
.from() method:
*/

var fromArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(fromArray); // oh geeze, thats a 26 element array now. 

var fromArray2 = Array.from('Hello Stephane!');
console.log(fromArray); // even spaces and special characters will be captured as elements!

/* 
.filter() method
*/

var filtered = myArray.filter ( function ( element ) { 
    return element > 4;
});

console.log( filtered ); // all matches returned! 5 and 38!

/* 
.reduce() method
*/

var reduceResult = myArray.reduce ( function ( accumulator, currentVal ) { 
    return accumulator + currentVal
});
console.log( reduceResult ); // concats all the characters together  result. Hello, World!23true5null38

console.log([ 1, 2, 3 , 4 ].reduce( function (a , v ){
    return a + v;} ) );
    // because we have numbers in here, they are being added (mathematically)
    // result 10

/* 
.let and const method
*/

var x = 3; // standard variable declaration. Dunction-scoped.
let y = 7; // let is a block-scope
const z = 36;   // const is block-scoped, but re-assignment is not allowed

// z = 16; Not allowed! const must remain with its original assignment. 
console.log( z );

y = 13; // allowed! var and let are allow assignment.
console.log( y );

for ( var myVar = 0; myVar < 10; myVar++){
    console.log( 'for loop iteration...' );
}
console.log( 'myVar = '+myVar );

// let is block scoppred... it lives and dies in any block in the loop.

for ( let myNewVar = 0; myNewVar < 10; myNewVar++){
    console.log( 'for loop iteration...' );
    console.log( 'myNewVar = '+myNewVar );
}
// console.log( 'myNewVar = '+myNewVar ); // we can't access it outside of the block


/* 
const can't be re-assigned... but its isides can be manipulated?!?!
*/

const myObj = {

    name: 'Henry',
    age: 18
}

myObj.name = 'Sandy'; // We can updated the PROPERTIES or array ELEMENTS inside of a onst-declared variable?
myObj.hobbies = [];
myObj.hobbies.push( 'Long walks on the beach', 'drinking before noon', 'broswing /r/funny' ); 
myObj.age = [];
myObj.age.push( 25 ); 

console.log( myObj );

/* 
Let's shake things up with: FUNCIONS
New syntax...
*/

// Classic function declaration...
function myFunction(a, b) {
    return Number( a ) + Number ( b );
} 
console.log( myFunction (3,7) );

// ES6 or javascript 6...
myFunction = ( a , b ) => Number( a ) + Number ( b );
console.log( myFunction (3,7) );

// bigger function...``
myOtherFunction = ( a , b ) => {    
    // use curly braces for larger, more comples operations.
    const myAnwer =  Number( a ) + Number ( b );
    return myAnwer;
}
console.log( myOtherFunction ( 34 , 6 ));

/* 
Function default parameter values...
*/

// we cann set defaults , to prevent errors in case nothing passed in for a parameter!
addNums = ( x = 0 , y = 0 ) => x + y;

console.log( addNums() ); // no arugments! but our default values kick in!

/* 
Rest parameter...
*/

displayArray = (...args ) => {   // ...arg will capture any number of arguments that we pass!
    console.log ( args ); // it can be called by the name we had inbetween our parenthesis.
    return args; // in console write it as so " findHighNum(10,20,13); "
}


findHighNum = (...args ) => {   // ...arg will capture any number of arguments that we pass!
    console.log ( args ); // it can be called by the name we had inbetween our parenthesis.
    return args; // in console write it as so " findHighNum(10,20,13); "
}


addAllNum = (...nums ) => nums.reduce ((a , v ) => a + v );
console.log (addAllNum (64 , 6 , 10 ) );


/**
 * Template Literals
 */

const helloVar = 'e-hug, ⊂(◉‿◉)つ ';
const sampleName = 'Samuel';

const myNewString= `Hey there, my name is ${sampleName}; i\'d like to give you a big \"${helloVar}"!!`; //
console.log(myNewString);

/**
 * Spread Operator
 */

const newArray = ['hello', ',', ' ', 'world','!'];
console.log( newArray );
console.log( ...newArray ); // brought the values in the arrary together

