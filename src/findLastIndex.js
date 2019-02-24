import _checkMethod from './utils/_checkMethod';
import _curry2 from './utils/_curry2';

/**
 * 查找并返回 list中最后满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。
 * @func 
 * @member {List} 
 * @param {Function} fn 列表中的每一项循环调用谓词函数
 * @param {Array} list 
 * @returns {Number} 返回列表中最后一个满足fn的元素的索引，否则返回-1
 * @example 
 *  
 *       const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *       M.findIndex(x => x.a == 1, xs) //=> 1
 * 
 */
var findLastIndex = _curry2(function(fn, list) {
    return _checkMethod('findLastIndex', function(fn, list) {
        var len = list.length;
        while(--len && len > 0) {
            if(fn(list[len])) {
                return len;
            }
        }
        return -1;
    })(fn, list);
});

export default findLastIndex;