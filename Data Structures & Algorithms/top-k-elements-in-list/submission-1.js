class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let map = {};
      for(let num of nums){
        if(!map[num]){
            map[num] = 1;
        }else{
            map[num]++;
        }
      }

    let bucket = Array(nums.length+1).fill(0).map(()=>[]);
    for(let key in map){
        let freq = map[key];
        bucket[freq].push(Number(key))
    }
      
      let res = []
    for(let i = bucket.length-1; i>=0; i--){
        if(bucket[i].length>0){
           for(let key of bucket[i]){
            res.push(key);
            if(res.length===k){
                return res;
            }
           }
        }
    }
   return res;
    }
}

