import _includes from './utils/_includes';
import _curry2 from './utils/_curry2';

/**
 * 只要列表中有一个元素等于指定值，则返回 true；否则返回 false。通过 M.isEquals 函数进行相等性判断。也可以判断字符串中是否包含指定值。
 * @func
 * @member {List}
 * @param {Object} a 要比较的元素
 * @param {Array} list 
 * @returns {Boolean} 如果列表中包含输入的指定值则返回true， 否则返回false
 * @example
 * 
 *      M.includes(3, [1, 2, 3]); //=> true
 *      M.includes(4, [1, 2, 3]); //=> false
 *      M.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      M.includes([42], [[42]]); //=> true
 *      M.includes('ba', 'banana'); //=>true
 */
var includes = _curry2(_includes);

export default includes;