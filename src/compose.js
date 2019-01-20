
import { _curryN } from './utils';
import reduceRight from './reduce';
/**
 * 函数组合 从右之左调用函数
 * 
 * @public 
 * @param [Function] 调用的函数
 * @example 
 *      compose(f1,f2)(f3)(6)
 *      compose(f1)(f2)(f3)(6)
 *      compose(f1,f2,f3)(6)
 */
const compose = _curryN( function compose(...fns) {
    return function(...args) {

      return reduceRight(function(f1, f2) {
          console.log(f1, f2)
        return f2.call(this, f1)
      }, fns, args)

      /*  return fns.reverse().reduce((f1, f2) => {
            return  f2.call(this, f1)
        }, args) */
    }
})

export default  compose;