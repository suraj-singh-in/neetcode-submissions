class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let front = 0;
        let back = numbers.length - 1;
        let result: number[] = [];

        while (front < back) {
            if (numbers[front] + numbers[back] < target) {
                front += 1;
            } else if (numbers[front] + numbers[back] > target) {
                back -= 1;
            } else {
                result = [front + 1, back + 1];
                break;
            }
        }

        return result;
    }
}
