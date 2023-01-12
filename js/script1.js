const fnA = function(message, callback) {
    console.log(message);
    console.log(callback);
    callback(100);
}

const fnB = function(number) {
    console.log("Це лог виклик фунції fnB", number)
}

fnA('fjslj;sdf', fnB);

