var M = require('../src');

describe('call', function () {
    test('第一个参数未函数，返回其调用结果', function() {
       
        expect(M.call(Math.max, 1, 2, 3, -99, 42, 6, 7)).toBe(42);
    });

    test('接受多个参数', function() {
        var fn = function() { return arguments.length; };
        expect(M.call(fn)).toBe(0);
        expect(M.call(fn, 'x')).toBe(1);
        expect(M.call(fn, 'x', 'y')).toBe(2);
        expect(M.call(fn, 'x', 'y', 'z')).toBe(3);
    });

    test('无法指定上下文', function() {
        var obj = {method: function() { return this === obj; }};
        expect(M.call(obj.method)).toBeFalsy();
      
    })

});