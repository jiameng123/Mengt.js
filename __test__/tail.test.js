var M = require('../src');

describe('tail', function() {
    it('数组调用tail', function() {
        expect(M.tail([1, 2, 3])).toEqual([2,3]);
        expect(M.tail([1, 2])).toEqual([2]);
        expect(M.tail([1])).toEqual([]);
        expect(M.tail([])).toEqual([]);
    });

    it('字符串调用tail', function() {
        expect(M.tail('abc')).toBe('bc');
        expect(M.tail('bc')).toBe('c');
        expect(M.tail('c')).toBe('');
        expect(M.tail('')).toBe('');
    });
    
    it('传入数字类型返回[]', function() {
        expect(M.tail(666)).toEqual([]);
    })
})