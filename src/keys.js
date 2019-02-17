import _curry1 from './utils/_curry1';
import _isFunction from './utils/_isFunction';
/**
 * 
 * 返回一个组数，包含输入对象所有的key的数组，顺序可能不一致，不会提取原型上的key
 * @func
 * 
 * @member {Object}
 * @param {Object} obj 要提取key的对象
 * @returns {Array} 包含obj所有key的数组
 * @example
 * 
 *      keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = _curry1(function(obj) {
    if(!obj) return [];
    if(Object(obj) !==  obj) return [];

    if(_isFunction(Object.keys)) return Object.keys(obj);

    var result = [];
    for(var key in obj ) {
        if(Object.prototype.hasOwnProperty.call(obj, key) && key !== 'length') {
            result[result.length] = key;
        }
    }
    return result;
    
});

export default keys;
