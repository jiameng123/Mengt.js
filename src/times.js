import _curry2 from './utils/_curry2';

/**
 * 执行输入的函数 n 次，返回由函数执行结果组成的数组。fn 为一元函数，n 次调用接收的参数为：从 0 递增到 n-1 。
 * @func
 * @member {List}
 * @param {Function} fn 要调用的函数。接受一个参数，即n的当前值。
 * @param {Number} n 0到n-1之间的值，每次函数调用后递增。
 * @returns {Array} 一个数组，包含对fn调用的所有返回值。
 * @example
 *      
 *      M.times(M.identity, 5); //=> [0, 1, 2, 3, 4] 
 *      M.times(f, 2) = [f(0), f(1)]
 */
var times = _curry2(function(fn, n) {
   
    if( Number(n) !== Number(n)) {
        throw new RangeError('exclude NaN, n must be a effective number')
    }
    var result = [], idx = 0, len = Math.abs(n);
    while(idx < len) {
        result[idx] = fn(idx);
        idx++;
    }

    return result;
});

export default times;