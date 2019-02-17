import _curry2  from './utils/_curry2';

/**  @namespace M */
/**
 * 两个值相加
 * @func add
 * @memberOf M
 * @inner
 * @param {Number}  a
 * @param {Number} b
 * @returns {Number}
 * @tutorial subtract
 * @example 
 * 
 *      M.add(1,2) //=>3
 *      M.add('1', '2') //=>3
 *      M.add(1)(2) //=>3
 */
var add = _curry2(function(a , b) {
    return Number(a) + Number(b);
});

export default add;