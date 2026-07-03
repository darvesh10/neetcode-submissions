class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];

            // Ignore empty cells
            if (val === '.') continue;

            // Calculate the 3x3 box index
            // Formula: (row // 3) * 3 + col // 3
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // If the value already exists in the current row, column, or box, it's invalid
            if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }

            // Add the value to our tracking sets
            rows[r].add(val);
            cols[c].add(val);
            boxes[boxIndex].add(val);
        }
    }
    return true;
    }
}
