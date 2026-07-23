class TimeMap {
    constructor() {
         this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }

        this.map.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
   
        if (!this.map.has(key)) return "";

        let arr = this.map.get(key);

        let l = 0;
        let r = arr.length - 1;

        let ans = "";

        while (l <= r) {

            let m = l + Math.floor((r - l) / 2);

            if (arr[m][0] <= timestamp) {

                ans = arr[m][1];
                l = m + 1;

            } else {

                r = m - 1;

            }
        }

        return ans;
    }
}
