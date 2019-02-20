import _curry2 from './utils/_curry2';
import _checkMethod from './utils/_checkMethod';
import reduce from './reduce';
import type from './type';
import keys from './keys';

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

    return reduce(function(acc, key) {
        var result  = fn(list[key]);
        if(result) {
            acc[key] = list[key]
        };
       
        return acc;
    }, keys(list), acc);
});

export default filter;