import _curry1 from './_curry1';
import _isPlaceholder from './_isPlaceholder';

/**
 * @function
 * @name _curry2
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
            return _isPlaceholder(a) ? f2: _curry1( function(_b) {return fn(a, _b)} );
             
            default:
            return _isPlaceholder(a) && _isPlaceholder(b)
            ? f2 : _isPlaceholder(a) ? _curry1(function(_a) {
                return fn.call(this, _a, b);
            }) : _isPlaceholder(b) ? _curry1(function (_b) {
                return fn.call(this, a, _b);
            }) : fn.call(this, a, b);
           
        }
    }
};