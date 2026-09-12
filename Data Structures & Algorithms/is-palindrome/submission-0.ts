class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

        let i = 0;
        let j = cleanedString.length - 1;

        let result = true;
        while (i < j) {
            if (cleanedString[i] !== cleanedString[j]) {
                result = false;
                break;
            }
            i += 1;
            j -= 1;
        }

        return result;
    }
}
