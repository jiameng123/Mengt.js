import _getIteratorValue from './_getIeratorValue';
import _isFunction from "./_isFunction";
import keys from '../keys';
import has from '../has';

//比较可迭代对象
function _uniqContentEquals(a, b, aStack, bStack) {
    var  iterA = _getIteratorValue(a),
         iterB = _getIteratorValue(b),
         result = false;
    
    for(var [k , v] of iterA) {
        if(iterB.has(k)) {
            result =  _isEquals(v, iterB.get(k), aStack, bStack);
        } else {
            return result = false;
        }
    }
    return result;
}


/**
 *
 * polyfill Obeject.is
 * @func
 * @param {*} a
 * @param {*} b
 * @returns {Boolean}
 */
function _ObjectIs(a, b) {
    if(!_isFunction(Object.is)) {
        function  _objIs(a, b) {
            if(a === b) {
                return a !== 0 || 1 / a === 1 / y
            } else {
                return x !== x && y !== y;
            }
        }
        return _objIs(a, b);
    } else {
        return Object.is(a, b)
    }
}



//比较两个对象是否相等
export default function _isEquals(a, b, aStack, bStack) {
    
    if(_ObjectIs(a, b)) {
        return true;
    }

    if(a == null || b == null ) return a === b;

    //比较传入的类型是否相等
    var typeA = Object.prototype.toString.call(a), typeB = Object.prototype.toString.call(b);
    if(typeA  !== typeB) return false;
    
    //如果a || b 存在isEquals方法 则调用自身isEquals方法 参考Ramda https://github.com/ramda/ramda/blob/master/source/internal/_equals.js
    if (typeof a.isEquals === 'function' || typeof b.isEquals === 'function') {
        return typeof a.isEquals === 'function' && a.isEquals(b) &&
          typeof b.isEquals === 'function' && b.isEquals(a);
    }

    //根据类型比较
    switch(typeA){
        case '[object Boolean]':
        case '[object Number]':
        case '[object String]':
        //通过构造函数调用和字面量创建类型不相等
        return (typeof a === typeof b && _ObjectIs(a.valueOf(), b.valueOf())); 

        //对于日期对象，获取其原始值进行比较
        case '[object Date]':
            return _ObjectIs(a.valueOf(), b.valueOf());

        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        
        //正则表达式按照源模式和标志进行比较
       case '[object RegExp]':
            return (a.source === b.source && 
                a.global == b.global && 
                a.multiline === b.multiline && 
                a.ignoreCase === b.ignoreCase && 
                a.sticky === b.sticky && 
                a.unicode === b.unicode);

        default:
            break;
    }

    if(typeof a !==  'object' || typeof b != 'object') return false;

    if(keys(a).length !== keys(b).length) return false;
    
    //处理循环引用
    var len = aStack.length;
    while(len--) {
        if(aStack[len] === a) return bStack[len] === b;
    }
    aStack.push(a);
    bStack.push(b);

    //处理Map 和Set 
    switch(typeA) {
        case '[object Map]':
            if(a.size !== b.size) {
                return false;
            }
            if(a.size === 0 ) return true;
            return _uniqContentEquals(a.entries(), b.entries(), aStack, bStack);
        case '[object Set]':
            if(a.size !== b.size) {
                return false;
            }
            if(a.size === 0 ) return true;
            return _uniqContentEquals(a.entries(), b.entries(), aStack, bStack);
        default:
        break;
    }

    var result = true;
    for(var key in a) {
        if(has(key, a)) {
            if(result) {
                result = (has(key, b) && _isEquals(a[key], b[key], aStack, bStack));
            }  
        }
        
    }

    aStack.pop(a);
    bStack.pop(b);

    return result;
    
}