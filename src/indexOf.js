import _curry2 from './utils/_curry2';
import _indexOf from './utils/_indexOf';

/**
 * 返回给定元素在数组中首次出现时的索引值，如果数组中没有该元素，则返回 -1。通过 M.isEquals 函数进行相等性判断
 * @func
 * @member {List}
 * @param {*}  target 要查找的项
 * @param {Array} sorce 要搜索的数组
 * @returns {Number} 目标索引，如果未找到则返回-1
 * @example
 *  
 *       M.indexOf(3, [1,2,3,4]); //=> 2
 *       M.indexOf(10, [1,2,3,4]); //=> -1
 */
var indexOf = _curry2(function (target, sorce) {
    return _indexOf(sorce, target, 0);
});

export default indexOf;