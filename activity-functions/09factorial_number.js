function fact(n) {
    if (n == 0) {  
        return 1;  
    }  
    else {  
        return n * fact( n - 1 );  
    }  
}


let n=5
let s=''

for(let i = n; i > 1; i--){
        s += i + " * "
}

console.log("Factorial of "+n+" is " + fact(n));
console.log(s +"1 = "+ fact(n));
