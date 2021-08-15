export {}
interface EatAndRun{
    eat():void;
    run():void;
}

class Cat implements EatAndRun{
    eat():void{
        console.log('优雅的进餐')
    }
    run():void{
        console.log('轻轻地跑')
    }
}

class Dog implements EatAndRun {
    eat(): void{
        console.log('大口的进餐')
    }
    
}