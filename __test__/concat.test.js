var M = require('../src');

describe('concat', function() {
    test('数组调用concat', function() {
        expect(M.concat(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
        expect(M.concat([], ['c', 'd'])).toEqual(['c', 'd']);
    });

    test('String类型调用concat', function() {
        expect(M.concat('foo', 'bar')).toBe('foobar');
        expect(M.concat('x', '')).toBe('x');
        expect(M.concat('', 'x')).toBe('x');
        expect(M.concat('', '')).toBe('');
    });

    test('如果数组和非数组合并则抛出错误', function() {
        function err() {
            return M.concat([1], 222);
        };
        expect(err).toThrow();
    });

    test('如果字符串和非字符串合并则抛出错误', function() {
        function err() {
            return M.concat('aaa', [2222]);
        };
        expect(err).toThrow();
    });
})