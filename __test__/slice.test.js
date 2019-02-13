var M = require('../src');

describe('slice test block', function() {
    it('数组调用', function() {
        const testArr = [1, 2, 3, 4];
        expect(M.slice(1, 0)(testArr)).toEqual([]);
        expect(M.slice(1, 1)(testArr)).toEqual([]);
        expect(M.slice(1, 2)(testArr)).toEqual([2]);
        expect(M.slice(1, 4)(testArr)).toEqual([2, 3, 4])
    });

    it('字符串调用', function() {
        const testStr = 'abc';
        expect(M.slice(0,1, testStr)).toBe('a');
        expect(M.slice(0,2, testStr)).toBe('ab');
        expect(M.slice(0,3, testStr)).toBe('abc');
        expect(M.slice(1,1, testStr)).toBe('');
        expect(M.slice(1,2, testStr)).toBe('b');
        expect(M.slice(0, -1, testStr)).toBe('ab');
        expect(M.slice(0, -2, testStr)).toBe('a');
        expect(M.slice(-1, 0, testStr)).toBe('');
        expect(M.slice(-1, -1, testStr)).toBe('');
        expect(M.slice(-1, -2, testStr)).toBe('');
    })
})