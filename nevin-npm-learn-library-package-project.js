import { sayHello, factorial, add, subtract } from "nevin-npm-learn-library-package-project";
import { min, max } from "nevin-npm-learn-library-package-project/number";

console.log("Min of 10 and 5:", min(10, 5));
console.log("Max of 10 and 5:", max(10, 5));

sayHello("Nevin");
console.log("Factorial of 5:", factorial(5));
console.log("Addition of 10 and 5:", add(10, 5));
console.log("Subtraction of 10 and 5:", subtract(10, 5));