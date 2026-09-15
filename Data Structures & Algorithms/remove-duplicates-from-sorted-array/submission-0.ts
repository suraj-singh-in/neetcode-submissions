class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let i = 0;
        let resultMap = new Map();
        while(i < nums.length) {
            if(!resultMap.has(nums[i])) {
                resultMap.set(nums[i], `${i}`)
                i += 1; 
            } else {
                nums.splice(i, 1)
            } 
            
        }

        return resultMap.size
    }
}
