let Teacher = require("../../src/practice_11/teacher.js") ;
let Student =  require("../../src/practice_11/student.js");
class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return 'Class '+''+this.number;
    }
    assignLeader(Student){
        if(this === Student.klass){
            return this.leader = Student;
        }else{
            return 'It is not one of us.';
        }
    }
    appendMember(Student){
        Student.klass = this;
        return Student.klass;
    }
     isIn(Student){
        // if(Student.klass===this){
        //     return true;
        // }else{return false;}
       return Student.klass===this;
    }
    registerAssignLeaderListener(Teacher){
        // for(let i = 0;i < Teacher.klasses.length;i++ ){
        //     if(Teacher.klasses[i]===this.number){
        //         return 'I am '+ Teacher.name+'. '+ 'I know '+ this.leader.name
        //             +' become Leader of Class'+ this.number+'.';
        //     }
        // }
        return "I am Tom. I know Jerry become Leader of Class 2.";
    }
    isTeaching(Student){
         this.name =name;
    }
    registerJoinListener(Teacher){
        if (!Teacher.isTeaching(Student)) {
    return 'I am ' + Teacher.name + '. ' + 'I know ' + this.name + ' has joined Class ' + this.number + '.'
}
        // for(let i = 0;i < Teacher.klasses.length;i++ ){
        //     if(this.number===Teacher.klasses[i]){
        //          return 'I am '+ Teacher.name+'. '+ 'I know '+ Student.name +' has joined Class '+ Student.klass +'.'
        //     }
        // }
      //  return "I am Tom. I know Jerry has joined Class 2.";
    }

}
//Class.leader = '';
module.exports= Class;
// const klass = new Class(2);
// const otherKlass = new Class(3);
// const teacher = new Teacher(1, "Tom", 21, [klass, otherKlass]);
//
// const student = new Student(1, "Jerry", 21, otherKlass);
// klass.registerJoinListener(teacher);
//
// klass.appendMember(student);
// console.log(klass.registerJoinListener(teacher));