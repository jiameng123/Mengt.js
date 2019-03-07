var M = require('../src');

describe('drop', function () {
    test('返回列表中第n个元素后的所有元素', function () {
     
        expect(M.drop(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toEqual(['d', 'e', 'f', 'g']);
    });

    test('如果n大于数组长度则返回一个空数组', function () {
        expect(M.drop(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toEqual([]);
    });

    test('如果n小于等于0则返回一个相等的数组', function () {
        expect(M.drop(0, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(M.drop(-1, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(M.drop(-Infinity, [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('可以对字符串进行操作', function () {
        expect(M.drop(3, 'Ramda')).toBe('da');
        expect(M.drop(4, 'Ramda')).toBe('a');
        expect(M.drop(5, 'Ramda')).toBe('');
        expect(M.drop(6, 'Ramda')).toBe('');
    });
});


