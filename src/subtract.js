import { _curry2 } from './utils';

/**
 * 两个值相减
 * @func subtract
 * @category Math
 * @param {Number}  a
 * @param {Number} b
 * @returns {Number}
 * @see add
 * @example 
 *  add(1,2) //=> -1
 *  add('1', '2') //=> -1
 *  add(1)(2) //=> -1
 */
var subtract = _curry2(function(a , b) {
    return Number(a) - Number(b);
});

export default subtract;