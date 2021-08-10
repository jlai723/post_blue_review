class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        return `${this.name} greets you!`
    }
}
// This is inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
    greet() {
        return super.greet() + ` Welcome to the ${this.grade} grade.`
    }
}

class Instructor extends Person {
    constructor(name, age, lang) {
        super(name, age)
        this.lang = lang
    }
    greet() {
        return super.greet() + ` I teach the ${this.lang} class.`
    }
}


let justin = new Person("Justin", 29)
let adam = new Person("Adam", 25)

console.log(justin, adam)
console.log(adam.greet())

let dan = new Instructor("Dan", 30, "Javascript")
let james = new Student("James", 18, 12)

let peopleArr = [justin, adam, dan, james]
peopleArr.map(p => console.log(p.greet()))

console.log(james.greet())
console.log(dan.greet())