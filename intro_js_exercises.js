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

Array.prototype.myEach = function(cb){
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(cb){
  let newArr = [];
  this.myEach(el => newArr.push(cb(el)));
  return newArr;
};

const a = [1,2,3];
console.log(a.myMap(el => el * 2));

Array.prototype.myInject = function(cb){
  let sum = this[0];
  this.slice(1).myEach(el => {
    sum += cb(el);
    return sum;
  });
  return sum;
};

const b = [1,2,3];
console.log(b.myInject(el => el * 2));

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if (this[i] > this[j]) {
        let first = this[i];
        let second = this[j];
        this[i] = second;
        this[j] = first;
        sorted = false;
      }
    }
  }
  return this;
};

const c = [4, 5, 2, 6, 9, 3, 1];
console.log(c.bubbleSort());


const substrings = function(string) {
  let subs = [];
  for(let i = 0; i < string.length; i++){
    for(let j = i; j < string.length; j++){
      subs.push(string.slice(i, j + 1));
    }
  }
  return subs;
};

const s = "cat";
console.log(substrings(s));


function range(start, end) {
  if (end <= start) {
    return [end];
  }
  return range(start, end - 1).concat(end);
}

console.log(range(1, 5));

function sumArray(array){
  if (array.length === 1){
    return array[0];
  }

  return array[0] + sumArray(array.slice(1));
}

console.log(sumArray([1,2,3,4]));

function exp1(base, n){
  if(n === 0){
    return 1;
  }

  return base * exp1(base, n - 1);
}

console.log(exp1(10, 3));


function exp2(base, n){
  if(n === 0){
    return 1;
  }

  if (n % 2 === 0) {
    let result = exp2(base, n / 2);
    return result * result;
  } else {
    let result = exp2(base, (n - 1) / 2);
    return base * result * result;
  }
}

console.log(exp2(10,3));

function fibs1(n) {
  let fibs = [0, 1];
  if (n <= 2) {
    return fibs.slice(0, n + 1);
  }
  while (fibs.length < n) {
    let last = fibs[fibs.length - 1];
    let secondLast = fibs[fibs.length - 2];
    fibs.push(secondLast + last);
  }

  return fibs;
}

console.log(fibs1(5));

const fibs2 = (n) => {
  if (n <= 2) {
    return [0, 1].slice(0, n + 1);
  }

  let fibs = fibs2(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
};

console.log(fibs2(6));

Array.prototype.bsearch = function(target) {

  if (this.length === 0){
    return null;
  }
  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid);
  let right = this.slice(mid + 1);
  // console.log(mid);
  // console.log(left);
  // console.log(right);
  if (this[mid] === target) {
    return mid;
  } else if (target < this[mid]){
    return left.bsearch(target);
  } else if (target > this[mid]){
    let result = right.bsearch(target);
      if (result === null){
        return null;
      } else {
        return mid + result + 1;
      }
  } else {
    return null;
  }
};

const sortedArray = [1,2,3,4,5,6,7,8,9];
console.log([1].bsearch(1));
console.log(sortedArray.bsearch(1));
console.log(sortedArray.bsearch(5));
console.log(sortedArray.bsearch(8));
console.log(sortedArray.bsearch(1234));


Array.prototype.mergeSort = function() {
  if (this.length <= 0){
    return [];
  } else if (this.length === 1){
    return this;
  }


  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid);
  let right = this.slice(mid);

  let sortedLeft = left.mergeSort();
  let sortedRight = right.mergeSort();

  return merge(sortedLeft, sortedRight);

};

const merge = function(left, right) {
  let merged = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left).concat(right);
};

console.log([5,3,8,23,4,1].mergeSort());


Array.prototype.subsets = function() {
  if (this.length <= 0){
    return [[]];
  }

  let subs = this.slice(1).subsets();
  let first = this[0];
  let result = subs.map(sub => sub.concat(first));
  return subs.concat(result);
};

console.log([1,2,3].subsets());
