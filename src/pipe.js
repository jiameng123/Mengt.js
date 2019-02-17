import _pipe from './utils/_pipe';
import _arity from './utils/_arity';
import _tail from './utils/_tail';
import reduce from './reduce';
/**
 * 管道方法 从左到右执行函数
 * @func
 * @member M
 * @member Function
 * @param {...Function} functions
 * @returns {*}
 * @tutorial compose
 * @example 
 * 
 * 	    pipe(f1, f2, f3)({x:1,y:2});
 * 	    pipe(f1)(f2)(f3)({x:1,y:2}, 8, 10);
 */

const pipe  = function () {
    var fns = [].slice.call(arguments);
    return _arity(fns.length, reduce(_pipe, _tail(fns), fns[0]));
   
}
export default pipe;