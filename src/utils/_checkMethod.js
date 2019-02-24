import  _isArray from './_isArray';
/**
 * 
 * @function
 * @name _checkMethod
 * @todo 检查是否具有原生实现方法，如果有就用原声的方法，如果没有就用模拟实现方法
 * @private
 * @param {string} methodname 方法名称 
 * @param {function} fn 模拟实现
 */
export default function _checkMethod(methodname, fn) {
    return function() {
        var len = arguments.length;
      
        if(len === 0) return fn();
    
        var obj = arguments[len-1];
       
        return (_isArray(obj) || typeof obj[methodname] !== 'function') ? fn.apply(this, arguments) : obj[methodname].apply(obj,  [].slice.call(arguments, 0, len))
    }
}