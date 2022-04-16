// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
  name: "Tulio",
  age: 2,
  nicknames: [
   "Tulipan",
    "Tulancingo",
    "Tulish"
  ],
  address: {
    zip_code: "10000",
    street: "Dr. Vertiz 11 Benito Juarez",
    city: "CDMX"
  }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3) // llama todos los datos asociados
console.log(myObject3.name) // solo llama al dato o propiedad de name
console.log(myObject3["address"]) // solo llama a la propiedad de address