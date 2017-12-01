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
        return Student.klass.number;
    }

}
Class.leader = '';
module.exports= Class;
