/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 12:57:02
 * @LastEditTime: 2019-08-12 13:29:44
 * @LastEditors: Please set LastEditors
 */
const twoSum = require("../src/TwoSum")

test('return indices of number add up to target in num array', () => {
  const nums = [];
  for (let i = 0; i < 10;i++) {
    nums.push(parseInt(Math.random() * 10));
  }
  const target = parseInt(Math.random() * 20)
  const result = twoSum(nums, target);
  expect(nums[result[0]] + nums[result[1]]).toBe(target);
})
