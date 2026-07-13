class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let map = {
            '+': (a,b)=>b+a,
            '-': (a,b)=>b-a,
            '*': (a,b)=>b*a,
            '/': (a,b)=>Math.trunc(b/a)
        };
        let stack = [];
        for(let i=0; i<tokens.length; i++){
            if(map[tokens[i]]){
              let a = stack.pop();
              let b = stack.pop();
              let ans = map[tokens[i]](a,b)
              stack.push(ans);
            }else{
                stack.push(Number(tokens[i]))
            }
        }
        return stack.pop();
    }
}
