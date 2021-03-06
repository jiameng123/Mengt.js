import _isString  from './utils/_isString';
import _curry1  from './utils/_curry1';
import slice from './slice';

/**
 * 
 * 求列表或字符串的首个元素
 * @func head 
 * @member {List}
 * @param {*} list 数组或者字符串
 * @return {*} 
 * @example 
 * 
 *      head(['a', 'b', 'c']) //=> 'a';
 *      head([]) //=> 'undefined';
 *      head('abc') //=> 'a';
 *      head('') //=> ''
 */
var head = _curry1(function head(list) {
    var result =  slice(0, 1, list);
    return _isString(result)? result.charAt(0):result[0];
});

export default head;