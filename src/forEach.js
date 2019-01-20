import { _curry2 , _checkMethod } from './utils';

/**
 * 
 * @param callback 一个回调函数，参数为数组的每一项
 * @param arr 遍历的数组项
 */
const _forEach =_curry2(_checkMethod('forEach', function forEach (callback, arr) {
    for(let i = 0; i < arr.length; i++) {
       
      callback(arr[i], i);
    }
    return arr;

}))


export default _forEach;


