var M = require('../src');

describe('times', function () {
    test('执行输入的函数 n 次', function () {
        expect(M.times(M.identity, 5)).toEqual([0, 1, 2, 3, 4]);
        expect(M.times(function(x) { return x * 2}, 5)).toEqual([0, 2, 4, 6, 8]); 
        var mcf = jest.fn();
        M.times(mcf, 10);
        expect(mcf.mock.calls.length).toBe(10);
    });

    test('如果第二个参数不是有效的数组长度则抛出错误', function() {
        function err() {
            M.times(M.always, 'x')
        }
        expect(err).toThrow();
    })
});