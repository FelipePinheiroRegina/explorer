let list = new Array()
let item 

for (item = 1; item <= 3; item++) {
    list.push(prompt(`${item}° item of list: `))
}

let listByComma = list.join(', ')
alert(listByComma)
