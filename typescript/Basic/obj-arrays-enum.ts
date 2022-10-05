const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string];
} = {
    name: "khanh",
    age: 24,
    hobbies: ['Sport','Basketball'],
    role: [5, "Center"]
}

enum Role {ADMIN,EDITOR,VIEWER}
const person1 ={
    name: "khanh",
    age: 24,
    hobbies: ['Sport','Basketball'],
    role: Role.ADMIN,
}
console.log(person1.role);
