import { _curry2 } from './utils'

/**
 * @todo 如果第二个参数不是null或者undefined或者NAN，则返回第第二个参数，否者返回第一个参数（默认值） 
 */
var defaultTo =  _curry2(function(def, val) {
    return val == null || val !== val ? def: val;
})

export default defaultTo;

