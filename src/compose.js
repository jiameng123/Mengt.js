import _pipe  from './utils/_pipe';
import _initial  from './utils/_initial';
import _arity  from './utils/_arity';
import reduceRight from './reduceRight';

/**
 * 
 * 函数组合从右至左调用函数 a => b => c = a(b(c)) 
 * @func
 * @member M
 * @member Function
 * @param [Function] 调用的函数
 * @returns {*} 
 * @tutorial pipe
 * @example 
 * 
 *      compose(f1,f2,f3)(6)
 */
const compose = function() {
    const fns = [].slice.call(arguments);
    return _arity(fns.length, reduceRight(_pipe, _initial(fns),  fns[fns.length-1]))
}

export default compose;