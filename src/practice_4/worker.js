let Person = require("../../src/practice_4/person.js") ;
class Worker extends Person{
    constructor(name, age){
        super(name, age); // 调用父类的constructor(name, age)
    }
    introduce(){
        return super.introduce() + ' I am a Worker. I have a job.';
    }
}
module.exports= Worker;
