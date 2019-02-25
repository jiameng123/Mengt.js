var M = require('../src');

describe('range', function () {
    test('返回数字列表', function() {
        expect(M.range(0, 5)).toEqual([0, 1, 2, 3, 4]);
        expect(M.range(4, 7)).toEqual([4, 5, 6]);
    });

    test('如果第二个参数不大于第一个参数，则返回空数组', function() {
        expect(M.range(5, 5)).toEqual([]);
        expect(M.range(8, 5)).toEqual([]);
    });

    test('每次返回的都是一个新的数组', function () {
        var result = M.range(10)(5);
        expect(result).toEqual([]);
        result.push(1);
        expect(M.range(10)(5)).toEqual([]);
    });

    test('如果输入参数为非数字，则抛出错误', function() {
        function err () {
            return M.range('a','b');
        }

        expect(err).toThrow('Both arguments to range must be numbers')
    })
});