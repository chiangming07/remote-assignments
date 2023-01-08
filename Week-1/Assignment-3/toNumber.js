function toNumber(input) {
  let change = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "a":
        change.push(1);
        break;
      case "b":
        change.push(2);
        break;
      case "c":
        change.push(3);
        break;
      case "d":
        change.push(4);
        break;
      case "e":
        change.push(5);
        break;
      default:
        console.error(`The letter "${input[i]}" cannot be converted!`);
    }
  }
  return change;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(toNumber(input1));

let input2 = ["e", "d", "c", "d", "e"];
console.log(toNumber(input2));
