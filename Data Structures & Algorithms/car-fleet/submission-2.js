class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];

        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }

        // Step 2: Position ke according sort karo (ascending)
        cars.sort((a, b) => a[0] - b[0]);

        let stack = [];

        // Step 3: Sabse aage wali car se start karo
        for (let i = cars.length - 1; i >= 0; i--) {
            let pos = cars[i][0];
            let spd = cars[i][1];

            // Destination tak pahunchne ka time
            let time = (target - pos) / spd;

            // Har car ka arrival time stack me push karo
            stack.push(time);

            // Agar peeche wali car aage wali fleet ko catch kar sakti hai
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
