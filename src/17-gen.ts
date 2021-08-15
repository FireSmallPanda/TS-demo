export {}

/**
 * 创建一个Num数组
 * @param length 
 * @param value 
 */
function crateListNum(length:number,value:number):number[]{
    const arr = Array<number>(length).fill(value)
    return arr
}

/**
 * 创建一个String数组
 * @param length 
 * @param value 
 */
 function crateListString(length:number,value:string):string[]{
    const arr = Array<string>(length).fill(value)
    return arr
}
/**
 * 创建列表
 * @param length 
 * @param value 
 * @returns 
 */
function crateList<T>(length:number,value:T):T[]{
    const arr = Array<T>(length).fill(value)
    return arr
}

const arrString = crateList<string>(3,'xx');
const arrNumber = crateList<number>(3,15);