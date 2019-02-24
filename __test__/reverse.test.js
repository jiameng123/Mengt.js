import revers from '../src/revers';

describe(' reverse', function() {
    it('test array for revers', function() {
        const a = [1, 2, 3];
        const b = revers(a);
        expect(b).toEqual([3,2,1]);
    })

    it('test string for revers', function() {
        const a = 'abc';
        const b = revers(a);
        expect(b).toBe('cba');
    })

    it('test array for revers return []', function() {
        const a = [];
        const b = revers(a);
        expect(b).toEqual([]);
    })

    it('Expect string type or array type', function() {
        const a = {a:111};
        var errorFn = function () {
            return revers(a);
        }
        expect(errorFn).toThrowError('Expect string type or array type')
    })
})