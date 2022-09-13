const firstUniqChar = s => {
    const charCount = {} //{h:1, e:1, l:2, 0:1}
    for(let i=0;i < s.length; i++){
        const char = s[i];
        charCount[char] = charCount[char] + 1 || 1;
    }
    
    for(let i=0; i < s.length; i++){
        const char =s[i];
        if(charCount[char] ==1){
            return i;
        }
    }
    return -1
};

console.log(firstUniqChar("hello"))