class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        let map = {};
        for(let i=0; i<s.length; i++){
          if(!map[s[i]]){
            map[s[i]] = 1;
          }else{
            map[s[i]]++;
          }
        }

        for(let j=0; j<t.length; j++){
             if(map[t[j]]){
                map[t[j]]--;
             }else{
                return false
             }
        }
   return true;
    }
}
