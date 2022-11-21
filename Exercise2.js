function aumoins3(array, verifcallback) {
    console.log(verifcallback(array));
}

function verifcallback(array) {
    return array.length >= 3;
}

var arrayTest = [1,2,3,4,5,6];
var arrayTestShort = ['a','b'];
var arrayTestExact = [1,2,3];

aumoins3(arrayTest, verifcallback);
aumoins3(arrayTestShort, verifcallback);
aumoins3(arrayTestExact, verifcallback);
