import { _curry2, _isEquals } from './utils';

var isEqual = _curry2(function(a, b) {
    return _isEquals(a, b, [], []);
});

export default isEqual;