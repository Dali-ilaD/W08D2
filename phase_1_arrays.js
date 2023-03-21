Array.prototype.uniq = function() {
   let newArr = [];
   
        this.forEach(function(ele) {
            if(!newArr.includes(ele)){
                newArr.push(ele);
            }
        }
        );
        
     console.log(newArr);
     return newArr;
};

// [1,2,2,3,3,3].uniq() 


Array.prototype.twoSum = function() {
    let newArray = [];

    for(let i = 0; i < this.length; i++) {
        for(let j = (i + 1); j < this.length; j++ ) {
            if (this[i] + this[j] === 0) {
                newArray.push([i,j])
            };
        };
    };

    return newArray
};

// console.log([1,2,3,-1,0,-2].twoSum())

Array.prototype.transpose = function() {
    let newArr = [];

    for(let c = 0; c < this[0].length; c++) {
        let row = [];
        for(let r = 0; r < this.length; r++) {
            row.push(this[r][c])
        };
        newArr.push(row)
    };

    return newArr;
};

console.log([[0,1],[1,2],[3,4]].transpose())