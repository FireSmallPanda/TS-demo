export {}
// 选择
interface People {
    name: string
    age: number
}

type somePeople = Pick<People,'name'>

let onlyName:somePeople = { // 可以
    name:"112" 
}