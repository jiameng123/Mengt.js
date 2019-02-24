import _curry1 from './utils/_curry1';
import slice from './slice';

/**
 * 返回 list 或 string 删除最后一个元素后的部分。
 * @func
 * @member {List}
 * @param {*} list
 * @returns {*}
 * @example 
 * 
 *      M.init([1, 2, 3]);  //=> [1, 2]
 *      M.init([1, 2]);     //=> [1]
 *      M.init([1]);        //=> []
 *      M.init([]);         //=> []
 *
 *      M.init('abc');  //=> 'ab'
 *      M.init('ab');   //=> 'a'
 *      M.init('a');    //=> ''
 *      M.init('');     //=> ''
 */
var init = _curry1(function(list) {
    return slice(0, -1, list);
});

export default init;