export default function _isPlaceholder(a) {
    return a != null &&
           typeof a === 'object' &&
           a['@@function/placeholder'] === true;
  }