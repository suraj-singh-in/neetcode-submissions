class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let i = 0;
        let j = 0;
        let result: number[] = [];

        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                result.push(nums1[i]);
                i += 1;
            } else {
                result.push(nums2[j]);
                j += 1;
            }
        }

        while (i < m) {
            result.push(nums1[i]);
            i += 1;
        }

        while (j < n) {
            result.push(nums2[j]);
            j += 1;
        }

        i = 0;
        nums1.length = 0;

        while (i < result.length) {
            nums1.push(result[i]);
            i += 1;
        }
    }
}
