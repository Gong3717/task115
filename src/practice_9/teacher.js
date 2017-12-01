let Person = require("../../src/practice_9/person.js");
class Teacher extends Person{
    constructor(id, name, age, klass){
        super(id, name, age); // 调用父类的constructor(name, age)
        this.klass = klass;
    }
    introduce(){
        if(!this.klass){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }else{
            return super.introduce() + ' I am a Teacher. I teach Class ' + this.klass.number +'.';
        }
    }
}
module.exports= Teacher;
