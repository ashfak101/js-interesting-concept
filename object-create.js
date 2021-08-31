// Using Object Literal

const student = { name: 'Sakib Al Hasan', job: 'Cricketer'};
// constuctor
const person =new Object();

//
const human = Object.create(student);

// console.log(human);
// class
class People {
    constructor (name,age){
        this.name=name;
        this.age =age
    }
}
const peop =new People('Jhankhar',12);
console.log(peop);
// function
function Manus(name){
    this.name=name;
}
const man=new Manus('kader');

console.log(man)
