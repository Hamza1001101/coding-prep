// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/**
 * * solution 1 
 * @param {*} array 
 * @param {*} size 
 */

const chunk = (array, size) => {
  const chunked = [];
  for (let num of array) {
    //*This is undefined for the first run
    const last = chunked[chunked.length - 1];
    /**
     * * if last element doesn't exist, or if its length
     * * is equal to chunck size
     */
    if (!last || last.length === size) {
      //*push a new subarrat (a new chunk)
      chunked.push([num]);
    } else {
      last.push(num);
    }
  }
  return chunked;
};

const chunck2 = (arr, size) => {
  let index = 0;
  const chunked = [];
  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
};

// /**
//  * * We using the slice method here. 
//  * @param {*} array 
//  * @param {*} size 
//  */
// function chunk(array, size) {
//   const chunked = [];

//   //* index variable. this is going to be changing over time
//     let index = 0;
    
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));

//     //* increment by size not by one
//     index += size;
//   }
//   return chunked;
//}


module.exports = chunck2;
