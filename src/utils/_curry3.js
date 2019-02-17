import _curry1 from './_curry1';
import _curry2 from './_curry2';

/**
 * @function
 * @name _curry3
 * @private
 * @todo 科里化三个参数，从左至右
 * @param {function} fn 被应用于科里化的函数
 *  
 */
export default function _curry3(fn) {
    return function f3(a,b,c) {
        const argLen = arguments.length;
        switch(argLen) {
            case 0:
            return f3;

            case 1: 
            return _curry2(function(b, c){ return fn(a, b, c)});

            case 2:
            return _curry1(function(c) { return fn(a,b,c)});

            default:
            return fn.call(this, a, b, c);
        }
    }
}