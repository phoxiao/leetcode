// const removeDuplicates = require("../../src/array/RemoveDuplicates");
import removeDuplicates from "../../src/array/RemoveDuplicates";

describe('Remove duplicates in array', () => {
    const nums = [1, 11, 1, 2, 11, 1];
    it("nums length", () => {
        expect(removeDuplicates(nums)).toEqual(3);
    })
    it("remove right duplicates", () => {
        removeDuplicates(nums);
        expect(nums).toStrictEqual([1, 11, 2]);
    });
})