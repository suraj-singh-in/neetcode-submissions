class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let majorityElement = nums[0];
        let count = 1;

        for(let index = 1; index < nums.length; index+=1){
            if(nums[index] === majorityElement) {
                count += 1;
            } else { 
                count -= 1;
                if (count <= 0) { 
                    majorityElement = nums[index]
                }
            }
        }

        return majorityElement;
    }
}
