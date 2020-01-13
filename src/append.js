import _curry2 from './utils/_curry2';
import contact from './concat';

/**
 * 返回包含给定列表内容的新列表，后跟给定的元素。
 * @func append
 * @kind M
 * @inner
 * @member {List}
 * @param {*}  item 要添加到新列表末尾的元素。
 * @param {Array} list 要添加新项目的元素列表。
 * @returns {Array} 一个新列表，包含旧列表的元素，数组最后一个元素为item。
 * @tutorial prepend
 * @example
 *
 *      R.append('d', ['b', 'c']); //=> ['b', 'c', 'd']
 *      M.append('1', []) //=> [1]
 *     
 */
export default _curry2(function(item, list) {
    return contact(list, [ item ]);
});
