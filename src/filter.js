import _curry2 from './utils/_curry2';
import _checkMethod from './utils/_checkMethod';
import _isObject from './utils/_isObject';
import _filter from './utils/_filter';
import reduce from './reduce';
import keys from './keys';
/**
 * 迭代列表，在每个函数上调用断言函数，返回满足断言函数的元素。返回值与传入的列表类型相同
 * @func
 * @member {List}
 * @param {Function} fn 断言函数
 * @param {*} list 数组或者对象
 * @returns {*} 根据传入的对象类型，返回一个新的数组或对象
 * @example
 *      
 *       const isEven = n => n % 2 === 0;
 *       M.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 */
var filter = _curry2(_checkMethod('filter', function (fn, list) {
    return  _isObject(list) ? 
            reduce(function(acc, key) {
               var result  = fn(list[key]);
               if(result) {
                   acc[key] = list[key]
               };
               return acc;
           }, keys(list), {}) : _filter(fn, list);
       }
));

export default filter;