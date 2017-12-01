let Person = require("../../src/practice_3/person.js") ;
class Worker extends Person{
    constructor(name, age){
        super(name, age); // 调用父类的constructor(name, age)
    }
    introduce(){
        return 'I am a Worker. I have a job.';
    }
}
module.exports= Worker;
