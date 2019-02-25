import _isFunction from './_isFunction';
import _isNumber from './_isNumber';
export default function _isInteger(val) {

    if(_isFunction(Number.isInteger)) return Number.isInteger(val);
    return _isNumber(val) && isFinite(val) && Math.floor(val) === val;
    
}