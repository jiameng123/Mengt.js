
//内部工具方法

export function _isFunction (x) {
    return Object.prototype.toString.call(x) === '[object Function]'
}

export  function _isArray (x) {
  return  Array.isArray ? Array.isArray(x): Object.prototype.toString.call(x) === '[object Array]'
}

export function _isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]'
}

export function _isNumber(x) {
    return Object.prototype.toString.call(x) === '[object Number]';
}

export function _isRegExp(x) {
    return Object.prototype.toString.call(x) === '[object RegExp]';
}


/**
 * 
 * @function
 * @name _checkMethod
 * @todo 检查是否具有原生实现方法，如果有就用原声的方法，如果没有就用模拟实现方法
 * @private
 * @param {string} methodname 方法名称 
 * @param {function} fn 模拟实现
 */
export function _checkMethod(methodname,fn) {
    return function() {
        const len = arguments.length;
      
        if(len === 0) return fn();
    
        const obj = arguments[len-1];
       
        return (_isArray(obj) || typeof obj[methodname] !== 'function') ? fn.apply(this, arguments) : obj[methodname].apply(obj,  Array.prototype.slice.call(arguments, 0, len - 1))

    }
}

/**
 * 
 * @function
 * @name _curry1
 * @todo 单一参数柯里化
 * @private
 * @param {Function} 将fn转化成柯里化 
 */
export function _curry1(fn) {
    return function f(y) {
        if(arguments.length === 0) return f;
       
        return fn.call(this, y);
    }
    
}

/**
 * 
 * @function
 * @name _curry2
 * @todo 两个参数函数柯里化
 * @private
 * @param {Function} 将fn转化成柯里化 
 */
export function _curry2(fn) {
    return function f2(a, b) {
        const argLen = arguments.length;

        switch(argLen) {
            case 0:
            return f2;

            case 1:
            return _curry1( function(b) {return fn(a, b)} );

            default:
         
            return fn.call(this, a, b);
            
        }
    }
};

/**
 * 
 * @function
 * @name _curry3
 * @private
 * @todo 科里化三个参数，从左至右
 * @param {function} fn 被应用于科里化的函数
 *  
 */
export function _curry3(fn) {
    return function f3(a,b,c) {
        const argLen = arguments.length;
        switch(argLen) {
            case 0:
            return f3;

            case 1: 
            return _curry2(function(b, c){ return fn(a, b, c)});

            case 2:
            return _curry1(function(c) { return fn(a,b,c)});

            default:
            return fn.call(this, a, b, c);
        }
    }
}
/**
 * 
 * @function
 * @name _curryN
 * @todo 多参数函数柯里化
 * @private
 * @param {Function} 将fn转化成柯里化 
 */

export function _curryN(fn) {
    if(!_isFunction(fn)) {
        throw Error(fn+ ' is not a function!');
    }
    
    return function f() {
        const args = [].slice.call(arguments);
        if(args.length < fn.length) {
            return function() {
                return f.apply(this, args.concat([].slice.call(arguments)))
            }
        } else {
          return  fn.apply(this, args);
        }
    }
}

/**
 * 
 * @private
 * @function
 * @name _partial
 * @todo 部分应用从左至右
 * @param {function} fn 部分应用转换的函数
 */
export function _partial(fn) {
    var args = [].slice.call(arguments, 1);
    return function g () {
        var args2 = args.concat([].slice.call(arguments));
        return  args2.length < fn.length ?  g : fn.apply(this, args2);
    }
}

/**
 * 
 * @todo 循环遍历数组或者对象
 * @param callback 一个回调函数，参数为数组的每一项，如果传入的是一个object，则callback
 * @param obj 遍历的数组项
 * @returns 返回一个新的数组或者object;
 */

export function _forEach(callback, obj) {

    if(!_isArray(obj) && !_isObject(obj) ) return obj;
    
    if(_isArray(obj)) {
         _checkMethod('forEach', function forEach(callback, obj) {
           
            for(let i = 0; i < obj.length; i++) {
                callback(obj[i], i);
            }
            return obj
        
        })(callback, obj)
    }

    if(_isObject(obj)) { 
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                callback(key, obj[key]);
            }
        }

    }

    return obj;

}

/**
 * 
 * @name _pipe
 * @todo 接受两个函数，结合成一个新的函数返回
 * @param {Function} f 
 * @param {Function} g 
 */
export function _pipe(f, g) {
    return function() {
        return g.call(this, f.apply(this, Array.prototype.slice.call(arguments)))
    }
}


export function _arity (n, fn) {
    switch(n){
        case 0:
        return function() { return fn.apply(this, arguments)};
        case 1:
        return function(a0) { return fn.apply(this, arguments)};
        case 2:
        return function(a0, a1) { return fn.apply(this, arguments)};
        case 3:
        return function(a0,a1, a2) { return fn.apply(this, arguments)};
        case 4:
        return function(a0, a1, a2, a3) { return fn.apply(this, arguments)};
        case 5:
        return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments)};
        case 6:
        return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments)};
        case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments)};
        case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments)};
        case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments)};
        case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments)};
        default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
}


/**
 * 
 * @private
 * @todo 返回除第一项的其他元素的数组
 * @param {arrlike} arr 
 */
export function _tail(arr) {
    return arr.slice(1)
}

/**
 *  
 * @private
 * @todo 获取数组array中除了最后一个元素之外的所有元素
 * @param {ArrayLike} arrlike  
 */
export function _initial(arr) {
    return _checkMethod('slice', function(n) {
        let idx = arr.length + n, result = [];
        while(idx > -1) {
            result.unshift(arr[idx])
            idx --;
        }
        return result;
    
    })(-2)

}

/* export function _indexOf(list, val, fromIndex) {
    fromIndex ?
    if(_isFunction(list.indexOf)) {
        switch(typeof val) {
            case 'number':
            if(a !== a) {
                while()
            }
        }
    }

}  */


