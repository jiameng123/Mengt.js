import { _curry3 } from './utils';

/**
 * 数组从又至左累计
 * 
 * @param {function}  fn处理list每一项的回调
 * @param {array} list 数组
 * @param {any} init 首次执行的初始值
 */
const reduceRight = _curry3(function(fn, list, init) {
    let accumlator, idx;
   
    if(init === undefined) accumlator = list[list.length - 1], idx = list.length - 2;
    else accumlator = init, idx = list.length - 1;

    while(idx > -1) {
        accumlator = fn(accumlator, list[idx]);
        idx --;
    }

    return accumlator;
})

export default reduceRight;