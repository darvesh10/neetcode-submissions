class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numset = new Set(nums);
        let length = 0
        for(let i=0; i<nums.length; i++){
            let currno = nums[i];
            let currseq = 1;
            while(numset.has(currno+1)){
                currno += 1;
                currseq += 1;
            }
           length = Math.max(length, currseq)
        };
        return length;
    }
}
