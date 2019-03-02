import _isPlaceholder from "./_isPlaceholder";
import _arity from "./_arity";

export default function _curryN(length, recived, fn) {
    return function() {
        var combined = [];
        var args = [].slice.call(arguments);
        var argsIdx = 0;
        var offset = length;

        while(combined.length < recived.length || argsIdx < args.length) {
            var result;
            if(combined.length < recived.length && (!_isPlaceholder(recived[combined.length]) || argsIdx >= args.length)) {
                result = recived[combined.length];
            } else {
                result = args[argsIdx];
                argsIdx++;
            }
          
            combined[combined.length] = result;
            if(!_isPlaceholder(result)) offset -= 1;
         
        }
        
        return offset <= 0 ? fn.apply(this, combined) : _arity(offset, _curryN(length, combined, fn));
    }
}

