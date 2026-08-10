class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length === 0) return "";
        if (strs.length === 1) return strs[0];

        let answer = "";
        let index = 0;

        while (index <= 200) {
            const element = strs[0][index];
        
            if (strs.every((str) => str[index] && element && str[index] === element)) {
                answer += element;
                index += 1;
            } else {
                break;
            }
        }

        return answer
    }
}
