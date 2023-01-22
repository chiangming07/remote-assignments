// const e = require("express");

// function twoSum(nums, target) {
//   // your code here
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return "Cannot find the pair.";
// }
// 時間複雜度： O(n^2); 空間複雜度： O(1)。

function twoSum(nums, target) {
  // your code here
  let map = {};
  nums.forEach((element, index) => {
    map[element] = index;
  });
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (map[compliment] && map[compliment] !== i) {
      return [i, map[compliment]];
    }
  }
  return "Cannot find the pair.";
}
// 時間複雜度： O(n); 空間複雜度： O(n)。（因爲用 map 作為物件儲存 element 跟 index。)

/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
   */
