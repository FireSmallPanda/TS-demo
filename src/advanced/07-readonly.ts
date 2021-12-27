export {}
// 只读
interface People {
    name: string
    age: number,
    dog:{
        name:string
        age:number
    }
}

const xiaoling: Readonly<People> = {
    name: '小凌', // 只读
    age: 18, // 只读
    dog:{
        age:1,
        name:'大黄'
    }
}

// 但是是浅层的。
xiaoling.name = '大凌' // 无法分配到 "name" ，因为它是只读属性。
xiaoling.dog.age = 2 // 可以

