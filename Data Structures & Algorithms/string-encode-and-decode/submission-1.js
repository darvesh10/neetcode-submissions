class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (let s of strs) {
            str += s.length + "#" + s;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let i = 0;
        let j = 0;
        while (i < str.length) {
            while (str[j] !== "#") {
                j++;
            }
            let len = Number(str.substring(i, j));
            let word = str.substring(j + 1, j + 1 + len);
            arr.push(word);
            i = j + 1 + len;
            j = i;
        }
        return arr;
    }
}
