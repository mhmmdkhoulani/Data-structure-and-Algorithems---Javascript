//Recursive methods are functions or procedures that call themselves in order to solve a problem.
//Recursion is a common programming technique used to solve problems that can be broken down into smaller, similar subproblems.
//Base Case (Termination Condition):This is the condition under which the recursion stops.
//Recursive Case: This is where the function calls itself with a smaller or simpler input, moving closer to the base case with each call.

function walk(steps) {
  if (steps < 1) return; // base case
  console.log("You have :", steps);
  walk(steps - 1); // recursive case
}

function factorial(number) {
  if (number == 0) return 1;
  return number * factorial(number - 1);
}

walk(5);
console.log(factorial(3));
