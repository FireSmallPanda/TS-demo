export {}
type havTypes = 'name' | 'age' | 'sex'

type someTypes = Exclude<havTypes,'sex'>

const myTypes1:someTypes = 'name' // 可以
const myTypes2:someTypes = 'sex' // 错误 不能将类型“"sex"”分配给类型“someTypes”。

