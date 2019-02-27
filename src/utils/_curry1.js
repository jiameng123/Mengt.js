import _isPlaceholder from "./_isPlaceholder";

/**
 * 柯理化一元函数
 * @func
 * @private
 * @param {Function} 将fn转化成柯里化 
 */
export default function _curry1(fn) {
    return function f(y) {
        if(arguments.length === 0 || _isPlaceholder(y)) return f;
        return fn.call(this, y);
    }
    
}
