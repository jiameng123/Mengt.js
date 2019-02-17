import _curry2  from './utils/_curry2';
/**
 * 
 * 两个值相加
 * @func add
 * @memberOf M
 * @lends Math
 * @param {Number}  a
 * @param {Number} b
 * @returns {Number}
 * @see subtract
 * @example 
 * 
 *      add(1,2) //=>3
 *      add('1', '2') //=>3
 *      add(1)(2) //=>3
 */
var add = _curry2(function(a , b) {
    return Number(a) + Number(b);
});

export default add;