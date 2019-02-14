import { _curry2 } from './utils';
/**
 *
 *  使用提供的参数运行给定的函数，总是返回该参数，通常在链式调用或者compose | pipe 函数中调试
 * @func 
 * @param {Function}  使用参数val调用fn,返回值将被丢弃
 * @param {*} val
 * @returns {*} val 
 * @example 
 *     const consoleX = x => console.log(x);
 *     tap(consoleX, 'aa') //=> aa    
 */
var tap = _curry2(function(fn, val) {
    fn(val);
    return val;
});

export default tap;
