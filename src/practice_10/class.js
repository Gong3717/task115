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
        if(Student.klass!=this){
            return false;
        }else{
            return true;
        }
    }
}
//Class.leader = '';
module.exports= Class;
