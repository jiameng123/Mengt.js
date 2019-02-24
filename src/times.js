import _curry2 from './utils/_curry2';

var times = _curry2(function(fn, n) {
   
    if( Number(n) !== Number(n)) {
        throw new TypeError('exclude NaN, n must be a effective number')
    }
    var result = [], idx = 0, len = Math.abs(n);
    while(idx < len) {
        result[idx] = fn(idx);
        idx++;
    }

    return result;
});

export default times;