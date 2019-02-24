var M = require('../src');

describe('init', function() {
    test('返回集合中除最后一项的所有元素', function () {
        expect(M.init([1, 2, 3])).toEqual([1, 2]);
        expect(M.init([2, 3])).toEqual([2]);
        expect(M.init([3])).toEqual([]);
        expect(M.init([])).toEqual([]);
    
        expect(M.init('abc')).toBe('ab');
        expect(M.init('bc')).toBe('b');
        expect(M.init('c')).toBe('');
        expect(M.init('')).toBe('');
    });

    test('如果输入为null或undefined，则抛出TypeError', function () {
        function er () {
            return  M.init(null);
        }
        function er2 () {
            return  M.init(undefined);
        }
        expect(er).toThrowError();
        expect(er2).toThrowError("Cannot read property 'slice' of undefined");
    });
})