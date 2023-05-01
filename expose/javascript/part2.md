1. At line 12, it will print the last value that i was in the for loop, which is 3.
2. At line 13, it will print the last known value of discountedPrice, so 300 * (1-.5) = 150. Therefore, it will print 150 to the console.
3. At line 14, it will print the last finalPrice, which is Math.round(150 * 100) / 100 or 150. Therefore, it will print 150 to the console.
4. This would return an array that has the values [50, 100, 150]. This is because for each time it runs through an iteration of the for loop it is pushing that finalPrice to the discounted array that it returns at the end of all for loop iterations.
5. This would cause an error because it is trying to console.log(i), but i was declared inside the for loop statement. The for loop conditions () still counts as being declared inside the for loop.
6. This would cause an error because discountedPrice was initialized using let, and so we can not access it outside of the for loop block.
7. At line 14, this would print 150 to the console because we initialized the finalPrice variable outside of the for loop block, therefore we can access it at any point in the function.
8. This would return an array that has the values [50, 100, 150]. This is because for each time it runs through an iteration of the for loop it is pushing that finalPrice to the discounted array that it returns at the end of all for loop iterations.
9. This would cause an error because we used let to initialize our i variable inside the for loop conditions, which technically means it is in the block scope of the for loop. Therefore, we can't access it outside of the for loop block and this would cause an error.
10. At line 12, this would print 3 because the prices.length is given at the beginning and we initialized the variable using const, so we can access it in the whole scope of the function. Also, the prices array has 3 values,  so the length is 3.
11. This would return an array that has the values [50, 100, 150]. This is because for each time it runs through an iteration of the for loop it is pushing the discountedPrice to the discounted array that it returns at the end of all for loop iterations.
12. 
A. student.name <br>
B. student['Grad Year'] <br>
C. student.greeting() <br>
D. student['Favorite Teacher].name <br>
E. student.courseLoad[0] <br>
13. 
A. Output: '32' <br>
The output was like this because the integer 2 is converted to a string and concantenated with '3'. <br>
B. Output: 1 <br>
The output is 1 because the '3' is converted from a string type to an integer  type and regular subtraction is performed.  <br>
C. Output: 3 <br>
The output is 3 because null's value is converted to 0, and therefore 3 + 0 = 3. <br>
D. Output: true <br>
The output is true because == can compare types that aren't the same, so '2' is converted to its equivalent integer 2 using something like Number('2'). Consequently, 2 == 2 returns true <br>
E. Output: 4 <br>
The output is 4 because true maps to 1 and doing 1 + 3 = 4. <br>
F. Output: 0 <br>
The output is 0 because false maps to 0, and null maps to 0 as well. Therefore, 0 + 0 = 0. <br>
G. Output: '3undefined' <br>
The output is '3undefined' because undefined is mapped to a string, which just concantenates both strings together. <br>
H. Output: NaN <br>
The output is Nan because undefined numeric conversion is NaN, and 3 - NaN is NaN. <br>
14. 
A. Output: true <br>
The output is true because '2' is mapped to an integer, and so 2 > 1 is true. <br>
B. Output: true
The output is true because the first character of '2' is greater than the first character of '12'. <br>
C. Output: true <br>
The output is true because javascript converts '2' to its equivalent integer 2, which makes the comparison true. <br>
D. Output: false <br>
The output is false because 2 is an integer type, and '2' is a string type. There is strict equality checking when using ===, so it considers different data types different unlike ==. <br>
E. Output: false <br>
The output is false because false maps to 0, and 0 is not equal to 2. <br>
F. Output: true <br>
The output is true because Boolean() maps any number that isn't 0 to true, which maps 2 to true. Therefore, true === true is true. <br>
15. The difference between the == and the === are that the === must be of the exact same data type while the == can compare two different types by converting types if needed. <br>
17. The result would be [2, 4, 6] because once in the for loop it pushes the value of doSomething(currentNumber), which multiplies the current number by 2. Therefore, it pushes 2, 4, 6 in that order since we get the array 1, 2, 3. <br>
18. The output of the code above would be <br>
Output:  <br>
1 <br>
4 <br>
3 <br>
2 <br>
