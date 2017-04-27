function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function(){
  return `${this.owner} loves ${this.name}`;
};

const cat1 = new Cat('Jameson', 'Garfield');
const cat2 = new Cat('Garfield', 'Quebec');
const cat3 = new Cat('Dexterity', 'Ambidexterious');

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());
console.log(cat3.cuteStatement());

Cat.prototype.meow = function(){
  return "MEOW!";
};

console.log(cat1.meow());
console.log(cat2.meow());
console.log(cat3.meow());

cat1.meow = function(){
  return "BARK!";
};

console.log(cat1.meow());
console.log(cat2.meow());
console.log(cat3.meow());
