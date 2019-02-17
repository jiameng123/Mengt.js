import _curry2 from './utils/_curry2';

/**
 * 
 * 两个数相乘 a * b
 * @func
 * @memberOf M
 * @lends Math
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 * @see divide
 * @example
 * 
 *      multiply(10, 100) //=> 1000
 *      multiply(10)(100) //=> 1000
 */
var multiply = _curry2(function multiply(a, b) {
    return a * b
});

export default multiply;