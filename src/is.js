import _curry2 from "./utils/_curry2";

/**
 * 检查对象是否是构造函数的实例
 * is :: (* -> *) -> a -> Boolean 
 * @func
 * @member {Type}
 * @param {Funtion} ctor 构造函数
 * @param {*} val 待检测的值
 * @returns {Boolean} 
 * @example 
 * 
 *      M.is(Object, {}); //=> true
 *      M.is(Number, 1); //=> true
 *      M.is(Object, 1); //=> false
 *      M.is(String, 's'); //=> true
 *      M.is(String, new String('')); //=> true
 *      M.is(Object, new String('')); //=> true
 *      M.is(Object, 's'); //=> false
 *      M.is(Number, {}); //=> false
 */
var is = _curry2(function(ctor, val) {
    return val != null && val.constructor === ctor || val instanceof ctor;
});

export default is;