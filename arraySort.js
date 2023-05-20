
//string sorting using only sort function
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort();
console.log(animals);

//number sorting using sprt and function
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return b-a
});
console.log(points);