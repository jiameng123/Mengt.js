import isEquals from '../isEquals';
import _isArray from './_isArray';
export default function _indexOf(list, a, idx) {
    if(typeof list.indexOf === 'function' && !_isArray(list)) {
        return list.indexOf(a, idx);
    }

    while(idx < list.length) {
        if(isEquals(list[idx], a)) {
            return idx;
        }
        idx++;
    }

    return -1;
}