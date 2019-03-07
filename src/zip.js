import _curry2 from './utils/_curry2';

/**
 * 生成一组序对的列表
 * @func
 * @member {List}
 * @param {Array} list1 第一个数组
 * @param {Array} list2 第二个数组
 * @returns {Array}
 * @example 
 * 
 *      M.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 */
var zip = _curry2(function(list1, list2) {
    var len = Math.min(list1.length, list2.length);
    var idx = 0;
    var result = [];
    while(idx < len) {
        result[idx] = [list1[idx], list2[idx]];
        idx++;
    }
    
    return result;
});


export default zip;
