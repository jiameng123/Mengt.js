import type from '../type';
import has from '../has';

//复制对象
export default function _clone(src, from, to, deep) {
    function copy(value) {
      /*   var len = from.length, idx = 0;
        while(len--) {
            if(value === from[idx]) return to[idx];
        }

        form.push(src);
        to.push(src); */

       for(var key in src) {
           if(has(key, src)) {
                value[key] = deep ? _clone(src[key], from, to, true) :  src[key];
           }
       }

       from.pop();
       to.pop();

       return value;
    }

    switch(type(src)){
        case 'Object':  return copy({});
        case 'Array':   return copy([]);
        case 'Date':    return new Date(src.valueOf());
        case 'RegExp':  return _cloneRegExp(src);
        default:        return src;
    }
}