import tail from "./tail";
import curry from "./curry";
import _m from "./_m";

/**
 * zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
 * 取一个函数和两个列表作为参数，使用两个列表相应的元素去调用这个函数，返回一个新的列表
 */
var zipWith =  curry(function(f, list1, list2, init) {
    if(!list1.length || !list2.length ) return init;
    init[init.length] = f(list1[0], list2[0]);

   return zipWith(f, tail(list1), tail(list2), init)
    
});

export default zipWith(_m, _m, _m, []);