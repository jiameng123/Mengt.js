/**
 * 
 * 自定义Map方法
 * @param {Function} fn 
 * @param {*} list 
 */
export default function _map(fn, list) {
    var len = list.length;
    var idx = 0;
    var result = new Array(len);
    while(idx < result.length) {
        result[idx] = fn(list[idx])
        idx ++;
    }
    return result;
}