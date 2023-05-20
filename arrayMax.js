//using arry ,,for loop and if finding max value
var marks = [50,65,78,75,95,96,89]
var max = marks[0];   //dora holo 1st element boro,,eita diye sobai ke comppare kora hobe

for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element>max) {
        max = element;
    }
}
console.log('Max number is :',max);



/* using array and function for finding max number
function maxOfArray(array) {
    var max = Math.max(...array);
    //return Math.max.apply(Math, array);  //ei vabe oo kora jay
     return max;
  }
  let array =maxOfArray([1,2,3,4,5,6]);
  console.log(array);*/