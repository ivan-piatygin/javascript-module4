const filter = function (array, test) {
const filteredArray = [];
    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }
    
    return filteredArray;
};

const callback1 = function(value) {
    return value>=3;
};

const res1 = filter([1,2,3,4,5], callback1);
console.log(res1);

const res2 = filter([1,2,3,4,5,6,7,8], function (value) {
    return value<=4;
})
console.log(res2);
