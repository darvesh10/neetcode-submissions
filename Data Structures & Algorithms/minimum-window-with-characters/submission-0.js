class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        
    // Agar t bada hai to answer impossible hai
    if (t.length > s.length) return "";

    // t ke har character ki required frequency store karenge
    let need = new Map();

    for (let ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    // Kitne unique characters ki requirement hai
    let required = need.size;

    // Current window me kitne characters satisfy ho chuke hain
    let formed = 0;

    // Current window ki frequency
    let window = new Map();

    // Sliding window pointers
    let left = 0;
    let right = 0;

    // Answer store karne ke liye
    let minLen = Infinity;
    let start = 0;

    while (right < s.length) {

        // Current character include karo
        let ch = s[right];
        window.set(ch, (window.get(ch) || 0) + 1);

        // Agar kisi character ki required frequency exactly match ho gayi
        if (
            need.has(ch) &&
            window.get(ch) === need.get(ch)
        ) {
            formed++;
        }

        // Jab tak window valid hai usko shrink karo
        while (left <= right && formed === required) {

            // Minimum answer update karo
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            // Left character remove karo
            let leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);

            // Agar requirement break ho gayi
            if (
                need.has(leftChar) &&
                window.get(leftChar) < need.get(leftChar)
            ) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity
        ? ""
        : s.substring(start, start + minLen);
    }
}
