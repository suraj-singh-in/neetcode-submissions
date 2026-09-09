class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let low = 0;
        let mid = 0;
        let high = nums.length - 1;

        while (mid <= high) {
            if (nums[mid] === 0) {
                [nums[low], nums[mid]] = [nums[mid], nums[low]];
                low += 1;
                mid += 1;
            } else if (nums[mid] === 1) {
                mid += 1;
            } else {
                [nums[mid], nums[high]] = [nums[high], nums[mid]];
                high-=1;
            }
        }
    }
}
