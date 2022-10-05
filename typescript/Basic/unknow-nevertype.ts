//Type unknow: stronger than any, use khi trong code mình có check type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'
if(typeof userInput === 'string'){
    userName = userInput
}

//Type error: Never return anything, ra sau void
function generateError(message: string, code:number):never{
    throw{message:message, errorCode:code};
}
generateError('An error occurred!', 500)