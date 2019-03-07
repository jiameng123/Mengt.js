import slice from './slice';
import _curry2 from './utils/_curry2';

/**
 * 提取一个数字和一个列表作为参数，返回列表中指定的前几个元素
 * take:: n -> [*] -> [*]
 * @func
 * @member {List}
 * @param {Number} n 提取列表的个数
 * @param {Array} list 待提取的列表 
 * @returns {Array} [*] 一个新的列表
 * @example
 * 
 *      M.take(1, [1,2]) //=> [1]
 *      M.take(1, 'abc') //=> a
 */
var take = _curry2(function(n, list) {
    return slice(0,  n < 0 ? Infinity : n, list);
});

export default take;