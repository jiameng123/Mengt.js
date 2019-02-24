import _curry2 from './utils/_curry2';
import _isString from './utils/_isString';

/**
 * 返回列表或字符串的第 n 个元素。如果 n 为负数，则返回索引为 length + n 的元素。
 * @func
 * @member {List}
 * @param {Number} n 
 * @param {List} list
 * @returns {*}
 * @example 
 * 
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      M.nth(1, list); //=> 'bar'
 *      M.nth(-1, list); //=> 'quux'
 *      M.nth(-99, list); //=> undefined
 *
 *      M.nth(2, 'abc'); //=> 'c'
 *      M.nth(3, 'abc'); //=> ''
 */
var nth = _curry2(function(n, list) {
    var idx = n < 0 ? list.length + n : n;
    return _isString(list) ? list.charAt(idx) : list[idx];
});

export default nth;