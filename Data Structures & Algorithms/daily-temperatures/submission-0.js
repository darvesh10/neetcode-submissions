class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let ans = new Array(n).fill(0);
        let stack = [n - 1];

        for (let i = n - 2; i >= 0; i--) {
            while (stack.length) {
                let top = stack[stack.length - 1];
                if (temperatures[i] < temperatures[top]) {
                    ans[i] = top - i;
                    break;
                } else {
                    stack.pop();
                }
            }
            stack.push(i);
        }
        return ans;
    }
}
