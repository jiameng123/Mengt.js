import _curry2  from './utils/_curry2';

/**
 * 
 * 如果对象自身含有指定的属性，则返回 true；否则返回 false。
 * @func
 * @lends Object
 * @param {String} key  要检查属性的key
 * @oarma {Obejct} obj 要查询的对象
 * @returns {Boolean} 该属性是否存在
 * @example 
 *  const obj = {a: 1};
 *  has('a', obj) //=> true
 *  has('a')({}) //=> false
 * 
 */
var has = _curry2(function(key, obj) {
    if(typeof obj !== 'object' || obj == null ) return false;
    return Object.hasOwnProperty.call(obj, key);
});

export default has;