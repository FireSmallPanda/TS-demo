export {}

class Person {
    name: string; // init name
    public readonly age: number;  // = 15
    protected  gender: boolean; // 
    constructor(name:string,age:number){
        this.name = name
        this.age = age
        this.gender = false
    }
    /**
     * 说一句话
     * @param msg  信息 
     */
    sayHi(msg:string):void{
        console.log(msg);
    }
}

class Student extends Person{
    constructor(name:string,age:number){
        super(name,age);
        this.gender
    }
}



