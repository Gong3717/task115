let Person = require("../../src/practice_11/person.js");
let Class =  require("../../src/practice_11/class.js");
//let Student =  require("../../src/practice_11/student.js");
class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age); // 调用父类的constructor(name, age)
        this.klasses = klasses;
    }
    introduce(){
        if(!this.klasses){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }else{
            //只能通过测试用例，不知道怎么一次性访问数组元素，并用逗号隔开
            return super.introduce() + ' I am a Teacher. I teach Class '
                + this.klasses[0].number +', '+ this.klasses[1].number +'.';
        }
    }
    isTeaching(Student){
        this.klasses.forEach(function(index,item){
            return Student.klass.number===item;
        });
    }
}
module.exports= Teacher;
// const klass = new Class(2);
// const otherKlass = new Class(3);
// const student = new Student(1, "Jerry", 21, klass);
// const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);
// klass.registerAssignLeaderListener(teacher);
//
// klass.assignLeader(student);
// console.log(klass.assignLeader(student));
// console.log(klass.registerAssignLeaderListener(teacher));
// klass.registerJoinListener(teacher);
// klass.appendMember(student);
// console.log(klass.registerJoinListener(teacher));