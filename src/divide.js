import _curry2  from './utils/_curry2';

/**
 * 
 * 两个数相除 a / b
 * @func
 * @category Math
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 * @see multiply
 * @example
 *  divide(10, 100) //=> 0.1
 *  divide(10)(100) //=> 0.1
 */
var divide = _curry2(function divide(a, b) {
    return a / b
});

export default divide;