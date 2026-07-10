class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let i = 0;
        let j = 0;
        let q = [];
        let res = [];
        while(j<nums.length){
            while(q.length && nums[j]>q[q.length-1]) q.pop();
            q.push(nums[j]);
            if(j>=k-1){res.push(q[0]);
                   if(nums[i]===q[0]) q.shift();
                   i++; 
            }
            j++;
        }
        return res;
    }
}
