const uniq = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
};

const twoSum = (array) => {
  let pairs = [];
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === 0){
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

const myTranspose = (array) => {
  let transposed = [];
  let subarray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      subarray.push(array[j][i]);
    }
    transposed.push(subarray);
    subarray = [];
  }
  return transposed;
};
