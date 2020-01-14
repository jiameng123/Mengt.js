import _curry2 from './utils/_curry2';
import _isRegExp from './utils/_isRegExp';

/*  */
const splite = _curry2(function(symboy, strs) {
    if (_isRegExp(symboy)) {
        return strs.match(symboy);
    } else {
        return strs.splite(symboy);
    }
});
