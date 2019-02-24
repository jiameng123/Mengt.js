import _curry2 from './utils/_curry2';
import _checkMethod from './utils/_checkMethod';

/**
 * 查找并返回 list 中首个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。
 * @func
 * @member {List}
 * @param {Function} fn 
 * @param {Array} list 查找的数组
 * @returns {Object} 首次满足fn的元素或undefined
 * @example
 *  
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      M.find( (x) => x.a == 2, x) //=> {a:2}
 */
var find = _curry2(function(fn, list) {
    return _checkMethod('find', function(fn, list) {
        var idx = 0;
        var len = list.length;
        while(idx < len) {
            if(fn(list[idx])) {
                return list[idx];
            }
            idx++;
        }
    })(fn, list)
});

export default find;