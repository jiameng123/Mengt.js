/**
 * 
 * @name _pipe
 * @todo 接受两个函数，结合成一个新的函数返回
 * @param {Function} f 
 * @param {Function} g 
 */
export default function _pipe(f, g) {
    return function() {
        return g.call(this, f.apply(this, Array.prototype.slice.call(arguments)))
    }
}