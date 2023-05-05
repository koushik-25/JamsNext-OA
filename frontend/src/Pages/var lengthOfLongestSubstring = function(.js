var lengthOfLongestSubstring = function(s) {
    //every iteration
    //while loop
    //store in hashset 
    //put a integer variable 
    const support = new Set();
    let maxNumber = 0;
    for(let i=0;i<s.length;i++)
        {
            let pointer = i;
            while(!(support.has(s.charAt(pointer))))
                {
                    support.add(s.charAt(i));
                    pointer++;
                }
            maxNumber = Math.max(support.size,maxNumber);
            support.clear();
        }
    return maxNumber;
};
console.log(lengthOfLongestSubstring("abcabcbb"));