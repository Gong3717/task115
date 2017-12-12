//let Student =  require("../../src/practice_8/Student.js");
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
        }
    }

}
//Class.leader = '';
module.exports= Class;
