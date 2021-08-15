export {}

// 是一个明确接口返回的数字类型的数组
const nums = [111,222,111]

const res = nums.find(i => i > 1000)

const numas = res as number


const numasSum = numas * numas



const numjian = <number>res 


const numJianSum = numjian * numjian