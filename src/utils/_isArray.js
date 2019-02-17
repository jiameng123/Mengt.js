
export default  function _isArray (x) {
    return  Array.isArray ? Array.isArray(x): Object.prototype.toString.call(x) === '[object Array]'
  }