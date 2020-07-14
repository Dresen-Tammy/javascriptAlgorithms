const factorial = (num) => {
    console.log(num);
    if (num === 1) return 1;
    return num * factorial(num - 1);

}

factorial(10);


const power = (num, pow) => {
  if (pow === 0) return 1;
  console.log(pow);
  return num * power(num,pow - 1);
}

console.log(power(2,0));
console.log(power(2,2));


function collectOddValues(arr) {
  let newArr = [];  // new empty array each time
  
  if(arr.length === 0) {  // base case to return at end
    return newArr;  
}


    if(arr[0] % 2 !== 0) {  // if odd, push value onto newArray in index 0
        newArr.push(arr[0]);
    }


    // here is recursion newArr is being concatenated with recursive next array, so each new odd value will be added
    newArr = newArr.concat(collectOddValues(arr.slice(1)));  


    return newArr;  // in the end, the concatenated recursive value is returned.
}


collectOddValues([1,2,3,4,5,6,7]);