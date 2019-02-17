import _curry2 from './utils/_curry2';

/**
 * 去除对象中的属性
 * @fun
 * @member M
 * @lends Object
 * @param {Array} names 是一个obj中的keys数组
 * @param {object} obj 将要去除属性的源对象
 * @returns {object} 去除属性后的一个新的对象
 * @tutorial pick
 * @example 
 * 
 *      _M.omit(['a', 'b'], {a:1, b:2,c:3}); // { c:3}
 *      _M.omit(['a','b'])({a:1, b:2, c:3}) //{c:3}
 */

const omit = _curry2(function(names, obj) {
    const result = {};
    if(obj == null ) return result;
    
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

