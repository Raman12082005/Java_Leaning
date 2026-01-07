let course = {
    coursename : "Java Script",
    price : 999,
    courseInstructor : "Manav"
}

console.log(course.courseInstructor); // Manav
let {courseInstructor} = course
console.log(courseInstructor); // Manav

let {courseInstructor  : instructor} = course
console.log(instructor); // Manav

// api's are also in this form
// { // this is known as jasson
//     "name" : "C++",
//     "price" : "free",
//     "Instructor" : "Raman"
// }





