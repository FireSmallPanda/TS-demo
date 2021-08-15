export {} // 确保跟其他成员不冲突
function stringify(value: any){
    return JSON.stringify(value)
}

stringify('string')

stringify(100)

stringify(true)

let foo: any = 'string'

foo = 100