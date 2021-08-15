const arr1:Array<number> = [1,2,3]

const arr2:number[] = [1,2,3]

function sum(...args:number[]){
    // 若是js则需要在此声明变量的类型判断

    return args.reduce((pre ,current) => pre + current,0)
}




sum(1,5,6,'11')