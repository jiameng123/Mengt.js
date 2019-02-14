import { _curry1, _arity } from './utils';

/**
 * 
 * 接受一个函数，返回一个包装函数，使得接受的函数无论调用多少次，只返回第一次调用的结果
 * @param {Function} func
 * @returns {Function} 返回一个包装函数
 * @@example 
 *      const addOnce = M.once(x => x+1)
 *      addOnce(10); // 11;
 *      addOnce((addOneOnce(50)); //11
 */
var once = _curry1(function once (func) {
    var called = false, memo;
    return _arity(func.length,  function() {
        if(called) return memo;
        called = true;
        memo = func.apply(this, arguments);
        func = null;
        return memo;
    })
})

export default once;