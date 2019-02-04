import curryN from './curryN';
import { _curry1, _isFunction } from './utils';

/**
 * 
 * @name curry
 * @todo 柯里化未知参数个数的函数
 */
export default _curry1(function curry (fn) {
    if(!_isFunction(fn)) {
         throw new Error(fn+ ' is not a function!');
    }
    return curryN(fn.length, fn);
})