import curry from './curry';
/**
 * 提取第一个参数作为函数，其余参数作为刚提取的函数的参数，调用该函数并将结果返回。
 * @func
 * @todo 支持柯里化和部分应用
 * @member {Function}
 * @param  {...*} 第一个参数为函数
 * @return {*}
 * @example
 *  
 *      M.call(R.add, 1, 2); //=> 3
 */
var call = function call(fn) {
    return fn.apply(this, [].slice.call(arguments, 1));
};

export default call;

