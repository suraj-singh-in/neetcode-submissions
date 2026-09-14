class Solution {
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

    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let i = 0;
        let j = s.length - 1;
        let result = true;
        let isOneAlreadySkipped = false;
        while (i < j) {
            console.log({ i, j, left: s[i], right: s[j] });
            if (s[i] === s[j]) {
                // match
                i += 1;
                j -= 1;
            } else {
                result =
                    this.isPalindrome(s.slice(i + 1, j + 1)) ||
                    this.isPalindrome(s.slice(i, j));
                break;
            }
        }

        return result;
    }
}

