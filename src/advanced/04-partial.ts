export {}
// key of 使用
interface People {
    name: string;
    age: number;
}

// 报错 类型“{}”缺少类型“People”中的以下属性: name, age
const person1: People = {}

/**
  那这个时候我们就可以用到typescript自带的高级类型 Partial，就相当于将上方接口所有属性变成可选的
  将我们需要定义的类型当做泛型传入Partial中，那么就相当于当前的类型里面的所有属性都是可选的
 */
  const person2: Partial<People> = {} // 可以
  const person3: Partial<People> = { name: 'xiaodu' } // 可以
  const person4: Partial<People> = { sex: '男' } // 报错 “sex”不在类型“Partial<People>”中

  