import { _curry2 , _forEach } from './utils';

/**
 * 
 * @param callback 一个回调函数，参数为数组的每一项
 * @param arr 遍历的数组项
 */

 const forEach = _curry2(_forEach);

export default forEach;


