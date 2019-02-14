import { _curry1 } from './utils';

/**
 * 
 * 作为默认值或占位符功能，永远返回传入的参数
 * @func identity 
 * @param {*} x 返回的value
 * @return {*} 返回输入值'x'
 * @example
 *     identity(1) == 1
 *     identity({a:1}) //=> {a:1}
 */

var identity = _curry1(function(x) {
    return x;
});

export default identity;