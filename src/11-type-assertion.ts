export {}

// 是一个明确接口返回的数字类型的数组
const nums = [111,222,111]

const res = nums.find(i => i > 1000)

// 对象可能未定义
// let square:number = res + res


// as 实现
const numas = res as number


const numasSum:number = numas * numas


// 尖括号方式实现
const numjian:number = <number>res 


const numJianSum = numjian * numjian