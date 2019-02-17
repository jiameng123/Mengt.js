import _map from './utils/_map';
import _curry2 from './utils/_curry2';
import _checkMethod from './utils/_checkMethod';
import  curryN  from './curryN';
import type from './type';
import reuduce from './reduce';
import keys from './keys';

/**
 * 
 * 为Array和Object实现了map方法，如果第二个参数有自身的map方法，则使用自身的map方法，如果第二个参数传入的是函数类型。map会将他们组合起来相当于compose
 * @func
 * @lends List
 * @param {Function}  fn 遍历list每次执行的函数
 * @param {List|Function} list
 * @return {Array} The new list.
 * @example
 *  var double = x => x * 2;
 *  map(double, [1,2,3]) //=> [2,4,6];
 *  map(double, {a:1, b:2, c:3}) //=> {a:2, b:4, c:6};
 */
var map = _curry2(function(fn, list) {
    if(list == null) throw new TypeError(" this is null or not defined");

    var types = type(list);
    if(types === 'Function') return curryN(list.length, function() {
        return fn.call(this, list.apply(this, arguments))
    });

    if( types === 'Object' && type(list.map) !== 'Function')  return reuduce(function(acc, key) {
        acc[key] = fn(list[key]);
        return acc;
    },keys(list), {});

    return _checkMethod('map', _map)(fn, list);
});

export default map;