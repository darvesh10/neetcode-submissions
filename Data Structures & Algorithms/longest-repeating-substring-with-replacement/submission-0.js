class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let maxfreq = 0;
        let i = 0;
        let maxlen = 0;

        for(let j=0; j<s.length; j++){
            if(!map[s[j]]){
                map[s[j]] = 1;
            }else{
                map[s[j]]++;
            }
            maxfreq = Math.max(map[s[j]], maxfreq);
            while((j-i+1)-maxfreq>k){
           map[s[i]]--;
           i++;
            }
            maxlen = Math.max(maxlen,j-i+1);
        }
        return maxlen;
    }
}
