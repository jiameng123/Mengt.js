import _curry2 from './utils/_curry2';
import paths from './paths';

/**
 * 取出给定路径上的值
 * @func
 * @member {Object}
 * @param {Array} 
 * @param {Object}
 * @returns {*}
 * @example 
 * 
 *      M.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      M.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = _curry2(function(pathsArray, obj) {
    return paths([pathsArray], obj)[0]
});

export default path;