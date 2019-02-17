import _curry2 from './utils/_curry2';
import _isEquals from './utils/_isEquals';
/**
 * 如果传入的参数相等，返回true，否则返回false
 * @func
 * @member M
 * @member Relation
 * @param {*} a 
 * @param {*} b
 * @return {Boolean}
 * @example
 *  
 *      isEquals(1, 1); //=> true
 *      isEquals(1, '1'); //=> false
 *      isEquals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      isEquals(a, b); //=> true
 */
var isEqual = _curry2(function(a, b) {
    return _isEquals(a, b, [], []);
});

export default isEqual;