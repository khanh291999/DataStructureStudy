const reverse = num => {
    return (
        parseFloat(
          num
            .split('')
            .reverse()
            .join('')
        ) 
      )          
};

console.log(reverse(123 +''))