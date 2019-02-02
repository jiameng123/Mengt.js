import {_isArray, _checkMethod, } from './utils';

/**
 * 
 * @name reverse
 * @todo 以相反的顺序返回包含元素或字符新列表或字符串
 * @example
 *  reverse([1, 2]); //=> [2,1];
 *  reverse([]); //=> []
 *  reverse('abc'); //=> 'cba'
 *  reverse(''); //=> ''
 */
const reverse = _checkMethod('reverse', function(data) {
    let idx = data.length - 1;
    let result;
    
    if(typeof data === 'string') {
        result = '';
        while(idx > -1) {
            result += data[idx]
            idx--;
        }

    } else if(_isArray(data)) {
        let resIdx = 0;
        result = [];
        while(idx > -1) {
            result[resIdx] = data[idx];
            idx--;
            resIdx++;
        }

    } else {
        throw new Error(`Expect string type or array type, but get ${typeof data}`)
    }

    return result;
});

export default reverse;