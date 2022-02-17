// let today = new Date().getDay();

// let actualDateBySecHrMin = new Date().toString();

// console.log(today)
// console.log(actualDateBySecHrMin)

// -- Complex JavaScript Object
// let person2 = {
//     name: "Max",
//     age: 31,
//     prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
//     fav_color: 'Blue',
//     teams: [
//         {
//             baseball: 'Chicago White Sox',
//             football: 'Chicago Bears',
//             hockey: 'Chicago Blackhawks',
//             basketball: ['Chicago Bulls', 'Chicago Sky'],
//             soccer: ['Chicago Fire', 'Naperville Yellowjacks']
//         },
//         {
//             baseball: 'Toronto Bluejays',
//             football: 'LA Rams',
//             basketball: 'Milwalkee Bucks',
//             soccer: ['Manchester United', 'Liverpool']
//         }
//     ]
// }

// console.log(person2.prog_languages[2])
// console.log(person2.teams[1].soccer[0])

// console.log(Object.keys(person2))
// console.log(Object.values(person2))



let rightNow = new Date().getMilliseconds()
console.log(rightNow)




//============Homework=============\\
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// const favFood = () =>{
//     for(let i = 0; i < Object.keys(person3).length; i++){
//         console.log(Object.keys(person3)[i])
//     }
// }
console.log(Object.keys(person3))
console.log()
// console.log(favFood(person3.shakes[1]))











//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person{
    constructor(named,age,pronouns){                                          // Create our Person Prototype
        this.named = named;
        this.age = age;
        this.pronouns = pronouns;
    }
    printInfo = () => {
        console.log(`age: ${this.age}`)
        
    }
    addAge = () => {
        this.age += 1
        return this.age
    }

    

}
let hank = new Person('Hank',37,'he/him')  
hank.addAge() 
console.log(hank.printInfo())

let jen = new Person('Jen',30,'she/her')
console.log(jen.printInfo(30))

let rondo = new Person('Rondo',15,'they/them')
console.log(rondo.printInfo(15))


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

longString = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length > 10){
            resolve('Big Word')
        }else {
            reject('Small Word')
        }

    })
}
longString('hi')
.then((result) => {
    console.log(result)
})

.catch((result) => {
    console.log(result)
})

// console.log(longString('hi '))