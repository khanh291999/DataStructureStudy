const printQuiz = questions =>{
    questions.forEach(question =>{
        console.log(question.description)
        switch(question.type){
            case 'boolean':
                console.log('1. True');
                console.log('2. False')
                break
            case 'text':
                console.log("text");
                break;
        }
        console.log('')
    })
}

const questions =[
    {
        type: 'boolean',
        description: 'description for boolean'
    },
    {
        type: 'text',
        description: 'description for text'
    }
]

printQuiz(questions)