//  Loop assignment 

// Q1. Write a javascript program to construct the following pattern , using a nested for loop ?

//     *
//     * *
//     * * *
//     * * * *
//     * * * * *


for(let i = 1; i <= 5; i++){
    let pattern = ""
    for(let j = 1; j <= i; j++){
       pattern = pattern + "*" + " "
    }
    console.log(pattern);
 }