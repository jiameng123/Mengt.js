import _curry1 from './utils/_curry1';
import slice from './slice';

/**
 *
 * 删除列表中的首个元素
 * @func tail
 * @member {List}
 * @param {*} list 
 * @returns {*}
 * @example
 * 
 *      const list = [1, 2, 3];
 *      tail(list) //=>[2,3];
 *      tail([1, 2]) //=>[2]
 *      tail([1]) //=>[]
 *      tail([]) //=> []
 *      tail('abc') //=>'bc'
 *      tail('a') //=> ''
 *      tail('') //=> ''
 */
var tail = _curry1(function(list) {
    return slice(1, list.length, list)
});

export default tail;