import _curry2 from "./utils/_curry2";
import  path  from "./path";

/**
 * 获取对象指定属性的值，如果不存在则返回undefined
 * prop :: s -> {s:a} -> a | Undefined
 * @func
 * @member {Object}
 * @param {*} prop 属性名称
 * @param {Object} obj 查询的对象
 * @returns {*} obj.prop
 * @example 
 *      
 *      const obj = {x:1, y:2};
 *      M.prop('x', obj) //=> 1;
 */
var prop = _curry2(function(prop, obj) {
    return path([prop], obj);
});

export default prop;