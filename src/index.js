import omit from './omit';
import reduce from './reduce';
import reduceRight from './reduceRight';
import compose from './compose';
import pipe from './pipe';
import forEach from './forEach';
import tap from './tap';

var M = (function () {

    return {
        omit,
        reduce,
        reduceRight,
        compose,
        pipe,
        forEach,
        tap
    }

})();

export default M;