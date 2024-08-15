let n = 5; 

function factorial(n) { 
    let fact = 1; 
    
    if(n === 0)
    {
      return 1;
    }
    for (let i = 2; i <= n; i++) 
    {
      fact = fact* i; 
    }
    return fact; 
}

console.log(factorial(n));
