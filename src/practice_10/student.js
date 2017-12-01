let Person = require("../../src/practice_10/person.js");
let Class =  require("../../src/practice_10/class.js");
class Student extends Person{
    constructor(id, name, age , klass){
        super(id, name, age);
        this.klass = klass;
    }
    introduce(){
        if(!this.klass.leader){
            return super.introduce()+' I am a Student. '+'I am at Class '+ this.klass.number+'.';
        }else{
            return super.introduce()+' I am a Student. '+'I am Leader of Class '+ this.klass.number+'.';
        }
    }
}
module.exports = Student;
const klass = new Class(2);
const otherKlass = new Class(3);

const student = new Student(1, "Jerry", 21, otherKlass);
//klass.appendMember(student);
console.log(student.klass);
console.log(klass);
console.log(student);