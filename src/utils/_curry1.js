/**
 * 
 * @function
 * @name _curry1
 * @todo 单一参数柯里化
 * @private
 * @param {Function} 将fn转化成柯里化 
 */
export default function _curry1(fn) {
    return function f(y) {
        if(arguments.length === 0) return f;
        return fn.call(this, y);
    }
    
}
