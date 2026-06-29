class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;
        const ans = new Array<number>(n);

        for (let index = 0; index < n; index += 1) {
            ans[index] = nums[index];
            ans[index + n] = nums[index];
        }

        return ans;
    }
}
