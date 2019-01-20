import { _curry1 } from '../src/utils'

describe('test curry1', () => {
    const ad = (x) => {
        return x;
    }
    const f1 = _curry1(ad);

    it('_curry1(parseInt) return function', function() {
        var arr  = ["1.2","2.4","4"];
        expect(arr.map(_curry1(parseInt))).toEqual([1,2,4])
    })

    it('f1 return 2', function() {
        expect(f1(2)).toBe(2);
    });
    

})