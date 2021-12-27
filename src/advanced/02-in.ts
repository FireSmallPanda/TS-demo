export {}

interface People {
    name: string;
    age: number;
}
type keys = keyof People;
type Obj =  {
  [p in keys]: string
} // -> { name: string, age: string }

let xiaozhang:Obj = {
    name:'小张',
    age: '13'
}