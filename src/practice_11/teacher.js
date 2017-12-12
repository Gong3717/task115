let Person = require("../../src/practice_11/person.js");
let Class =  require("../../src/practice_11/class.js");
let Student =  require("../../src/practice_11/student.js");
class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age); // 调用父类的constructor(name, age)
        this.klasses = klasses;
    }
    introduce(){
        if(!this.klasses){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }else{

            var result = this.klasses.map(function(item) {
                return item.number;
            });
            return super.introduce() + ' I am a Teacher. I teach Class '
                + result.join(', ')+'.';
        }
    }
    //some
    isTeaching(Student){
        var result;
        this.klasses.map(function(item){
             if(item.isIn(Student)!=true) {result=false;}
             else{result=true;}
        });
        return result;
    }
}
module.exports= Teacher;
// const klass = new Class(2);
// const otherKlass = new Class(3);
//  const student = new Student(1, "Jerry", 21, klass);
//  const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);
// // klass.registerAssignLeaderListener(teacher);
// console.log(teacher.isTeaching(student));
//测试isTeaching
// const klass = new Class(2);
// const otherKlass = new Class(3);
// const otherKlass1 = new Class(4);
// const student = new Student(1, "Jerry", 21, otherKlass);
// console.log(klass.isIn(student));
// const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);
// console.log(teacher.isTeaching(student));

const klass = new Class(2);
const otherKlass = new Class(3);
const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);

const student = new Student(1, "Jerry", 21, otherKlass);
console.log(klass.isIn(student));
console.log(teacher.isTeaching(student));
console.log(klass.registerJoinListener(teacher));
