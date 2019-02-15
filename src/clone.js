import { _checkMethod } from './utils';
import forEach from './forEach';


/**
 * 
 * 潜复制一个对象或者数组，不会复制原型链上的属性,
 * @param {object} obj 
 * @returns object 
 */
export default function _clone(obj) {
    if(obj == null) return {};
    if(_isArray(obj)) {
        return _checkMethod('concat', function() {
            
        })
    }
    
}
