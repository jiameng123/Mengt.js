import _curry2 from './utils/_curry2';
/**
 * 两个值相减
 * @func subtract
 * 
 * @member {Math}
 * @param {Number}  a
 * @param {Number} b
 * @returns {Number}
 * @tutorial add
 * @example
 *  
 *      add(1,2) //=> -1
 *      add('1', '2') //=> -1
 *      add(1)(2) //=> -1
 */
var subtract = _curry2(function(a , b) {
    return Number(a) - Number(b);
});

export default subtract;