

/**
 * A function that waits 1.5s to print something.
 */
function printBonjourDelay(expression){
    setTimeout(bonjour => console.log(expression), 1500);
}

printBonjourDelay("bonjour");