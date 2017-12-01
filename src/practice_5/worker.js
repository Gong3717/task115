let Person = require("../../src/practice_5/person.js") ;
class Worker extends Person{
    constructor(name, age){
        super(name, age); // 调用父类的constructor(name, age)
    }
    introduce(){
        return super.introduce() + ' I am a Teacher. I have a job.';
    }
}
module.exports= Worker;
