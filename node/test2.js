
let testArray = [1,2,3,4,5,6,7,8];

console.log(testArray);

testArray = testArray.filter(function (item) {

    return item > 4;

}); 

console.log(testArray);