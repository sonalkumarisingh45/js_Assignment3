

//Q2.  Iterate through all the numbers from 1 to 45 . Print all the following :
//
// for multiple of 3 print "fizz"
// for multiple of 5 print "Buzz"
// for multiple of 3 and 5 print "FizzBuzz"




for(let num = 1; num <= 45; num++){
    if(num % 3 == 0){
        console.log("Fizz");
    }
    else if(num % 5 == 0){
        console.log("Buzz");
    }
    else if((num % 3 == 0) && (num % 5 == 0))
        console.log("FizzBuzz");
    else{
        console.log(num);
    }
}