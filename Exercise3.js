function filter(array, verifcallback) {
    let arrayReturn = [];
    let arrayIndex = 0;
    for (let i = 0; i < array.length; i++) {
        
        if (verifcallback(array[i])) {
            arrayReturn[arrayIndex] = array[i];
            arrayIndex++;
        }
    }
    return arrayReturn;
}

verifcallback = a => a > 1;

var tab = [1,2,3,4,5];

console.log(filter(tab, verifcallback));