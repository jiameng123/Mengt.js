
import { _pipe, _initial, _arity } from './utils'
import reduceRight from './reduceRight';

/**
 * 
 * @name compose
 * @todo 函数组合 从右至左调用函数 a => b => c = a(b(c))
 * @public 
 * @param [Function] 调用的函数
 * @example 
 *      compose(f1,f2,f3)(6)
 */
const compose = function() {
    const fns = [].slice.call(arguments);
    return _arity(fns.length, reduceRight(_pipe, _initial(fns),  fns[fns.length-1]))
}

export default compose;