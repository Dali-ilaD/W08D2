Array.prototype.myEach = function(callback) {

    for(var i = 0; i < this.length; i++){
        callback(this[i])
    }
};


// a.myEach(function(ele){

//     console.log(ele)
// })

Array.prototype.myMap = function(callback) {
    let newArray = [];
    
    this.myEach(function(ele) {
        newArray.push(callback(ele))
    } 
    )
    return newArray;
};

// b = a.myMap(function(ele) {
//     return ele * 2
// });

// console.log(b)

Array.prototype.myReduce = function(callback,initialValue){
    let i;
    let starter;
    // console.log(initialValue,'initial');
    if(initialValue === undefined){
        starter = this[0];
        i = 1;
        
    } else {
        starter = initialValue;
        i = 0;
    };
    // console.log(i, 'i')
    // console.log(starter,'starter')
    // console.log(i);
    for(i; i < this.length; i++) {
       starter = callback(starter, this[i]);

    }
    return starter;
};


// without initialValue
let t = [1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }); // => 6
  
  // with initialValue
  let v =[1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }, 25); // => 31

console.log(t)
console.log(v)
