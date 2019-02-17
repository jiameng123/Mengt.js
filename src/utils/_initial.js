import _curry1 from "./_curry1";
import _checkMethod from "./_checkMethod";

/**
 *  
 * @private
 * @todo 获取数组array中除了最后一个元素之外的所有元素
 * @param {ArrayLike} arrlike  
 */
var _initial = _curry1(_checkMethod('slice', function(arr) {
      
    let idx = 0, result = [];
    while(idx < arr.length-1) {
        result.push(arr[idx])
        idx++;
    }
    return result;
}))
export default  _initial;