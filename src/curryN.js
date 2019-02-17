import _curry2  from './utils/_curry2';
import _arity  from './utils/_arity';
import _curry1  from './utils/_curry1';
import _curryN  from './utils/_curryN';
/**
 * 对函数进行柯里化，并限制柯里化函数的元数
 * @func curryN
 * @memberOf M
 * @lends Function
 * @param {number} 待柯里化函数参数的个数
 * @param {function} 待柯里化的函数 
 * @returns {Function}
 */
var curryN =  _curry2(function curryN(length, fn) {
    if(length === 1) {
        return _curry1(fn);
    } else {
        return _curryN(_arity(length, fn));

    }
});

export default curryN;