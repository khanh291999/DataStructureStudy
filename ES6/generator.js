function* generatorID(){
    console.log("start")
    yield 1;
    console.log("Continue");
    yield 2;
    console.log("End")
}

const newID = generatorID();
newID.next();
newID.next();
newID.next();