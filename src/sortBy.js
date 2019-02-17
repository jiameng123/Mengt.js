import _curry2 from './utils/_curry2';

/**
 * 
 * 根据传入的函数对列表进行排序
 * @func 
 * @member M
 * @member Relation
 * @param {Function} fn
 * @param {Array} list 待排序的列表
 * @return {Array} 排序后的新的列表
 * @tutorial sort
 * @example 
 * 
 *      const diff = (x) => x.age;
 *      sort(diff, [{age: 3}, {age:8}, {age:1}]) //=> [{age:1}, {age:3}, {age:8}]
 */
var sortBy = _curry2(function sortBy(fn, list) {
   return [].slice.call(list).sort(function(a, b) {
       var aa = fn(a), bb = fn(b);
      return aa > bb ? 1 : aa < bb ? -1 : 0 
   });
});

export default sortBy;