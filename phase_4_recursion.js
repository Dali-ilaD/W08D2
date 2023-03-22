function range(start, end) {
     if (start === end){
     return [start]
     };
     return range(start, end-1).concat([end]);
};

// console.log(range(1,7))

const sumRec = (arr) => {
    if(arr.length === 1){
        return arr[0]
    };

    return arr[0] + sumRec(arr.slice(1,arr.length))
};
let a = [1,2,3];
// console.log(sumRec(a));

// console.log(a);

// console.log(a, "subs");

const exponent = (base, exp) => {
    if (exp === 1) {
        return base;
    };

    return base * exponent(base, exp-1);
};

// console.log(exponent(2,4), "two to the fourth");

const fibonacci = (n) => {
    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1,1];
    };
    let prior = fibonacci(n-1);
    let i = prior.length - 1;

    return prior.concat(prior[i] + prior[i-1]);
};

console.log(fibonacci(5));