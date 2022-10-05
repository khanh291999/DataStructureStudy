export default class User{
    age: number;
    name: string;
    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }
}

// export function printName(user){
//     console.log(`User's name is ${user.age}`)
// }