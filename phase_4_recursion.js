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
console.log(sumRec(a));

console.log(a);

