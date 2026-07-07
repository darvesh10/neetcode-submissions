class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let hashs1 = Array(26).fill(0);
        let hashs2 = Array(26).fill(0);

        for(let i=0; i<s1.length; i++){
            hashs1[s1.charCodeAt(i)-97]++;
            hashs2[s2.charCodeAt(i)-97]++;
        }

        let i = 0;
        let j = s1.length-1;

        while(j<s2.length){
            if(isSame(hashs1,hashs2)){
                return true;
            }else{
                hashs2[s2.charCodeAt(i)-97]--;
                i++;
                j++;
                hashs2[s2.charCodeAt(j)-97]++;
            }
        }
        return false
    }
}


function isSame(hashs1,hashs2){
    for(let i=0; i<hashs1.length; i++){
        if(hashs1[i]!==hashs2[i]) return false;
    }
    return true;
}
