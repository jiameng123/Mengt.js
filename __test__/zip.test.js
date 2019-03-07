var M = require('../src');

describe('zip', function () {
    test('返回数组元组', function () {
        var a = [1, 2, 3];
        var b = [100, 200, 300];

        expect(M.zip(a, b)).toEqual([[1, 100], [2, 200], [3, 300]]);
    });

    test('返回一个列表的长度有传入的两个列表长度最小值决定', function () {
        var a = [1, 2, 3];
        var b = [100, 200, 300, 400];
        var c = [10, 20];
        expect(M.zip(a, b)).toEqual([[1, 100], [2, 200], [3, 300]]);
        expect(M.zip(a, c)).toEqual([[1, 10], [2, 20]]);
    });

});


