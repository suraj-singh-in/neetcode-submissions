class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let majorityElement = nums[0];
        let count = 1;

        for(let index = 1; index < nums.length; index+=1){
            // console.log("index:", index, "majorityElement:", majorityElement, "count:", count)
            if(nums[index] === majorityElement) {
                count += 1;
            } else { 
                count -= 1;
                if (count <= 0) { 
                    majorityElement = nums[index]
                            // console.log("Update index:", index, "majorityElement:", majorityElement, "count:", count)

                }
            }
        }

        return majorityElement;
    }
}
