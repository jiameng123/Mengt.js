import _checkMethod from './utils/_checkMethod';
import _curry3 from './utils/_curry3';
/**
 * 
 * 返回给定列表或字符串的元素，从from开始到to-1;如果传入的对象有slice方法，则直接调用该方法
 * @func
 * @member M
 * @member List
 * @param {Number} from 起始位置
 * @param {Number} to 结束位置
 * @param {Array | string}} list 列表或字符串
 * @returns {Array | string}}
 * @example 
 * 
 *     slice(1, 2, [a, b, c, d]) //=> [b]
 *     slice(1, Infinity, [a, b, c, d, e]) //=> [b, c, d, e]
 *     slice(0, -1, ['a', 'b', 'c', 'd']) //=> [a, b, c]
 *     slice(-1, -3, [a, b, c, d]) //=> [b ,c]
 *     slice(1,2, 'abc') //=> 'a'
 */
var slice = _curry3(_checkMethod('slice', function slice(from, to, list) {
    return Array.prototype.slice.call(list, from, to);
}));

export default slice;

