var M = require('../src');

describe('map', function () {
    it('数组执行map', function() {
        var arr = [1, 2, ,3];
        expect(M.map(M.multiply(2), arr)).toEqual([2, 4, NaN, 6]);
        expect(M.map(M.multiply(2))(arr)).toEqual([2, 4, NaN, 6]);
    });

    it('Object执行map', function() {
        var obj = {a:1, b:2, c:3};
        expect(M.map(M.multiply(2))(obj)).toEqual({a:2, b:4, c:6});
        expect(M.map(M.multiply(2), {})).toEqual({});
    });

    it('第二个参数为函数', function() {
        var f = function(a) { return a - 1; };
        var g = function(b) { return b * 2; };
        var h = M.map(f, g);
        expect(h(10)).toBe(10*2-1)
    });

    it('对象自实现map', function() {
        var obj = {x: 100, map: function(f) { return f(this.x); }};
        expect(M.map(M.add(1), obj)).toBe(101)
    });

    it('传入null、undefined抛出类型错误', function() {
        function warpMap1 () {
            return M.map(M.add(1), null);
        }
        function warpMap2 () {
            return M.map(M.add(1), undefined);
        }
        expect(warpMap1).toThrow(' this is null or not defined');
        expect(warpMap2).toThrow(' this is null or not defined');
    });
    
});