//将iterable转换成Map;
export default function _getIteratorValue(iterable) {
    var next;
    var iter = new Map();
  
    while(!(next = iterable.next()).done) {
        iter.set(JSON.stringify(next.value[0]), next.value[1]);
    }
    return iter;
};