import type from './type';
import _curry2 from './utils/_curry2';
import _isArray from './utils/_isArray';
import _isString from './utils/_isString';

/**
 * 连接列表或字符串。
 * @func
 * @member {List}
 * @param {List} a 第一个列表
 * @param {List} b 第二个列表
 * @returns {List} 返回一个有a和b组成的新的列表
 * @example
 * 
 *      M.concat('ABC', 'DEF'); // 'ABCDEF'
 *      M.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3] 
 *      M.concat([], []); //=> []
 */
var concat = _curry2(function(a, b) {
    if(_isArray(a)) {
        if(_isArray(b)) {
            return a.concat(b);
        }
        throw new TypeError(toString(b) + ' is not an array');
    }

    if(_isString(a)) {
        if(_isString(b)) {
            return a+b;
        }
        throw new TypeError(toString(b) + ' is not an string');
    }
    throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});

export default concat;
