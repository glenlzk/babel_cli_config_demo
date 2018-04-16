/**
 * Created by Glen Lin on 2018/4/16.
 */

let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]
};

for(let value of iterable) {
    console.log(value);
}


