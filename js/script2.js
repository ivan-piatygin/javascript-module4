const doMath = function (a,b, callback) {
    const result = callback(a,b);

    console.log(result);
}

// const add = function (x,y) {
//     return x+y;
// }

// const sub = function (x,y) {
//     return y-x;
// }

// doMath(11,85, add);
// doMath(11,85, sub);


// Інлайн функції

doMath (2, 3 , function(x,y) {
    return x + y;
});

doMath (5, 4 , function(x,y){
    return x - y;
});

