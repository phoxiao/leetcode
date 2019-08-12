/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-05 13:08:53
 * @LastEditTime: 2019-08-12 13:22:40
 * @LastEditors: Please set LastEditors
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i != j && nums[i] + nums[j] === target) {
          return [i,j];
        }

      }

    }
    return [];
}

module.exports = twoSum


