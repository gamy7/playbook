//Crea un archivo pokemon.js, ahí crea la clase que necesitas para correr el archivo main.js. Deberás exportarla usando ESM.
//cesitarás usar export default.
// clase tiene la misma implementación que el ejercicio anterior.
//nalmente corre: node main.js

//se crea la clase
export default class pokemon {
  constructor (name) {
    this.name = name
  }
  sayHello () {
    console.log('Mi pokemon '+`${this.name}`+' te saluda !!!')
  }

}