let first = parseInt(prompt("Enter  First Num"));
let second =parseInt(prompt("Enter  Second Num"));
var operation =prompt("Select Operation => (+ , - , / , * , ++ , -- , % )");
switch (operation) {
    case '+':
        let add=first+second;
      alert("Sum Of Two Number => " + (add));
      break;
    case '-':
        alert("Subtraction Of Two Number => "+(first-second));
      break;
    case '*':
        alert("Multiplication Of Two Number => "+(first*second));
      break;
    case '/':
        alert("The Division Of Two Number Is"+(first/second));
      break;
    case '++':
        alert("Increment Of First  Number => "+(first+1));
        alert("Increment Of Second  Number => "+(second+1));
      break;
    case '--':
        alert("Decrement Of First  Number => "+(first-1));
        alert("Decrement Of Second  Number => "+(second-1));
      break;
    case '%':
        alert("Mode Of Two Number => " +(first%second));
      default:
        text = "Invalid Input..!";
  }
