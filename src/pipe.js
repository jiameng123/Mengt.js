import { _curryN } from './utils';

/**
 * 管道方法 从左到右执行函数
 * 
 * @public
 * @param [function] f1,f2,..
 * @example 
 * 		pipe(f1, f2, f3)({x:1,y:2})
 * 		pipe(f1)(f2, f3)({x:1,y:2})
 * 		pipe(f1)(f2)(f3)({x:1,y:2}, 8, 10)
 */
const pipe =  _curryN(function pipe(...fn) {
    return function (...rest) {
        fn.reduce(function(f1, f2) {
            return f2.apply(this, f1);
        }, rest)
    }
});

export default pipe;