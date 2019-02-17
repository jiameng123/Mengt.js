import { _curry1 } from './utils';

/**
 *
 * 返回一个函数，该函数总是返回给定值
 * @func
 * @category Function
 * @param {*} val 
 * @returns {Function} function:: * -> val
 * @example 
 *  const a = always('b');
 *  b('a') //=> 'b'
 *  b() //=> b
 */
var always = _curry1(function always(val) {
    return function () {
        return val;
    }
});

export default always;