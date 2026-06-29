class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(!strs.length) return "";
        if(strs.length === 1) return strs[0];
        let result = ""
        let index = 0;
        while(true) {
            let target = strs?.[0]?.[index]
            if(strs.every(item => item?.[index] && target && item?.[index] === target)) { 
                result += target
                index += 1 
            } else {
                break;
            }
        }
        return result;
    }
}
