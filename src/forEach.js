import _curry2  from './utils/_curry2';
import _checkMethod  from './utils/_checkMethod';

/**
 * 循坏遍历数组或类数组对象
 * @func 
 * @member M
 * @lends List
 * @param callback 一个回调函数，参数为数组的每一项
 * @param {list} 遍历的数组项
 * @returns {list}
 * @example
 *  
 *      const fn = x => console.log(x);
 *      const arr = [1, 2, 3];
 *      M.forEach(fn, arr) //=> 1, 2 , 3
 *      
 */

 const forEach = _curry2(_checkMethod('forEach', function(fn, list) {
    var len = list.length;
    var idx = 0;
    while(idx < len) {
        fn(list[idx]);
        idx++;
    }
    return list;
 }));

export default forEach;


