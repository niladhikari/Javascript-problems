var id = [3,5,8,3,4,5,6,8,2,4];
var uniqeId = [];

for (let i = 0; i < id.length; i++) {
    let element = id[i];
    let index = uniqeId.indexOf(element); //indexof diye check kora hoy tar position koto
    /*ekhane check kora holo index 0 or er besi ki na,,,
     jodi kom hoy are entry ney.karon oi insex er value age array te chilo na
     tai push er madhome add kora hoy.tai -1 */
    if (index == -1) {         
        uniqeId.push(element);
    }
}
console.log("Once Entry id is : ",uniqeId);