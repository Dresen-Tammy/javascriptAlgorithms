function binarySearch(arr, val){
    // input array sorted and value positive/neg, empty?
    // output index or -1
    
    let left = 0;
    let right = arr.length -1;
    
    while(left < right) {
        let middle = Math.ceil((right + left)/2);
        if (arr[middle] === val) {
            return middle;
        } else if (arr[middle] > val) {
            right = middle;
        } else {
            left = middle;
        }
    }
    return -1;
  }