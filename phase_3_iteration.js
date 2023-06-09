Array.prototype.bubbleSort = function() {
    let sorted = false;

    while(!sorted) {
        sorted = true;
        for(let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i+1]) {
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                sorted = false;
            }
        }
    }
    return this
};

let a = [6,5,4,3,2,1].bubbleSort()

// console.log(a, "sorted")

String.prototype.substrings = function() {
    newArray = [];

    for(let i = 0; i <= this.length; i++) {
        for(let j = i + 1; j <= this.length; j++) {
            let s = this.slice(i,j);
            
            if (!newArray.includes(s)) {
                newArray.push(s)
            }
        }
    }
    return newArray;
};

a = "hippo".substrings();

