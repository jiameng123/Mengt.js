import _curry3 from '../../src/utils/_curry3';
import _m from '../../src/_m';

describe('_curry3', () => {
    const ad = (x, y, z) => {
        return x+y+z;
    }
    const f1 = _curry3(ad);

    it('f1 return 3', function() {
        expect(f1(2, 1, 0)).toBe(3);
        expect(f1(2)(0)(1)).toBe(3);
        expect(f1(2, 0)(1)).toBe(3);
        expect(f1(2)(0,1)).toBe(3);
    });

    it('占位符', function () {
        var f = function(a, b, c) { return [a, b, c]; };
        var g = _curry3(f);
        expect(g(_m, 2, 3)(1)).toEqual([1, 2, 3]);
        expect(g(1, _m, 3)(2)).toEqual([1, 2, 3]);
        expect(g(1, 2, _m)(3)).toEqual([1, 2, 3]);
    
        expect(g(1, _m, _m)(2)(3)).toEqual([1, 2, 3]);
        expect(g(_m, 2, _m)(1)(3)).toEqual([1, 2, 3]);
        expect(g(_m, _m, 3)(1)(2)).toEqual([1, 2, 3]);
    
        expect(g(1, _m, _m)(2, 3)).toEqual([1, 2, 3]);
        expect(g(_m, 2, _m)(1, 3)).toEqual([1, 2, 3]);
        expect(g(_m, _m, 3)(1, 2)).toEqual([1, 2, 3]);
    
        expect(g(1, _m, _m)(_m, 3)(2)).toEqual([1, 2, 3]);
        expect(g(_m, 2, _m)(_m, 3)(1)).toEqual([1, 2, 3]);
        expect(g(_m, _m, 3)(_m, 2)(1)).toEqual([1, 2, 3]);
    
        expect(g(_m, _m, _m)(_m, _m)(_m)(1, 2, 3)).toEqual([1, 2, 3]);
        expect(g(_m, _m, _m)(1, _m, _m)(_m, _m)(2, _m)(_m)(3)).toEqual([1, 2, 3]);
    });
    

})