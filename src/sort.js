import _curry2 from './utils/_curry2';

/**
 * 
 * 根据传入的比较器函数进行列表排序
 * @func 
 * 
 * @member {Relation} 
 * @param {Function} comparator 排序函数
 * @param {Array} list 待排序的列表
 * @return {Array} 排序后的新的列表
 * @tutorial M.sortBy
 * @example 
 * 
 *      const diff = (a, b) => a - b;
 *      sort(diff, [1,0, 4, 3, 2]) //=> [0, 1, 2, 3, 4]
 */
var sort = _curry2(function sort(comparator, list) {
   return [].slice.call(list).sort(comparator);
});

export default sort;