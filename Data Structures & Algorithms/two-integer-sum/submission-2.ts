class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = {};

        for (let index = 0; index < nums.length; index += 1) {
            hashMap[target - nums[index]] = index;
        }

        const match = [];

        for (let index = 0; index < nums.length; index += 1) {
            if(hashMap[nums[index]] && hashMap[nums[index]] !== index) {
                return [hashMap[nums[index]], index]
            }
        }

        return match;
    }
}
