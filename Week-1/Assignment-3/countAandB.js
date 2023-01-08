function countAandB(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "a" || input[i] == "b") {
      count++;
    }
  }
  return count;
}
let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1));

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2));
