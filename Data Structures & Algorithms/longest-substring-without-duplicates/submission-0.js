class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let maxlen = 0;
        let map = {}
        for(let j=0; j<s.length; j++){
           if(map[s[j]] >= i){
            i = map[s[j]] + 1;
           }
           map[s[j]] = j;;
           maxlen = Math.max(maxlen,j-i+1);
        }
        return maxlen;
    }
}
