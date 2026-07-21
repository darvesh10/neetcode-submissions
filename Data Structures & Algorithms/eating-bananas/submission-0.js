class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) { // Minimum possible speed
        let left = 1;

        // Maximum possible speed
        let right = Math.max(...piles);

        let ans = right;

        while (left <= right) {

            let mid = left + Math.floor((right - left) / 2);

            // Total hours needed at speed = mid
            let hours = 0;

            for (let pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            // If we can finish within h hours
            if (hours <= h) {
                ans = mid;          // Save answer
                right = mid - 1;   // Try smaller speed
            } else {
                left = mid + 1;    // Need faster speed
            }
        }

        return ans;
    }
}