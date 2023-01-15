function count(input) {
  // your code here
  let countObj = {};
  let number = 0;
  for (let i = 0; i < input.length; i++) {
    if (!countObj.hasOwnProperty(input[i])) {
      countObj[input[i]] = 1;
    } else {
      countObj[input[i]] += 1;
    }
  }
  return countObj;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  let groupObj = {};
  for (let i = 0; i < input.length; i++) {
    if (!groupObj.hasOwnProperty(input[i].key)) {
      groupObj[input[i].key] = input[i].value;
    } else {
      groupObj[input[i].key] += input[i].value;
    }
  }
  return groupObj;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
