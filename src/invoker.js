import _curry1 from './utils/_curry1';
import _curry2 from './utils/_curry2';
import _curry3 from './utils/_curry3';
import curryN from './curryN';
import _isNumber from './utils/_isNumber';
import _isFunction from './utils/_isFunction';

/**
 * 将具有指定元数（参数个数）的具名方法，转换为可以被给定参数和目标对象直接调用的函数。
 * 返回的函数是柯里化的，它接收 arity + 1 个参数，其中最后一个参数是目标对象。
 * @func 
 * 
 * @member {Function}
 * @param {Number} arity 返回的函数应在目标对象之前接受的参数数量。
 * @param {String} method 调用方法的名称。
 * @return {Function} 科里化后的新函数
 * 
 * @example 
 * 
 *    const sliceFrom = M.invoker(1, 'slice');
 *    sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *    const sliceFrom6 = R.invoker(2, 'slice')(6);
 *    sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb M.invoker(0, 'method')(o) = o['method']()
 * @symb M.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb M.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
export const invoker = _curry2(function(arity, method) {
    return curryN(arity + 1, function() {
        const target = arguments[arity];
        if (target != null && _isFunction(target[method])) {
            return target[method].apply(target, [].slice.call(arguments, 0, arity));
        }
        throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
    });
});

export default invoker;
