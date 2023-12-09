//if condition
  //ex1
var num = 10;

  if (num > 0)
  {
    console.log("true");
  }
  else
  {
    console.log("false");
  }

  //ex2
var condition1 = 100;
var condition2 = 200;
 var condition3 = (condition1 - condition2);
 var condition4 = 600;
 if (condition3 > condition1)
  {
    console.log("true");
  }
  else{
    console.log("false");
  }
   
  // Logical Operators
  //two types and their symbols -- AND(&&),OR(||)
   //  AND &&
   // T & T = T
   // T & F = F
   // F & T = F
   // F & F = F
            //and
        var value = condition2 > condition1 & condition4 ;
          if (value){
            console.log("this is correct");
          }
          else {
            console.log("this is wrong");
          }
          //or
          var value = condition2 > condition1 || condition4 ;
          if (value){
            console.log("this is correct");
          }
          else {
            console.log("this is wrong");
          }