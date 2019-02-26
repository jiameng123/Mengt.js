import _isFunction from './_isFunction';
import _arity from './_arity';
/**
 * 
 * @function
 * @name _curryN
 * @todo 多参数函数柯里化增加占位符
 * @private
 * @param {Function} 将fn转化成柯里化 
 */

export default function _curryN(fn) {
    if(!_isFunction(fn)) {
        throw Error(fn+ ' is not a function!');
    }
   
     return function f() {
        const args = [].slice.call(arguments);
        if(args.length < fn.length) {
            return function() {
                return f.apply(this, args.concat([].slice.call(arguments)))
            }
        } else {
          return  fn.apply(this, args);
        }
    } 
}