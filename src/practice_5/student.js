let Person = require("../../src/practice_5/person.js") ;
class Student extends Person{
    constructor(name, age, klass){
        super(name, age); // 调用父类的constructor(name, age)
        this.klass = klass;
    }
    introduce(){
        return super.introduce() + ' I am a Student. '  + 'I am at Class ' + this.klass + '.';
    }
}
module.exports= Student;
