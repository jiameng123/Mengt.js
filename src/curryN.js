import { _curry2, _arity, _curry1, _curryN } from './utils';

/**
 * 
 * 对函数进行柯里化，并限制柯里化函数的元数
 * @func curryN
 * @category Function
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