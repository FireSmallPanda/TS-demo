export {}
// 必选参数
interface People {
    name?: string;
    age?: number;
}

// 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Required<People>" 中需要该属性 
const person2: Required<People> = {
    name:"11"
}