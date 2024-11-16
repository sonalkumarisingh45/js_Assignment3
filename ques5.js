
// Using a for loop output the elements in the reverse order 

let arr = ["hii","this","is","sonal.","and","my luck no is ",3];
let reversedArray = [];

for(let i = arr.length - 1; i >= 0; i--){
    reversedArray.push(arr[i])
     
}
console.log(reversedArray);