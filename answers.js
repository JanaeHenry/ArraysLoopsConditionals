////////////////////////////////
// Easy Going - Write a for loop that will log the numbers 1 through 20.
////////////////////////////////

// for (let i = 1; i <= 20; i++){
//     console.log(i);
// }

////////////////////////////////
// Get Even - Write a for loop that will log only the even numbers in 0 through 200.
////////////////////////////////

// for (let i = 0; i <= 200; i += 2){
//     console.log(i);
// }


////////////////////////////////
// Fizz Buzz -

// -Write a javascript application that logs all numbers from 1 - 100.
// -If a number is divisible by 3 log "Fizz" instead of the number.
// -If a number is divisible by 5 log "Buzz" instead of the number.
// -If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

////////////////////////////////

// for(let i = 1; i<=100; i++){
//         if(i % 15 === 0){
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");

//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     }
// }

////////////////////////////////
// Wild Wild Life -

// Use the following arrays to answer the questions below (name,species ,age, hometown): 
// You should be modifying the elements by accessing them. 
// It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]


// 1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// 2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// 3.Give D'Art a second hometown by adding "Hawkins"
// 4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

////////////////////////////////

// #1
// plantee.splice(2, 1, 5001);
// console.log(plantee)

// #2
// wolfy.splice(3, 1,"Gotham City");
// console.log(wolfy) 

//#3
// dart.push("Hawkins");
// console.log(dart)

//#4
// wolfy.shift();
// wolfy.unshift("Gameboy");
// console.log(wolfy);


////////////////////////////////
// Yell at the Ninja Turtles -

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

////////////////////////////////

// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for ( let turtle of ninjaTurtles){
    
//   let newTurtle = turtle.toUpperCase();

//   console.log(newTurtle);
    
// }


////////////////////////////////
// Methods, Revisited
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
// 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
// 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


// Console log: the index of Titanic

// console.log(favMovies[8]);

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):

// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?

// favMovies.sort()
// console.log(favMovies)


// Use the method pop

// favMovies.pop()
//  console.log(favMovies)

// push "Guardians of the Galaxy"

//  favMovies.push("Guardians of the Galaxy")


// Reverse the array

// favMovies.reverse()

// Use the shift method

// favMovies.shift()
// console.log(favMovies)

// unshift - what does it return?

// favMovies.unshift()
// console.log(favMovies);
//19

// splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// favMovies.splice(3, 1, "Avatar")
// console.log(favMovies)

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?

// let split = Math.ceil(favMovies.length / 2);
// let lastHalf = favMovies.slice(split, favMovies.length)
// console.log(lastHalf)




// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// console.log your final results
// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(favMovies.indexOf('Fast and Furious'))
//13
// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [['Timmy', 'Frank'], 'Eggbert', ['Lucinda', 'Jacc', 'Neff', 'Snoop'], ['Petunia', ['Baked Goods', 'Waldo']]]       //Where is Waldo
// whereIsWaldo.splice([1], 1)    //remove Eggbert
// console.log(whereIsWaldo)
// whereIsWaldo[1][2] = 'No One';   //change Neff to 'NO ONe'
// console.log(whereIsWaldo)
// console.log (whereIsWaldo[2][1][1]);  //access and log 'Waldo'

////////////////////////////////
//  Excited Kitten
////////////////////////////////


// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// let catty = "Love me, pet me! HSSSSSS!";
// let catty20 = []
// catty20 = catty.repeat(20);
     
// For every even number in your loop, log "...human...why you taking pictures of me?...", 
// "...the catnip made me do it...", or "...why does the red dot always get away..." at random.


// let kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
// let moo = Math.random(kittyTalk);
// let chirp = Math.round(moo * kittyTalk.length)

// if(catty20.indexOf() % 2 === 0){
//     console.log(chirp)
// } else {
//     console.log(catty20)
// }




////////////////////////////////
//  Find the Median
////////////////////////////////


// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// //The median is the middle number in a sorted, ascending or descending, list of numbers and can be more descriptive of that data set than the average.

// let calculateMedian = function (arr){
//         arr.sort();
//         let median = 0;
//         let length = arr.length;
//         if (length % 2 != 0 )
//         median = arr[Math.floor(length / 2)]
//         else 
//         median = (arr[length/2]+arr[(length/2)-1]) / 2
//       return median;  
//       }

// console.log (calculateMedian(nums))

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//The median is the middle number in a sorted, ascending or descending, list of numbers and can be more descriptive of that data set than the average.

// let calculateMedian = function (arr){
//         arr.sort();
//         let median = 0;
//         let length = arr.length;
//         if (length % 2 != 0 )
//         median = arr[Math.floor(length / 2)]
//         else 
//         median = (arr[length/2]+arr[(length/2)-1]) / 2
//       return median;  
//       }

// console.log (calculateMedian(nums))




///////////////////////////////
// Hungry For More
////////////////////////////////


// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];
  
//   let kristynsShoe = kristynsCloset.shift();
//   thomsCloset[2].push (kristynsShoe);
  
  
//   let kristynOutfit = []
//   let thomOutfit = []
  
//   for (let i=0; i<3; i++) {
//       let kristyRandom = Math.floor (Math.random()*6)
//       kristynOutfit.push(kristynsCloset[kristyRandom]) 
//   }
  
//   for (let i=0; i<3; i++) {
//       let thomsRandom = Math.floor(Math.random()*thomsCloset[i].length)
//       thomOutfit.push(thomsCloset[i][thomsRandom]) 
//   }
  
//   console.log(`Kristy will wear "${kristynOutfit[0]}", "${kristynOutfit[1]}", and "${kristynOutfit[2]}"`)
//   console.log(`Thoms will wear "${thomOutfit[0]}", "${thomOutfit[1]}", and "${thomOutfit[2]}"`)
  
  
//   for (const item of kristynsCloset) {
//       console.log(`WHIRR: Now washing ${item}`);
//   }
  
//   for (let i=0; i<thomsCloset.length; i++) {
//           for (let x=0; x<thomsCloset[i].length; x++) {
//           console.log(`Thoms have "${thomsCloset[i][x]}" in his closet`)
//           }
//   } 

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];


// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// let kristynsShoe = kristynsCloset.shift();
// thomsCloset[2].push (kristynsShoe);


// let kristynOutfit = []
// let thomOutfit = []

// for (let i=0; i<3; i++) {
//     let kristyRandom = Math.floor (Math.random()*6)
//     kristynOutfit.push(kristynsCloset[kristyRandom]) 
// }

// for (let i=0; i<3; i++) {
//     let thomsRandom = Math.floor(Math.random()*thomsCloset[i].length)
//     thomOutfit.push(thomsCloset[i][thomsRandom]) 
// }

// console.log(`Kristy will wear "${kristynOutfit[0]}", "${kristynOutfit[1]}", and "${kristynOutfit[2]}"`)
// console.log(`Thoms will wear "${thomOutfit[0]}", "${thomOutfit[1]}", and "${thomOutfit[2]}"`)


// for (const item of kristynsCloset) {
//     console.log(`WHIRR: Now washing ${item}`);
// }

// for (let i=0; i<thomsCloset.length; i++) {
//         for (let x=0; x<thomsCloset[i].length; x++) {
//         console.log(`Thoms have "${thomsCloset[i][x]}" in his closet`)
//         }
// } 


