function calculatrice() {
  let firstValue = 1;
  let operator = "+";
  let secondValue = 2;

  firstValue = prompt("give the first value");

  secondValue = prompt("give the sconde value");

  operator = prompt("give us the operator");

  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);

  switch (operator) {
    case "+":
      console.log(`addition de ${firstValue} + ${secondValue}`);
      console.log("resultat =", firstValue + secondValue);
      break;
    case "-":
      console.log(`soustraction de ${firstValue} - ${secondValue}`);
      console.log("resultat =", firstValue - secondValue);
      break;
    case "/":
      console.log(`devision de ${firstValue} / ${secondValue}`);
      console.log("resultat =", firstValue / secondValue);
      break;
      5;

    case "*":
      console.log(`multiplication de ${firstValue} * ${secondValue}`);
      console.log("resultat =", firstValue * secondValue);
      break;
    default:
      console.log("entré un operateur valid");
  }
}
calculatrice();

// if (operator == "+") {
//   console.log(firstValue + secondValue);
// } else {
//   console.log(firstValue - secondValue);
// }

// console.log(typeof (firstValue + secondValue));
