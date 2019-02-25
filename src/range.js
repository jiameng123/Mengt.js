import _curry2 from './utils/_curry2';
import _isNumber from './utils/_isNumber';

/**
 * 返回从 from 到 to 之间的所有数的升序列表。左闭右开（包含 from，不包含 to）
 * @func 
 * @member {List}
 * @param {Number} from 列表中的第一个数字
 * @param {Number} to 列表中最后一个数字加1
 * @returns {Array} from到to之间的集合，不包含to
 * @example 
 * 
 *      M.range(1, 5);    //=> [1, 2, 3, 4]
 *      M.range(50, 53);  //=> [50, 51, 52]
 */
var range = _curry2(function(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
        throw new TypeError('Both arguments to range must be numbers');
    }
   var idx = from, res = [];
   while(idx < to) {
       res.push(idx);
        idx++;
    }

    return res;
});

export default range;