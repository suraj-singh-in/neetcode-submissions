class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let i = 0;
        let j = 0;
        let result = [];

        while (i < word1.length && j < word2.length) {
            result.push(word1[i]);
            result.push(word2[j]);
            i++;
            j++;
            // if ((i + j) % 2 === 0) {
            //     result.push(word1[i]);
            //     i++;
            // } else {
            //     result.push(word2[j]);
            //     j++;
            // }
        }

        while (i < word1.length) {
            result.push(word1[i]);
            i++;
        }

        while (j < word2.length) {
            result.push(word2[j]);
            j++;
        }

        return result.join("");
    }
}
