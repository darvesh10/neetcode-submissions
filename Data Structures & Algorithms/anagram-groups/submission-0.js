class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let i = 0; i < strs.length; i++) {
            let freq = Array(26).fill(0);
            for (let j = 0; j < strs[i].length; j++) {
                freq[strs[i].charCodeAt(j) - 97]++;
            }
            let key = freq.join('#');
            if (!map[key]) {
                map[key] = [strs[i]];
            } else {
                map[key].push(strs[i]);
            }
        }
        return Object.values(map);
    }
}
