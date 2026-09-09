class Solution {
    combine(left_half: number[], right_half: number[]): number[] {
        let i = 0;
        let j = 0;

        let sorted_array: number[] = [];

        while (i < left_half.length && j < right_half.length) {
            if (left_half[i] <= right_half[j]) {
                sorted_array.push(left_half[i]);
                i += 1;
            } else {
                sorted_array.push(right_half[j]);
                j += 1;
            }
        }

        while (i < left_half.length) {
            sorted_array.push(left_half[i]);
            i += 1;
        }


        while (j < right_half.length) {
            sorted_array.push(right_half[j]);
            j += 1;
        }

        return sorted_array;
    }
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        // BASE CASE
        if (nums.length <= 1) {
            return nums;
        }

        // DIVIDE
        let mid = Math.floor(nums.length / 2);
        let left_half = nums.slice(0, mid);
        let right_half = nums.slice(mid);

        // Conquer
        let sorted_left = this.sortArray(left_half);
        let sorted_right = this.sortArray(right_half);

        // combine
        return this.combine(sorted_left, sorted_right);
    }
}
