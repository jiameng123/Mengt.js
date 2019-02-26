/**
 * 
 * @private
 * @function
 * @name _partial
 * @todo 部分应用从左至右
 * @param {function} fn 部分应用转换的函数
 */
export default function _partial(fn) {
    var args = [].slice.call(arguments, 1);
    return function g () {
        var args2 = args.concat([].slice.call(arguments));
        return  args2.length < fn.length ?  g : fn.apply(this, args2);
    }
}