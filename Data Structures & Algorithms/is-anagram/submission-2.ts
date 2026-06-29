class Solution {
    /*
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) { 
            return false;
        }

        const countS = {};
        const countT = {};

        for(let index = 0; index < s.length; index+=1) { 
            countS[s[index]] = (countS[s[index]] || 0) + 1;
            countT[t[index]] =  (countT[t[index]] || 0) + 1;
        }

        console.log("ams", countS, countT)

        return Object.keys(countS).every(key => countS[key] === countT[key])
    }
}
