/*
Challenge 1
The Collatz Conjecture goes like this:

Take any number n. If n is even, divide it by 2, if n is odd, multiply it by 3 and add 1. 
Repeat the process indefinitely, and you’ll eventually reach 1.

Given a num variable, can you print all the numbers in num’s Collatz sequence until 1 is reached? 
Print the numbers space-separated (and each test case on its own line).
*/
function collatzConjecture(num){
    while(num!=1){
        if(num %2 ==0){
            num = num/2;
            console.log(num);
        }
        else if(num %2 !=0){
            num = (num*3)+1;
            console.log(num);
        }
    }
}
collatzConjecture(15);

/*
Challenge 2
How to remove all duplicates from a given string?

Write a program to remove all the duplicate characters from a given input String, 
like, if the given String is “Java” then the output should be “Jav”. 
The second or further occurrence of duplicates should be removed.
*/

function duplicateStrRemove(){
    
}



/*
Challenge 3
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
function palindromic(){


}



/*
Challenge 4
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/




/*
Challenge 5
Write a function to reverse the words in a given String sentence. 
For example, if the input is “Javascript is best,” then your function should print 
“best is Javascript”. 
There is no restriction on preserving white space.
*/

function reverse(str){
    var res = str.split(" ");
    res.reverse();
    var almost = res.join();
    console.log(almost.replace(',', ' '));
}

reverse("Hello World John");

