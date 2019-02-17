import _curry3 from '../../src/utils/_curry3';

describe('test _curry3', () => {
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
    

})