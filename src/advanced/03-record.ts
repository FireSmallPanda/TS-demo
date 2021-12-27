export {}
// {[x: string]: any;}
type Myobject = Record<string, any>

let a:Myobject = {
    x1:'aaa'
}


// 搭配联合类型
type RequestMethods = 'GET'|'POST'| 'DELETE'
type MethodsAny = Record<RequestMethods, any>
let mothod1:MethodsAny = {
    GET:"1",
    POST:'1',
    DELETE:'1'
}
let mothod2:MethodsAny = {
    GET:"1",
    POST:'1',
    DELETE:'1',
    PUT:'111' // error “PUT”不在类型“MethodsAny”中
}

// 搭配接口
interface PersonModel {
    name:string,
    age:number
}
// [x: string]: PersonModel;
type student = Record<string, PersonModel>

let students:student = {
    student1:{
        name:'小凌',
        age:18
    },
    student2:{
        name:'小李',
        age:19
    }
}