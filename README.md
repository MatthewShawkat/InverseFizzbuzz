InverseFizzbuzz
===============

A solution for a harder alternative to Fizzbuzz. Inverse Fizzbuzz.


Introduction
------------
The [Fizzbuzz](http://en.wikipedia.org/wiki/Fizz_buzz) problem is used as an interview programming exercise. The rules are simple:

Write a program that

* returns 'fizz' when the input is divisible by 3
* returns 'buzz' when the input is divisible by 5
* returns 'fizzbuzz' when the input is divisible by 3 and 5

Most programmers might find this task to be easy, so a harder problem is introduced:

Write an inverse Fizzbuzz

* return the shortest sequence of numbers that can generate the given list of words
* for example:
	* for ['fizz'], the shortest sequence is [3]
	* for ['fizz', 'buzz'], the shortest sequence is [9, 10]. The sequence [3, 4, 5] is valid too but it is longer than [9, 10]
	
	
Solution
--------
Provided as a javascript object, with Jasmine spec file to test the correctness of the algorithm
	  
