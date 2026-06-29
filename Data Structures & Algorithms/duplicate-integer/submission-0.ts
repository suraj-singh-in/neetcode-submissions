class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numberSet = new Set(nums);
        return numberSet.size !== nums.length
    }
}
