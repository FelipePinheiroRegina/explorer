/*import variavelUtil from './utils.js'

console.log(variavelUtil)*/

//import {numero1, numero2} from './utils.js'
//console.log(numero1, numero2)

/*import ola, {gretting, date} from './utils.js'

console.log(date, gretting('Felipe'))
console.log(ola())*/

/*import {sum as soma} from './utils.js' // ( as ). usa-se para trocar o nome da função importada
console.log(soma(1, 2))*/

import * as cumprimento from './utils.js' // ( * ) = importe tudo e coloque o nome de cumprimento
console.log(cumprimento.bd, cumprimento.bt, cumprimento.bn)