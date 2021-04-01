function makeANumber() {
    myNum = 4;
    return myNum;
}

console.log(makeANumber())

function makeAnInteger() {
    myInt = 42;
    return myInt;
}

function makeAFloat() {
    myFloat = 3.14;
    return myFloat;
}

function makeZero() {
    zilch = 0;
    return 0;
}

function makeNothing() {
    var huh;
    return huh;
}

function makeBoolean() {
    var myBool = true;
    return myBool;
}

function makeTrue() {
    var yep = true;
    return yep;
}

function makeFalse() {
    var nope = false;
    return nope;
}

function makeNull() {
    var nothingMuch = null;
    return nothingMuch;
}

function helloWorld() {
    return "Hello, world!";
}

function helloName(name) {
    return ("hello ," + name + "!")
}

function abstractLength() {
    var tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
        'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
        'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
        'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'
    return tarPitAbstract.length;
}

function makeLoud() {
    var chorus = "Who let the dogs out?";
    return chorus.toUpperCase();
}

function makeQuiet(str) {
    return str.toLowerCase();
}


function add99(num) {
    return 99 + num;
}

function add(one, two) {
    return one + two;
}

function subtract(n, m) {
    return n - m;

}

function multiply(n, m) {
    return n * m;
}

function divide(n, m) {
    return n / m;
}

function mod(n, m) {
    return n % m;
}

function threeFruits() {
    var fruits = ['Apple', 'Banana', 'Cherry']
    return fruits;
}

function multipleTypes() {
    var diverseArray = ['Skateboard', null, 8.75, 'Eiffel Twoer', 44, 7, true, null];
    return diverseArray;
}

function indexAccess() {
    var myArray = ['Paul', 'Ringo', 'John', 'George', 'Mike', 'Ike'];
    return myArray[2];
}

function useLength() {
    var arr = ['a', 'b', 'c'];
    return arr.length();
}

function usePush() {
    var arr = ['a', 'b', 'c'];
    arr.push('d');
    return arr;
}

function useIndexOf() {
    var arr = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T'];
    return arr.indexOf('T');
}


function useJoin() {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    return arr.join('-');
}





console.log(useJoin())