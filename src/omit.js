import { _curry2 } from './utils';

/**
 * 去除对象中的属性
 * 
 * @param {Array} names 是一个obj中的keys数组
 * @param {object} obj 将要去除属性的源对象
 * @example 
 * 
 *      _M.omit(['a', 'b'], {a:1, b:2,c:3}); // { c:3}
 *      _M.omit(['a','b'])({a:1, b:2, c:3}) //{c:3}
 */

const omit = _curry2(function(names, obj) {
    const result = {};
    const help = {};
    
    for(let i = 0; i < names.length; i++) {
        help[names[i]] = i;
    }

    for(var prop in obj ) {
        if(!help.hasOwnProperty(prop)) {
            result[prop] = obj[prop];
        }
    }

    return result;
});

export default omit;

