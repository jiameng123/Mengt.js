import { _curry3  } from './utils';

/**
 * 实现reduece方法
 * 
 * @param {function}  fn处理list每一项的回调
 * @param {array} list 数组
 * @param {any} init 首次执行的初始值
 * @return 累加值
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