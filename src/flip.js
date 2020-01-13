import _curry3 from "./utils/_curry2";


/**
 * flip :: (a -> b -> c) -> a -> b -> c
 * flip函数简单的取一个函数作为参数，返回一个效果相同的函数，但是新的函数前两个参数的顺序和之前的函数两个参数的顺序正好颠倒
 * @tod 支持多参数部分应用
 */
var flip = _curry3(function(fn, x, y) {
    return fn(y, x);
});

export default flip;