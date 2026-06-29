class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        for(let i=0; i<nums.length; i++){
            let find = target - nums[i];
            if(map[find] !== undefined){
                return [i,map[find]]
            };
            map[nums[i]] = i;
        }
    }
}
