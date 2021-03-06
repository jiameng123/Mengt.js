import _curry1 from './_curry1';
import _curry2 from './_curry2';
import _isPlaceholder from './_isPlaceholder';

/**
 * @function
 * @name _curry3
 * @private
 * @param {function} fn 被应用于科里化的函数
 *  
 */
export default function _curry3(fn) {
    return function f3(a, b, c) {
        const argLen = arguments.length;
        switch (argLen) {
            case 0:
                return f3;

            case 1:
                return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
                    return fn.call(this, a, _b, _c)
                });

            case 2:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f3 :
                    _isPlaceholder(a) ? _curry2(function (_a, _c) {
                        return fn.call(this, _a, b, _c)
                    }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
                        return fn.call(this, a, _b, _c)
                    }) : _curry1(function (_c) {
                        return fn.call(this, a, b, _c)
                    });

            default:
                return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 :
                    _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
                        return fn.call(this, _a, _b, c);
                    }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
                        return fn.call(this, _a, b, _c);
                    }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
                        return fn.call(this, a, _b, _c);
                    }) : _isPlaceholder(a) ? _curry1(function (_a) {
                        return fn.call(this, _a, b, c);
                    }) : _isPlaceholder(b) ? _curry1(function (_b) {
                        return fn.call(this,a, _b, c);
                    }) : _isPlaceholder(c) ? _curry1(function (_c) {
                        return fn.call(this, a, b, _c);
                    }) : fn.call(this, a, b, c);

        }
    }
}