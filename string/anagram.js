const isAnagram = (s,t) =>{
    const sString = s.split("").sort().join("");
    const tString = t.split("").sort().join("");
    return sString === tString;
}

const isAnagramOptimize = (s,t) =>{
    if(s.length !== t.length) return false;
    const sCount = {};
    const tCount = {};
    const N = s.length
    for(let i=0; i< N; i++){
        if(!sCount[s[i]]) sCount[s[i]] = 0
        if(!tCount[t[i]]) tCount[t[i]] = 0
        sCount[s[i]]++
        tCount[t[i]]++
    }
    console.log(s, ":", sCount)
    console.log(t, ":", tCount)
    for(let ch in sCount){
        if (sCount[ch] !== tCount[ch]) return false
    }
    return true
}

console.log(isAnagramOptimize("taco","ocat"))