export {}
// 省略
interface People {
    name: string;
    age: number;
}

type somePeople = Omit<People,'name'>
/**
 type somePeople = {
    age: number;
}
 */
