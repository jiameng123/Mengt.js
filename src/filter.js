import _curry2 from './utils/_curry2';
import _checkMethod from './utils/_checkMethod';
import reduce from './reduce';
import type from './type';

var filter = _curry2(function(fn, list) {
    var acc;
    switch (type(list)) {
        case 'Object':
            acc = {};
            break;
        default:
            acc = [];
            break;
    }

    return reduce(function(x) {
        var result  = fn(x);
        if(result) return x;
        
    }, list, acc);
});

export default filter;