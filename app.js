// ========================= 01 ===============================
// let studentNames = []; 
// while (true) {
//   let name = prompt("Enter a student name (press Cancel to stop):");

//   if (name === null || name === "") {
//     break; 
//   }
//   studentNames.push(name);
// }

// console.log("Student names entered:", studentNames);


// ========================= 02 ===============================
// let studentNames = [];

// let studentName = prompt("Enter student name:");
// if (studentName) {
//     studentNames.push(studentName);
// }
// console.log(studentNames);


// ========================= 03 ===============================
var stringArray = ['ball','chair','flower','door','fall','book','bird','music'];


// ========================= 04 ===============================
var numberArray = [1,2,3,4,5,6,7,8,9];


// ========================= 05 ===============================
var booleanArray = [true, false];


// ========================= 06 ===============================
var mixedArray = ['hair','jar', 43, 12, 39, false, true]



// ========================= 07 ===============================
var qualifications = ['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil.', 'PhD.'];
for(i=0; i < qualifications.length; i++){
    console.log(qualifications[i]);
}


// ========================= 08 ===============================
console.log(" ");
// Declare and initialize arrays for student names and scores
let studentNames = ["Alice", "Bob", "Charlie"];
let studentScores = [450, 390, 425]; // Example scores

// Assume total marks are 500 for each student
const totalMarks = 500;

// Function to calculate and display scores and percentages
function displayScoresAndPercentages(names, scores, total) {
    for (let i = 0; i < names.length; i++) {
        let percentage = (scores[i] / total) * 100;
        console.log(names[i] + " scored " + scores[i] + " out of " + total + ", Percentage: " + percentage.toFixed(2) + "%");
    }
}

// Call the function to display the results
displayScoresAndPercentages(studentNames, studentScores, totalMarks);



// ========================= 09 ===============================
// function displayArray(arr) {
//     document.getElementById("colorArray").innerText = arr.join(", ");
// }

// window.onload = function() {
    // Initialize an array with color names
    // let colors = ["Red", "Green", "Blue", "Yellow"];

    // Display the array elements in the browser
    // displayArray(colors);

    // a. Add color to the beginning of the array
    // let addColorBeginning = prompt("Enter a color to add to the beginning of the array:");
    // if (addColorBeginning) {
    //     colors.unshift(addColorBeginning);
    //     displayArray(colors);
    // }

    // b. Add color to the end of the array
    // let addColorEnd = prompt("Enter a color to add to the end of the array:");
    // if (addColorEnd) {
    //     colors.push(addColorEnd);
    //     displayArray(colors);
    // }

    // f. Add color to desired position/index
    // let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
    // let colorToAdd = prompt("Enter the color to add:");
    // if (!isNaN(indexToAdd) && colorToAdd) {
    //     colors.splice(indexToAdd, 0, colorToAdd);
    //     displayArray(colors);
    // }

    // g. Delete color(s) from user-defined position/index
//     let indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
//     let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
//     if (!isNaN(indexToDelete) && !isNaN(numberOfColorsToDelete)) {
//         colors.splice(indexToDelete, numberOfColorsToDelete);
//         displayArray(colors);
//     }
// }



// ========================= 10 ===============================
function displayArray(arr, elementId) {
    document.getElementById(elementId).innerText = arr.join(", ");
}

window.onload = function() {
    // Initialize an array with student scores
    let scores = [78, 92, 45, 66, 89, 99, 52];

    // Display the original array
    displayArray(scores, "originalScoreArray");

    // Sort the array in ascending order
    scores.sort(function(a, b) {
        return a - b;
    });

    // Display the sorted array
    displayArray(scores, "sortedScoreArray");
}


// ========================= 11 ===============================
console.log(" ");
var cities = ['lahore','islamabad','quetta','karachi','peshawar','sialkot','multan','gujranwala','hyderabad'];
console.log('cities list: '+  cities.join(', '));

var selectedCities =[cities[1], cities[3], cities[6]];
console.log('selected cities: ' + selectedCities.join(', '));



// ========================= 12 ===============================
console.log(" ");
var arr = ['This', 'is', 'my', 'cat'];
var string = arr.join(" ");

console.log('Array: ' + arr );
console.log('string: ' + string);



// ========================= 13 ===============================
console.log(" ");
var arrayValues = [];
arrayValues.push('keyboard');
arrayValues.push('mouse');
arrayValues.push('printer');
arrayValues.push('monitor');

console.log('Array: '+arrayValues.join());

for(var i = 0 ; i < arrayValues.length; i++){
    console.log("Out: "+arrayValues[i]);
}


// ========================= 14 ===============================
console.log(" ");
var valuesArray = ["keyboard", "mouse", "printer","monitor"];

console.log('Array: '+ valuesArray.join());

for (var i = valuesArray.length - 1; i >= 0; i--) {
    console.log("Out: "+valuesArray[i]);
}



// ========================= 15 ===============================
//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//  function displayDropdown() {
//      var dropdownHTML = '<select id="manufacturerSelect">';

//      for (var i = 0; i < manufacturers.length; i++) {
//          dropdownHTML += `<option value="${i}">${manufacturers[i]}</option>`;
//      }

//      dropdownHTML += '</select>';

//      document.write(dropdownHTML);
//  }

//  window.onload = function() {
//      displayDropdown();
//  };