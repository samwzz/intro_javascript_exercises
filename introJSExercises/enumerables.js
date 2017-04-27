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
