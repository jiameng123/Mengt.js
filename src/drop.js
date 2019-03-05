import slice from './slice';
import _curry2 from './utils/_curry2';

/**
 * 删除一个列表中前几个元素
 * drop :: n -> [*] -> [*]
 * @func
 * @member {List}
 * @param {Number} n 删除列表的个数
 * @param {Array} list 待删除的列表 
 * @returns {Array} [*] 一个新的列表
 * @example
 * 
 *      M.drop(1, [1,2]) //=> [2]
 *      M.drop(1, 'abc') //=> 'bc'
 */
var drop = _curry2(function(n, list) {
    return slice(n,  n < 0 ? Infinity : n, list);
});

export default drop;