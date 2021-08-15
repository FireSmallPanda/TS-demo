export {} // 确保跟其他成员不冲突

function func1(a: number, b:number, c?:number,d:number = 400, ...rest:number[] ):string{
    return '声明式'
}
func1(100,200);
func1(100);
func1(100,200,300);

const func2 = function(a: number, b:number):string{
    return '表达式'
}