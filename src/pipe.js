import {  _pipe, _arity, _tail } from './utils';
import reduce from './reduce';
/**
 * 管道方法 从左到右执行函数
 * 
 * @public
 * @param [function] f1,f2,..
 * @example 
 * 		pipe(f1, f2, f3)({x:1,y:2})
 * 		pipe(f1)(f2)(f3)({x:1,y:2}, 8, 10)
 */

const pipe  = function () {
    var fns = [].slice.call(arguments);
    return _arity(fns.length, reduce(_pipe, _tail(fns), fns[0]));
   
}
export default pipe;