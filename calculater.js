// This function clears all the values
// function clearScreen() {
//     document.getElementById("result").value = "";
// }
 
// // This function displays the values
// function display(value) {
//     document.getElementById("result").value += value;
// }
 
// // This function evaluates the expression and returns the result
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }
// Clearing Values
// The clearScreen() function accesses the DOM using the ID of the result and clears its
// value by assigning it an empty string. You can use DOM selectors to target various components of a page.
//function clearScreen() {
   // document.getElementById("result").value = "";
//}
//Displaying Values
//The display() function accesses the DOM using the ID of the result and appends the value of the clicked button to the result.
// function display(value) {
//     document.getElementById("result").value += value;
// }
// Evaluating Expression
// The calculate() function accesses the DOM using the ID of the result and evaluates the expression using the eval() function. The evaluated value of the expression is again assigned to the result.

let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

buttonInput.forEach((buttonClass) => {
  buttonClass.addEventListener("click", () => {
    if (equalPressed === 1) {
      // input.value = "";
      equalPressed = 0;
    }
    input.value += buttonClass.value;
  });
});

equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputValue = input.value;
  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (error) {
    alert(error.message);
  }
});
equal.addEventListener("click", () => {
  equalPressed = 1;
  let inputValue = input.value;
  console.log(inputValue, "hvyutfv");
  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (error) {
    alert(error.message);
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
