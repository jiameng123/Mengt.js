export default function _isFunction (x) {
    return ~Object.prototype.toString.call(x).slice(8).indexOf('Function');
}