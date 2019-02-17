/**
 * 返回除第一项的其他元素的数组
 * @private
 * @param {arrlike} arr 
 */
export default function _tail(arr) {
    return Array.prototype.slice.call(arr, 1);
}
