let Person = require("../../src/practice_7/person.js");
//let Class =  require("../../src/practice_7/class.js");
class Student extends Person{
    constructor(name, age , klass={} ){
        super(name, age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+' I am a Student. '+'I am at Class '+ this.klass.number+'.';
    }
}
module.exports = Student;

// klass = new Class(2);
// const student = new Student("Tom", 21, klass);
// console.log(student.introduce());
// console.log(student.klass);
// console.log(klass);