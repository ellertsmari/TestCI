const app = require('express')();
const PORT = 3000;

const testable = (a, b)=>{
    return a+b;
}


app.listen(PORT, ()=>{
    console.log("listening to port:", PORT);
})

console.log(testable("talan er: ", 8+2));