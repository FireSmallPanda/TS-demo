export {}


// 方法1：通过类型断言的方式

const arr = ['小伟','小铁','小涵','小凌'] as const

arr[3] = '帅哥'; //  报错 无法分配到 "3" ，因为它是只读属性。

// 方法2：使用ReadonlyArray
const arr2 : ReadonlyArray<string> = ['木兰','盾山','凯','百里守约']

arr2[3] = '百里玄策' // 报错 类型“readonly string[]”中的索引签名仅允许读取。


const arrObj = [{x:'1'},{y:2}] as const