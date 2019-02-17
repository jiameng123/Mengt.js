import  _clone from './utils/_clone';
import  _curry1 from './utils/_curry1';

/**
 * 
 * 潜复制一个对象或者数组，不会复制原型链上的属性,
 * @param {object} obj 
 * @returns object 
 */
var clone = _curry1(function(obj) {
    return _clone(obj, [], [], true)
});

export default clone;
