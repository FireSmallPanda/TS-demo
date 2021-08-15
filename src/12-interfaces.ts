export {} 
/**
 * 课程
 */
interface Course{
    title:string;
    remark:string;
    pic:string;
    workName?:string; // 可选成员
    readonly price:number; // 只读成员
}


const oneCourse: Course = {
    title:'11',
    remark:'22',
    pic:'1111',
    price: 5.15 // 在初始化过后就不允许再修改了
}

oneCourse.price = 999



interface Exam {
    [props: string]:string;
}

let oneExam:Exam = {
    q1:"你的姓名是？",
    q2:"你的年龄是？",






    q3: 55566

}




// function printCourse(course:Course){
//     console.log(course.title)
//     console.log(course.remark)
//     console.log(course.pic)
// }


// printCourse({title:"1",remark:"2"})