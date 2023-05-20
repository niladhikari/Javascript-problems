/*var marks = [50, 65, 78, 75, 95, 96, 89];
var sum = 0;
    for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
    console.log("Max number is :", sum);
    }
    console.log("All number sum is :", sum);*/


function arraySum(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

var sumResult = arraySum([50, 65, 78, 75, 95, 96, 89]);
console.log(sumResult);
