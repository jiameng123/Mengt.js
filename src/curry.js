import curryN from './curryN';
import _curry1  from './utils/_curry1';
import _isFunction  from './utils/_isFunction';

/**
 * 
 * 柯里化未知参数个数的函数
 * @func curry
 * @member {Function}
 * @returns {Function} 
 * 
 */
var curry =  _curry1(function curry (fn) {
    return curryN(fn.length, fn);
});

export default curry;