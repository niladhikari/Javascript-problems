var speech = "I am Hridoy Adhikari. I am web developer";
var count = 0;
for (let i = 0; i < speech.length; i++) {
    let char = speech[i]; 

    if (char == " " && speech[i-1]!=" " ) {
         count++;
    }
}
count++;
console.log('The number of word is :',count);
