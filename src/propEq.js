import _curry3 from "./utils/_curry3";
import  isEquals  from "./isEquals";
import prop from "./prop";

/**
 * 如果指定对象属性与给定的值相等，则返回 true ；否则返回 false 。通过 M.equals 函数进行相等性判断。可以使用M.whereEq进行多个属性判断
 * propEq :: String -> a -> Object -> Boolean 
 * @func
 * @member {Relation}
 * @param {String} key 属性名称
 * @param {*} value 值
 * @param {Object} obj 要查找的对象
 * @returns {Boolean}
 * @example
 * 
 *      var obj1 = {name: 'Abby', age: 7, hair: 'blond'};
 *      M.propEq('name', 'Abby', obj1) //=> true
 */
var propEq = _curry3(function( key, value, obj) {
    return isEquals(prop(key, obj), value);
});

export default propEq;
