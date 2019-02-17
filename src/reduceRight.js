import _curry3 from './utils/_curry3';

/**
 * 
 * 对列表中每一个元素执行提供的函数（从右至左迭代），将其结果汇总为单个返回值。
 * @func
 * 
 * @member {List}
 * @param {Function}  fn处理list每一项的回调
 * @param {Array} list 数组
 * @param {*} init 首次执行的初始值
 * @returns {*} 累加值
 * @tutorial reduce
 */
const reduceRight = _curry3(function(fn, list, init) {
    let acc, idx;
   
    if(init === undefined) acc = list[list.length - 1], idx = list.length - 2;
    else acc = init, idx = list.length - 1;

    while(idx > -1) {
        acc = fn(acc, list[idx]);
        idx --;
    }

    return acc;
})

export default reduceRight;