class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs: string[]): string[][] {
        let hashMap = {};

        for (let index = 0; index < strs.length; index += 1) {
            let key = strs[index];
            let value = {};
            let sortedCharacters = key.split("").sort();

            for (let innerIndex = 0; innerIndex < sortedCharacters.length; innerIndex += 1) {
                let ele = sortedCharacters[innerIndex];
                if (value[ele]) {
                    value[ele] = value[ele] + 1;
                } else {
                    value[ele] = 1;
                }
            }

            const valKey = Object.keys(value)
                .sort()
                .map((char) => `${char}${value[char]}`)
                .join("");

            if (!hashMap[valKey]) {
                hashMap[valKey] = [];
            }

            hashMap[valKey].push(key);
        }


        return Object.values(hashMap);
    }
}
