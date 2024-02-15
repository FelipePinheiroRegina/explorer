// Laço for
/*
for (i = 10; i >= 1; i--){
    /*if (i == 5){
        break;
    }*/ // interrompe todos os laços a partir do número 5
/*
    if (i == 5){
        continue; // pula apenas o laço 5
    }
    
    console.log(i)
}
*/

// Laço while
/*
let i = 4124912981294
while(i > 10){
    console.log(i)

    i /= 35
}
*/

//  Laço for (let ... of ...) para variaveis e arrays
/*
let name = 'Felipe'
let names = new Array('Richard', 'Nida', 'Daniel')

/*
for (let letra of name){
    console.log(letra)
}
*/
/*
for (let name of names){
    console.log(name)
}
*/

// Laço for (let ... in ...) para objetos

let person = {
    name: 'Felipe',
    age: 25,
    weight: 83.800,
}

for (let property in person){
    console.log(property)
    //console.log(person['name'])
    //console.log(person.name)
    console.log(person[property])
}