import { _curry2 , _checkMethod } from './utils';
import has from './has';

/**
 * 循坏遍历数组或类数组对象
 * @func 
 * @category List
 * @param callback 一个回调函数，参数为数组的每一项
 * @param {list} 遍历的数组项
 * @returns {list}
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


