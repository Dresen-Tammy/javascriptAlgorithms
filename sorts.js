const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

}

const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--){
      noSwap = true;
      for (let j = 0; j < i - 1; j++) {
          if (arr[j] > arr[j+1]) {
              swap(arr, j, j+1);
              noSwap = false; 
          }
      }
      if (noSwap) {
          break;
    }
  }
  return arr;
}

console.log(bubbleSort([5,3,4,1,2]));
console.log(bubbleSort([1,2,3,5,10,4,9,7,6]));


const insertionSort = (arr) => {
  let currVal;
  let j;
  for (let i = 1; i < arr.length; i++) {
      currVal = arr[i];
      for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
          arr[j+1] = arr[j];
      }
      arr[j+1] = currVal;
  }
  return arr;
}



const selectionSort = (arr) => {
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
      minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIdx]) {
              minIdx = j;
          }
      }
      if (minIdx !== i) {
          [arr[i],arr[minIdx]] = [arr[minIdx],arr[i]];
      }
  }
  return arr 
}

console.log(selectionSort([3,5,7,2,4,6,8,1]))



function mergeSort(array) {
  // break up array in halves until empty or 1 array length
  // merge back using merge sort to full array 
  // return array

  if (array.length <= 1) {
      return array;
  }
  //let mid = Math.floor(arr.length/2);
  //let left = mergeSort(arr.slice(0,mid));
  //let right = mergeSort(arr.slice(mid));

  return merge(mergeSort(array.slice(0, Math.floor(array.length/2))), mergeSort(array.slice(array.length/2)));

}


function merge(array1, array2) {
  // input 2 sorted arrays
  // todo: create an empty array, take a look at smallest
  // output 1 sorted array 

  let newArray = [];
  let i= 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
      // compare and add each to new array
      if (array1[i] < array2[j]) {
          newArray.push(array1[i]);
          i++;     
      } else {
          newArray.push(array2[j]);
          j++;
      }
  }

  while (i < array1.length) {
      newArray.push(array1[i]);
      i++;
  }

  while (j < array2.length) {
      
      newArray.push(array2[j]);
      j++;
  }

  return newArray;
}


console.log(mergeSort([1,22,14]));
console.log(mergeSort([1,22,14, 99, 18, 22, 24, 82, 2]));


const quickSort = (arr, left = 0, right = arr.length - 1) => {
      if (left < right) { // checks for base case
          let pivotIndex = pivot(arr, left, right);
          quickSort(arr,left,pivotIndex - 1);
          quickSort(arr, pivotIndex+1, right);
      }
      return arr;
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
      // pivot is start
      let pidx = start;
  
      for (let i = start + 1; i <= end; i++) {
          if (arr[start] > arr[i]) {
              pidx++;
              [arr[pidx], arr[i]] = [arr[i], arr[pidx]];
          }
      }
      [arr[start], arr[pidx]] = [arr[pidx], arr[start]];
      console.log(arr, pidx);
      return pidx;
}


console.log(quickSort([5, 4, 7, 3, 8, 1, 2, 6])); // 4
console.log(quickSort([80, -2, 23, 50, 19, 110, 92, 8, 300]));


/*
* input: unsorted array
* output: sorted array
*/
function radixSort(arr) {
  // find the longest number
  // repeat loop that many times
  // for each number in array
  // create bucket of arrays
  // getDigit(num, i)
  // push number in bucket[i]
  // flatten buckets
  // return array

  let maxDigits = getMaxLength(arr);
  for (let i = 0; i < maxDigits; i++) {
      const buckets = Array.from({length: 10}, () => []);
      arr.forEach(num => {
          let digit = getDigit(num, i);
          buckets[digit].push(num);
      });
      arr = buckets.flat();
  }
  return arr;
}

console.log(radixSort([1,5,6325,63,6788, 326,4,3737,859753,64,32,2]));

/* 
* input: number and place value
* compute: find digit in place value
* output: digit 
*/
function getDigit(num, place) {
    // remove negs
    // divide by 10^place to put in 0nes
    // floor to remove decimals
    // %10 to remove other digits
     
    return Math.floor(Math.abs(num) / (Math.pow(10, place))) % 10;
}

console.log(getDigit(12345, 2)); // 3
console.log(getDigit(12345, 5)); // 0

/* 
* input: number
* compute: find number length
* output: length of number
*/
function getNumberLength(num) {
    // if 0 return 1
    // remove negs
    // log10 +1
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(getNumberLength(12345)) // 5

/* 
* input: array of numbers
* output: number, length of longest value
*/
function getMaxLength(arr) {
   let longest = 0;
    arr.forEach((num)=> {
        longest = Math.max(longest, getNumberLength(num));
    });
    return longest;
}

console.log(getMaxLength([1,253,3256,32,3])); // 4