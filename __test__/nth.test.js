var M = require('../src');

describe('nth', function () {
    var list = ['foo', 'bar', 'baz', 'quux'];

    test('n为正整数', function () {
        expect(M.nth(0, list)).toBe('foo');
        expect(M.nth(1, list)).toBe('bar');
        expect(M.nth(2, list)).toBe('baz');
        expect(M.nth(3, list)).toBe('quux');
        expect(M.nth(4, list)).toBeUndefined();

        expect(M.nth(0, 'abc')).toBe('a');
        expect(M.nth(1, 'abc')).toBe('b');
        expect(M.nth(2, 'abc')).toBe('c');
        expect(M.nth(3, 'abc')).toBe('');
    });

    test('n为负整数', function () {
        expect(M.nth(-1, list)).toBe('quux');
        expect(M.nth(-2, list)).toBe('baz');
        expect(M.nth(-3, list)).toBe('bar');
        expect(M.nth(-4, list)).toBe('foo');
        expect(M.nth(-5, list)).toBeUndefined();

        expect(M.nth(-1, 'abc')).toBe('c');
        expect(M.nth(-2, 'abc')).toBe('b');
        expect(M.nth(-3, 'abc')).toBe('a');
        expect(M.nth(-4, 'abc')).toBe('');
    });

    test('list为null或者undefined时抛出错误', function () {
        function err1 () {
            M.nth(0, null);
        }
        function err2 () {
            M.nth(0, undefined);
        }
        
        expect(err1).toThrow();
        expect(err2).toThrow();
        
    });

})