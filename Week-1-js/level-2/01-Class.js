
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let cat = new Animal('Cat', 4)
let dog = new Animal('Dog', 4)

console.log(cat.describe())
console.log(dog.describe())
