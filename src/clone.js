import  _clone from './utils/_clone';
import  _curry1 from './utils/_curry1';
import _trampoline from './utils/_transpoline'
/**
 * 
 * 深拷贝一个对象，不会复制原型链上的属性
 * @func clone
 * @member {Object}
 * @param {object} obj 
 * @returns {object} 一个新的对象
 * @example
 * 
 *      const objects = [{}, {}, {}];
 *      const objectsClone = M.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = _curry1(function(obj) {
    return obj != null && typeof obj.clone === 'function' ?
    obj.clone() :
    _clone(obj, new WeakMap(), true);
});

export default clone;
