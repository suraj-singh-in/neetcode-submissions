class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let frequencyMap = new Map();

        let index = 0;

            while (index < nums.length) {
            let currentNum = nums[index];
            if (frequencyMap.has(currentNum)) {
                frequencyMap.set(currentNum, frequencyMap.get(currentNum)! + 1);
            } else {
                frequencyMap.set(currentNum, 1);
            }
            index += 1;
        }


        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (let [key, value] of frequencyMap.entries()) {
            buckets[value].push(key);
        }
        const result = [];
        for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
        }

        return result.slice(0, k);
    }
}
