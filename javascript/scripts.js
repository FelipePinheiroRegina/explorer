/* FUNCTION ANONYMOUS

var sum = function(a, b){ console.log( a + b)}
sum(28, 27)

*/

/* ARROW FUNCTION 
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Felipe')
*/


// CALLBACK FUNCTION
/*
function sayMyName(name){
    console.log('estou dentro da function')
    name()
}

sayMyName(
    () => {
        console.log('executando uma callback')
    }
)
*/

//FUNCTION CONSTRUCT
function Person(name){
    this.name = name
    
    this.walk = function () {
        return this.name + ' this walking'
    }
}

let person1 = new Person('Felipe')
console.log(person1.walk())
