function reverseString(str) {
    var newString = "";   // for add the new value
     /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "y" */
    for (var i = str.length - 1; i >= 0; i--) {  
        newString += str[i];
    }
    return newString;
}
var word = reverseString('hello i am hridoy');
console.log(word);

  /* Here example for hello length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/