var M = require('../src');

describe('head', function() {
    it('数组调用head', function() {
        expect(M.head([1,2,3])).toBe(1);
        expect(M.head([{a:1}])).toEqual({a:1});
        expect(M.head([])).toBeUndefined();
    });

    it('字符串调用head', function() {
        expect(M.head('abc')).toBe('a');
        expect(M.head('')).toBe('');
    })

})