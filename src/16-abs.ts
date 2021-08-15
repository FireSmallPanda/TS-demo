export {}

// 抽象类只可继承
abstract class Animal {
    eat(): void{
        console.log('可以吃')
    }
    abstract run() :void; // 抽象方法必须实现 
}

class Dog extends Animal{

    run(): void {
        throw new Error("Method not implemented.")
    }

}








let an = new Animal()