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


String.prototype.substrings = function() {
  let subs = [];
  for(let i = 0; i < this.length; i++){
    for(let j = i; j < this.length; j++){
      subs.push(this.slice(i, j + 1));
    }
  }
  return subs;
};

const s = "cat";
console.log(s.substrings());
