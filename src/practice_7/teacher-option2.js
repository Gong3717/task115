let Person = require("../../src/practice_7/person.js") ;
let Class =  require("../../src/practice_7/class.js");
let Student = require("../../src/practice_7/student.js") ;
class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age); // 调用父类的constructor(name, age)
        this.klass = klass;
    }
    introduce(){
        if(!this.klass){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }else{
            return super.introduce() + ' I am a Teacher. I teach Class ' + this.klass.number +'.';
        }
    }
    introduceWith(Student){
        if(this.klass === Student.klass){
            return super.introduce() + ' I am a Teacher. I teach ' + Student.name+'.';
        } else{
            return super.introduce() + " I am a Teacher. I don't teach "+ Student.name+'.';
        }

    }
}
module.exports= Teacher;
