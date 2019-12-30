function getMin(){  
    let i; 
    let result = arguments[0]; 
    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] < result) {
            result = arguments[i];
        }
    }
    return result;
}

getMin(1,2,3,-22);