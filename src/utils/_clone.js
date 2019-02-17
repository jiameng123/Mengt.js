import type from '../type';
import has from '../has';

//复制对象
export default function _clone(value, memo, deep) {
  var copy =  function copy(copiedValue) {
      if(memo.get(value)) return memo.get(value);
      memo.set(value, copiedValue);

       for(var key in value) {
            if(has(key, value)) {
                copiedValue[key] = deep ? _clone(value[key], memo, true) :  src[key];
            }
       }
       return copiedValue;
    }

    switch(type(value)){
        case 'Object':  return copy({});
        case 'Array':   return copy([]);
        case 'Date':    return new Date(value.valueOf());
        case 'RegExp':  return _cloneRegExp(value);
        default:        return value;
    }
}