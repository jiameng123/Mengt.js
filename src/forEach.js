import { _curry2 , _forEach } from './utils';

/**
 * 循坏遍历数组或类数组对象
 * @param callback 一个回调函数，参数为数组的每一项
 * @param arr 遍历的数组项
 */

 const forEach = _curry2(_forEach);

export default forEach;


