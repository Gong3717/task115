let Person = require("../../src/practice_10/person.js");
let Class =  require("../../src/practice_10/class.js");
class Teacher extends Person{
    constructor(id, name, age, klasses){
        super(id, name, age); // 调用父类的constructor(name, age)
        this.klasses = klasses;
    }
    introduce(){
        if(!this.klasses){
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }else{
            //只能通过测试用例，不知道怎么一次性访问数组元素，并用逗号隔开
           //  var result=[];
           // for( let i = 0 ; i < this.klasses.length;i++){
           //    result.push(this.klasses[i].number);
           // }
           var result = this.klasses.map(function(item) {
              return item.number;
           });
           //改成map
          // console.log(result);
           // return super.introduce() + ' I am a Teacher. I teach Class '
           //     + this.klasses[0].number +', '+ this.klasses[1].number +'.';
            return super.introduce() + ' I am a Teacher. I teach Class '
                + result.join(', ') +'.';
        }
    }
    isTeaching(Student){
       this.klasses.map(function(item){
           return item === Class;
       });
    }
}
module.exports= Teacher;
//  klasses = [new Class(2), new Class(3)];
// const teacher = new Teacher(1, "Tom", 21,klasses);
// const introduce = teacher.introduce();
// console.log(introduce);
