export {}

// 重写
class Animal {
    public eat() {
        console.log("这是一个吃的方法")
    }
}
class Dog extends Animal {
    public eat() {
        console.log("这是一个小狗吃的方法")
    }
}
let dog: Dog = new Dog()
dog.eat()

/**
 *  发生在父类与子类之间
    方法名，参数列表，返回类型（除过子类中方法的返回类型是父类中返回类型的子类）必须相同
    访问修饰符的限制一定要大于被重写方法的访问修饰符（public>protected>private)
 */


// 重载
class Demo {
    // #region 声明
    public log(): void;
    public log(arg1: string): void;
    public log(arg1: number, arg2: string): void;
    // #endregion

    // 实现
    log(...args:any[]) {

    }
}

let logDemo = new Demo();
logDemo.log();
logDemo.log(1,'2');



logDemo.log(1,'2','3');

// 在一个类中，同名的方法如果有不同的参数列表（参数类型不同、参数个数不同甚至是参数顺序不同）则视为重载。