export {}
// key of 使用
interface People {
    name: string;
    age: number;
}
  
// keyof 取 interface 的键
// type keys = "name" | "age"
type keys = keyof People;


// 假设有一个 object 如下所示，
// 我们需要使用 typescript 实现一个 get 函数来获取它的属性值

const xiaozhang:People = {
    name: '小张',
    age: 12
}

// function get(o: object, name: string) {
//     return o[name];
// }

function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}

console.log(get(xiaozhang,'age')) // 12
console.log(get(xiaozhang,'name')) // 小张

// error 类型“"address"”的参数不能赋给类型“keyof People”的参数。
console.log(get(xiaozhang,'address'))