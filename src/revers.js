import {_isArray, _checkMethod, } from './utils';

/**
 * 
 * 以相反的顺序返回包含元素或字符新列表或字符串
 * @func
 * @param {list} list
 * @returns {list} 
 * @example
 *  reverse([1, 2]); //=> [2,1];
 *  reverse([]); //=> []
 *  reverse('abc'); //=> 'cba'
 *  reverse(''); //=> ''
 */
const reverse = _checkMethod('reverse', function(list) {
    let idx = list.length - 1;
    let result;
    
    if(typeof list === 'string') {
        result = '';
        while(idx > -1) {
            result += list[idx]
            idx--;
        }

    } else if(_isArray(list)) {
        let resIdx = 0;
        result = [];
        while(idx > -1) {
            result[resIdx] = list[idx];
            idx--;
            resIdx++;
        }

    } else {
        throw new Error(`Expect string type or array type, but get ${typeof list}`)
    }

    return result;
});

export default reverse;