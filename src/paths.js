import _curry2 from './utils/_curry2';
import _isInteger from './utils/_isInteger';
import nth from './nth';
import _isArray from './utils/_isArray';

/**
 * 检索对象给定路径上的值
 * @func
 * @member {Object}
 * @param {Array} paths 给定路径的数组
 * @param {Object} obj 要检索属性的对象
 * @returns {Array} 返回paths指定的路径上的值组成的数组
 * @example 
 * 
 *      M.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      M.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]    
 */
var paths = _curry2(function(paths, obj) {
  
  return paths.map(path => {
        var val = obj;
        var idx = 0;
         while (idx < path.length) {
             if(val == null) return;
             var x = path[idx] ;
             val = _isInteger(x) ? nth(x, val) : val[x];
             idx++;
         }
         return val;
         
    });

});


export default paths;

