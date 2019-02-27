import _curry3 from "./utils/_curry3";
import is from './is';

/**
 * 
 * 判断指定对象的属性是否为给定的数据类型（实例），是则返回 true ；否则返回 false 。
 * propIs :: Type -> String -> Object -> Boolean
 * @func
 * @member {Type}
 * @param {Function} type 
 * @param {String} prop 属性名称
 * @param {*} obj 要查找的对象
 * @returns {Boolean} 
 * @example 
 *      
 *      M.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      M.propIs(Number, 'x', {x: 'foo'});    //=> false
 */
var propIs = _curry3(function(types, prop, obj) {
    return is(types, obj[prop]);
});

export default propIs;