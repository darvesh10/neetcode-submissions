class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for (let num of nums) {
            if (!map[num]) {
                map[num] = 1;
            } else {
                map[num]++;
            }
        }
        let pq = new DummyMinPriorityQueue();
        for (let key in map) {
         pq.enqueue(Number(key), map[key]); 
            if (pq.size() > k) {
                pq.dequeue();
            }
        }
        let res = [];
        while (pq.size()) {
            res.push(pq.dequeue().element);
        }
        return res;
    }
}

class DummyMinPriorityQueue {
    constructor() {
        this.queue = [];
    }

    // LeetCode style: element aur priority dono pass karo
    enqueue(element, priority) {
        this.queue.push({ element, priority });
        // Descending order mein sort taaki sabse choti priority array ke end mein ho
        this.queue.sort((a, b) => b.priority - a.priority);
    }

    dequeue() {
        // Yeh sabse kam priority wala object return karega { element, priority }
        return this.queue.pop();
    }

    front() {
        return this.queue[this.queue.length - 1];
    }

    size() {
        return this.queue.length;
    }
}
