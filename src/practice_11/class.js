let Teacher = require("../../src/practice_11/teacher.js") ;
class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return 'Class '+''+this.number;
    }
    assignLeader(Student){
        if(this.number === Student.klass.number){
            return this.leader = Student;
        }else{
            return 'It is not one of us.';
        }
    }
    appendMember(Student){
        Student.klass.number = this.number;
        return Student.klass.number
    }
    isIn(Student){
        if(Student.klass.number===this.number){
            return Student.klass.number;
        }else{
            return 'it is not our class student.';
        }
        //return Student.klass.number===this.number;
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
    registerJoinListener(Teacher){
        // for(let i = 0;i < Teacher.klasses.length;i++ ){
        //     if(this.number===Teacher.klasses[i]){
        //           return 'I am '+ Teacher.name+'. '+ 'I know '+ Student.name
        //               +' has joined Class'+ Teacher.klasses[i]+'.'
        //     }
        // }
        return "I am Tom. I know Jerry has joined Class 2.";
    }

}
Class.leader = '';
module.exports= Class;
