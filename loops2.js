/*
Q) Develop a JavaScript program thet checks if a given
   two-digit number is a multiple of 5.
   Ex Input:50
      Expected Output:Yes
Hint:Use the modulo operator to check if the number is divisible by 5.
*/
var i = 50;
if(i%5==0)
{
    console.log("Yes");
}
    else{
        console.log("no");
}
/*
Q) Implement a JavaScript program thet checks if a given
   two-digit number is a multiple of 7.
   Ex Input:35
      Expected Output:Yes
Hint:Use the modulo operator to check if the number is divisible by 5.
*/
var i = 35;
if(i%7==0)
{
    console.log("Yes");
}
    else{
        console.log("no");
}
/*
Q) Write JavaScript function that finds the largest among three numbers and prints the result.
 Ex Input: 9,21,14
 Expected output: 21
 Hint: Use if conditions
 */

   function findLargestNumber(num1, num2, num3) {
     var largest = num1;
     if (num2 > largest){
        largest = num2; 
     }
     if (num3 > largest){
        largest = num3;
     }
     return largest;
    }
    var input1 = 9;
    var input2 = 21;
    var input3 = 14;
  var largestNumber = findLargestNumber(input1, input2, input3);
  console.log("The largest number is: " + largestNumber);
  /*
  Q) Write a JavaScript program that prints the sum of all even numbers from 1 to 20.
   Hint: Use a for loop and if condition to identify and sum teh even numbers.
   */
  
   function sumOfEvenNumbers(){
    let sum = 0;
   for(let i = 1; i <= 20; i++){
    if(i%2 ===0 ){
        sum += i;
    }
}
   return sum;
}
 const result = sumOfEvenNumbers();
 console.log(result);
/*
 Q) Implement a JS program that prints a right angled triangle pattern using asterisks(*) based on a given number of rows.
 ex input:4
 expected op:*
            **
            ***
            ****
hint: Use nested for loops to control the pattern
*/
 function printRightAngleTriangle(rows){
     for(let i = 1; i <= rows; i++){
        let pattern = '*';
        for(let j = 1; j <=i; j++){
            pattern +='*';
        }
        console.log(pattern);
     }
 }
 const numberOfRows =4;
 printRightAngleTriangle(numberOfRows);

