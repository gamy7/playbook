//se crea la clase
export default class pokemon {
  constructor (name) {
    this.name = name
  }

  sayHello () {
    console.log('Mi pokemon '+`${this.name}`+' te saluda !!!')
  }
  sayMessage(message){
    console.log('Mi pokemon '+`${this.name}`+ ' dice: '+ message)
  }

}



//se crearan las funciones a exportar


//fuction sayHello(){
  //console.log(' Te saluda!!!')

//}

//fuction sayMessage(message){
  //console.log(${message})
//}

//module.exports.verbose = (message) => {
 // console.log(`verbose: ${message}`)
//}



