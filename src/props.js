import _curry2 from "./utils/_curry2";
import  prop  from "./prop";

/**
 * 返回 prop 的数组: 输入为 keys 数组，输出为对应的 values 数组。values 数组的顺序与 keys 的相同。
 * prop :: [k] -> {k:v} -> [v]
 * @func
 * @member {Object}
 * @param {Array} props 属性名称的数组
 * @param {Object} obj 查询的对象
 * @returns {Array} 返回数组中相对应的值
 * @example 
 * 
 *      M.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      M.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 */
var props = _curry2(function(props, obj) {
    return props.map(function(p) {
        return prop(p, obj)
    });
});

export default props;