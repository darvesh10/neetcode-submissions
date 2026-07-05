class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(arr) {
        let maxl = []
         maxl[0] = [arr[0]];
        for(let i=1; i<arr.length; i++){
            maxl[i] = Math.max(arr[i],maxl[i-1])
        };
        let maxr = [];
        maxr[arr.length-1] = arr[arr.length-1]
        for(let i=arr.length-2; i>=0; i--){
            maxr[i] = Math.max(arr[i],maxr[i+1])
        };

        let ans = 0;
        for(let i=0; i<arr.length; i++){
            ans += Math.min(maxl[i],maxr[i]) - arr[i]
        }
        return ans;
    }
}
