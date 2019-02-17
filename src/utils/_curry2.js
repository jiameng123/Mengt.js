import _curry1 from './_curry1';

/**
 * @function
 * @name _curry2
 * @todo 两个参数函数柯里化
 * @private
 * @param {Function} 将fn转化成柯里化 
 */
export default function _curry2(fn) {
    return function f2(a, b) {
        const argLen = arguments.length;

        switch(argLen) {
            case 0:
            return f2;

            case 1:
            return _curry1( function(b) {return fn(a, b)} );

            default:
         
            return fn.call(this, a, b);
            
        }
    }
};