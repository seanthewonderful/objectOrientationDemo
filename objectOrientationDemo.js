//create an object called person
let person = {
    firstName: 'Sean',
    lastName: 'Fagan',
    age: 34,
    favorites: {
        //nested objects
        movies:{
            movie1: 'Matrix',
            movie2: 'The Dark Knight',
        },
        artists: {
            artist1: 'John Mayer',
            artist2: 'Nat King Cole',
        }
    }
}
//access value in an object
console.log(person.firstName)
//access nested values in an object
console.log(person.favorites.movies.movie2)



let meal = {
    appetizer: 'Chips & Salsa',
    entree: 'Brisket Tacos',
    dessert: 'Cake',
    drink: 'Diet Coke',
}
//destructuring dessert from meal object
const {dessert} = meal;
console.log(dessert)

let {entree: bestFoodEver, drink: bestBeverageEver, appetizer} = meal
/* same way to write line above:
const bestFoodEver = meal.entree
const bestBeverageEver = meal.drink
const appetizer = meal.appetizer

console.log(bestFoodEver)
console.log(bestBeverageEver)
console.log(appetizer)
*/

//writing a for-in loop for person object
for(let x in person){
    //print keys
    console.log(x)
    //print keys and values
    console.log(person[x])
    //console.log(person.x) <--this will not work
}
//Add a new key and value to person object
person.job = 'Instructor'
person['Hair Color'] = 'Brown'
//console.log(person)

//delete Hair Color from object
//delete person.Hair Color  <--does not work because of space
delete person['Hair Color']
//this is why camelCase is better than using spaces
//Then you can type  delete person.hairColor


//Classes
class Animals {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }
    //create a method (method is a function inside of an object)
    greeting(){
        console.log(`Hi, I am ${this.name}. I am of the ${this.species} species. I am ${this.size} size.`)
    }
}

//Class extension
class Reptiles extends Animals {
    constructor(name, species, size, cute) {
        //cute is grayed because I declare it below. Otherwise it would need to be gotten from user input
        super(name, species, size) 
        //Super requires the keys that came from parent class
        this.cute = false
    }
    //if You want to change a value
    changeCute() {
        if(this.cute===false){
            this.cute=true
        }else {
            this.cute=false
        }
    }
}

let snake = new Reptiles("Ball Python", "Snake", "Smol")
console.log(snake)
snake.changeCute()
//changes value of cute in snake
console.log(snake)

/*
let zebra = new Animals("Zebra", "Mammal", "Medium")
console.log(zebra)
zebra.greeting()
*/
//Remember the 2 parentheses after the method to "invoke" the function

