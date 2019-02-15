import curryN from './curryN';
import { _curry1, _isFunction } from './utils';

/**
 * 
 * 柯里化未知参数个数的函数
 * @func curry
 * @category Function
 * @returns {Function} 
 * 
 */
var curry =  _curry1(function curry (fn) {
    if(!_isFunction(fn)) {
         throw new Error(fn+ ' is not a function!');
    }
    return curryN(fn.length, fn);
});

export default curry;