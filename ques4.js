

/*
Get sum of two array ... actually the sum of all their elements 
P.S each array includes only the integer numbers . Output is a number too. 
*/

let array1 = [3,5,22,5,7,2,45,75,89,21,2];
let array2 = [9,2,42,55,71,22,4,5,90,25,26];

let arrSum1 = 0;
let arrSum2 = 0;


for(let i = 0; i < array1.length; i++){
    arrSum1 = arrSum1 + array1[i]
}
    console.log(arrSum1);

for(let j = 0; j < array2.length; j++){
    arrSum2 = arrSum2 + array2[j]
}
    console.log(arrSum2);

    let totalsum = arrSum1 + arrSum2

    console.log(totalsum);