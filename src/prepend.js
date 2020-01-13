import _curry2 from './utils/_curry2';
import concat from './concat';

/**
 * 返回包含给定列表内容的新列表，头部为给定的元素。
 * @func prepend
 * @kind M
 * @inner
 * @member {List}
 * @param {*}  item 要添加到新列表头部的元素。
 * @param {Array} list 要添加新项目的元素列表。
 * @returns {Array} 一个新列表，包含旧列表的元素，数组第一个元素为item。
 * @tutorial prepend
 * @example
 *
 *      R.prepend('a', ['b', 'c']); //=> ['a', 'b', 'c']
 *      M.prepend('1', []) //=> [1]
 *
 */
export default _curry2(function(item, list) {
    return concat([ item ], list);
});
