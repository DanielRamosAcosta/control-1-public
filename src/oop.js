class Person {
  constructor (saludo) {
    this.saludo = saludo
  }
  
  sayHi() {
    return this.saludo
  }
}

class Driver extends Person {}

class Programmer extends Person {
  takeCoffe () {
    this.saludo = this.saludo.toUpperCase()
  }
}

const person = new Programmer("Hola!")

person.takeCoffe()

console.log(person.sayHi())
