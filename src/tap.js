/**
 * 在链式调用或者compose | pipe 函数中调试
 * 
 * @public
 * @param [any] value 
 * @returns value 
 * @example 
 *      compose(f1,f2,tap, f3)(5)
 *      //console.log(f3(5))
 */
export default function tap(fn) {
   return function(val) {
       fn(val);
       return val;
   }
}