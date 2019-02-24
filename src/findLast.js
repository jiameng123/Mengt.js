import _curry2 from './utils/_curry2';
import _checkMethod from './utils/_checkMethod';

/**
 * 查找并返回list中最后一个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回undefined 。
 * @func
 * @member {List}
 * @param {Function} fn 
 * @param {Array} list 查找的数组
 * @returns {Object} 最后次满足fn的元素或undefined
 * @example
 *  
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      M.find( (x) => x.a == 1, x) //=> {a:1, b: 1}
 */
var findLast = _curry2(function(fn, list) {
    return _checkMethod('findLast', function(fn, list) {
        var len = list.length;
        while(--len && len > 0 ) {
            if(fn(list[len])) {
                return list[len];
            }
        }
       
    })(fn, list)
});


export default findLast;