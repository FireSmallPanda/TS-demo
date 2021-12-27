// key of 使用
// 假设有一个 object 如下所示，
// 我们需要使用 typescript 实现一个 get 函数来获取它的属性值
var xiaozhang = {
    name: '小张',
    age: 12
};
// function get(o: object, name: string) {
//     return o[name];
// }
function get(o, name) {
    return o[name];
}
console.log(get(xiaozhang, 'age')); // 12
console.log(get(xiaozhang, 'name')); // 小张
// error 类型“"address"”的参数不能赋给类型“keyof People”的参数。
// console.log(get(xiaozhang,'address'))
var message = "Hello World";
console.log(message);
