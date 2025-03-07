// With that in mind, write functions that accomplish the following:

// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.


//1)// declared an array called myTestScores
let myTestScores = [90, 100, 86, 77, 95, 80, 100]

// using a function to calculate the sum of the myTestScores array using a for loop
function sumScores(testScores) {
    let total = 0;
    for (let i = 0; i < testScores.length; i++) {
      total += testScores[i];
    }
    return total;
  }
  
  console.log(sumScores(myTestScores));



  //2)//calculating the average score of the myTestScores array using a for each loop

  function calculateAverage(testScores) {
    let total = 0;
    testScores.forEach(score => {
      total += score;
    });
    return total / testScores.length;
  }
  
  console.log(calculateAverage(myTestScores));




  //3)//Take an array of strings and return the longest string.

  let favoriteNarutoCharacters = ["itatchi", "sasuke", "killer b", "madara", "obito", "gara", "kisame"];

  // This function finds the longest string in the favouritNarutoCharacters array
function findLongestString(characters) {
    let longest = ""; // Initializing an empty string to store the longest string
  
    // Looping through each element in the array using forEach &
    // Checking to see if the current character.length string is greater than the longest string found 
    characters.forEach(character => {
      if (character.length > longest.length) { 
        longest = character; // storing the longest string found in the variable.
      }
    });
  
    return longest; // Returned the longest string found
  }

  console.log(findLongestString(favoriteNarutoCharacters));




//4)//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

  let favoriteRestaurant = ["Shake Shack", "Popeyes", "KFC", "Sky View", "In-N-Out", "Beast Burger"];

  //this function takes 2 parameters. one for the array of restaurants and the othe for num
  //.filter() array method helps us pick only the names that are longer than the given number.
//The function returns a new array with only the names that passed the length test
function stringsLongerThanNum(restaurants, num) {
    return restaurants.filter(restaurant => restaurant.length > num);
}
console.log(stringsLongerThanNum(favoriteRestaurant, 6));