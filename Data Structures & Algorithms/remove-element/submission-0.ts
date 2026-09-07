class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        for(let index = 0; index < nums.length;) { 
            if(nums[index] === val) {
                nums.splice(index, 1);
                continue;
            }
            index+=1
        }


        return nums.length
    }
}
