import _curry3 from './utils/_curry3';


/**
 * 
 * 对列表中每一个元素执行提供的函数，将其结果汇总为单个返回值。
 * @func
 * @member M
 * @lends List
 * @param {Function}  fn处理list每一项的回调
 * @param {list} list 
 * @param {*} init 首次执行的初始值
 * @return {*} 累加值
 * @tutorial reduceRight
 */
const reduce =_curry3(function reduce(fn, list, init) {
    let acc, index;
   
    if(init !== undefined) acc = init, index = 0;
    else acc = list[0], index = 1;
   
    while(index < list.length) {
        acc = fn(acc, list[index]);
        index++;
    }

    return acc;
}) 

export default reduce;