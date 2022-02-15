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
