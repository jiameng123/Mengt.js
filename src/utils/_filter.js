
export default   function _filter(fn, list) {
    var result = [];
    var len = list.length;
    var idx = -1;
    
    while(++idx < len) {
        if(fn(list[idx])) {
            result[result.length] =  list[idx];
        }
    }
   
    return result;
};