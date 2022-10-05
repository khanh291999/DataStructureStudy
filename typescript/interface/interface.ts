interface Student{
    id: Number,
    name: string,
}

interface StudentExtend extends Student{
    city: string,
}

function printUser (student:StudentExtend){
    console.log(student)
}

let myStudent = {
    id :1,
    name: "Khanh",
    city: "Ho Chi Minh",
}
printUser(myStudent);