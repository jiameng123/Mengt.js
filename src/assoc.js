import _curry3 from "./utils/_curry3";

/**
 * 浅复制对象，然后设置或覆盖对象的指定属性。
 * assoc :: String -> a -> {k: v} -> {k: v}
 * @func
 * @member {Object} 
 * @param {String} prop 要设置的属性名称
 * @param {*} val 要设置属性的值
 * @param {Object} 要克隆的对象
 * @return 返回Object除已更改的属性外，等效于原始对象的新对象
 * @example
 * 
 *      M.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
var assoc = _curry3(function(prop, val, obj){
    var result = {};
    for(var key in obj) {
        result[key] = obj[key];
    }
    result[prop] = val;
    return result;
});

export default assoc;