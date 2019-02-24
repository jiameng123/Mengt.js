import _checkMethod from './utils/_checkMethod';
import _curry2 from './utils/_curry2';

/**
 * 查找并返回 list 中首个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。
 * @func 
 * @member {List} 
 * @param {Function} fn 列表中的每一项循环调用谓词函数
 * @param {Array} list 
 * @returns {Number} 返回列表中第一个满足fn的元素的索引，否则返回-1
 * @example 
 *  
 *       const xs = [{a: 1}, {a: 2}, {a: 3}];
 *       M.findIndex({a:2}, xs) //=> 1
 *       M.findIndex({a:4}, xs) //=> -1
 * 
 */
var findIndex = _curry2(function(fn, list) {
    return _checkMethod('findIndex', function(fn, list) {
        var idx = 0;
        var len = list.length;
        while(idx < len) {
            if(fn(list[idx])) {
                return idx;
            }
            idx++;
        }
        return -1;
    })(fn, list);
});

export default findIndex;