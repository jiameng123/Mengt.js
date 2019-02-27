import _curry2 from '../../src/utils/_curry2';
import _m from '../../src/_m';

describe('_curry2', () => {
    const ad = (x, y) => {
        return x+y;
    }
    const f1 = _curry2(ad);
    test('f1 return 2', function() {
        expect(f1(2, 's')).toBe('2s');
       
        expect(f1(2)('s')).toBe('2s');
    });
    
    test('占位符测试', function () {
        var f = function(a, b) { return [a, b]; };
        var g = _curry2(f);
        expect(g(_m, 2)(1)).toEqual([1, 2]);
        expect(g(1, _m)(2)).toEqual([1, 2]);
    
        expect(g(_m, _m)(1)(2)).toEqual([1, 2]);
        expect(g(_m, _m)(1, 2)).toEqual([1, 2]);
        expect(g(_m, _m)(_m)(1, 2)).toEqual([1, 2]);
        expect(g(_m, _m)(_m, 2)(1)).toEqual([1, 2]);
    });
})