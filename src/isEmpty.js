import _curry1 from './utils/_curry1';
import _isNumber from './utils/_isNumber';
import _isObject from './utils/_isObject';
import has from './has';

/**
 * 
 * 检测给定值是否为其所属类型的空值，若是则返回 true ；否则返回 false 。
 * @func
 * @member M
 * @member Logic
 * @param {*} obj 
 * @returns {Boolean}
 * @example 
 * 
 *      isEmpty([1, 2, 3]);   //=> false
 *      isEmpty([]);          //=> true
 *      isEmpty('');          //=> true
 *      isEmpty(null);        //=> false
 *      isEmpty({});          //=> true
 *      isEmpty({length: 0}); //=> false
 */
var isEmpty = _curry1(function isEmpty(obj) {
    if(obj == null || _isNumber(obj)) return false;
    
    if(!_isObject(obj)) return obj.length === 0;
    for(var key in obj) {
        return !has(key, obj);
    } 

    return true;
});

export default isEmpty;