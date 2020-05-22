/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    for (let j = 0; j < nums.length; j++) {
        for (let i = j + 1; i < nums.length; i++) {
            if (nums[j] === nums[i]) {
                nums.splice(i, 1);
                i--;
            }
        }
    }
    return nums.length;
};

export default removeDuplicates;