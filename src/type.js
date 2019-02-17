import _curry1 from './utils/_curry1';

/**
 * 
 * 检测数据类型
 * @func
 * @member M
 * @lends Type
 * @param {*} x
 * @returns {String}
 * @example
 *  
 *     type({}) //=> 'Object'
 *     type(1) //=> 'Number'
 *     type([]) //=> 'Array'
 *     type(/\.s/) //=> 'RegExp'
 *     type(null) //=> 'Null'
 *     type(undefined) //=> "Undefined"
 *     type(() => {}); //=> "Function"    
 */
 var type = _curry1(function type(x) {
     return Object.prototype.toString.call(x).slice(8, -1);
})

export default type;