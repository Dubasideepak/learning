/*
Q) Write a program to print squaress of odd numbers till 10 odds?
Output:
1,3,5,9
1,9,25,81
*/
for(var i=1; i<=10; i = i+1 ){
    if(i % 2){
    var square =i*i;
console.log(square);
    }
}

/*
Q) Write a program to print numbers using loop in descending order?
Output:
5  4 3 2 1
*/
for(var i=5; i>=1; i--){
        console.log(i);
    }
/*    
 Q) Write a program to print Factorial of number?
 Output:
 5*4*3*2*1=120
 */
var number =5;
var factorial =1;
for(let  i = number; i >= 1;i--){
    factorial *= i;
}
console.log("factorial of " +  number  +  "is:"  + factorial);
/*
Q) Write a program to print fibanocci series till 50?
Output:
*/
var a = 0, b = 1,
temp;
console.log(a);
while (b <= 50){
    console.log(b);
    temp = a+b;
    a = b;
    b =temp;
}