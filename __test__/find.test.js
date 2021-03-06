var M = require('../src');

describe('find', function() {
    var obj1 = {x: 100};
    var obj2 = {x: 200};
    var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
    var even = function(x) { return x % 2 === 0; };
    var gt100 = function(x) { return x > 100; };
    var isStr = function(x) { return typeof x === 'string'; };
    var xGt100 = function(o) { return o && o.x > 100; };
    //var intoArray = M.into([]);

    test('返回满足谓词函数的第一个元素', function() {
        expect(M.find(even, a)).toBe(10);
        expect(M.find(gt100, a)).toBe(200);
        expect(M.find(isStr, a)).toBe('cow');
        expect(M.find(xGt100, a)).toEqual(obj2);
    });

    test('如果没有满足谓词函数的元素则返回undefined', function() {
        expect(M.find(even, ['aaaa'])).toBeUndefined();
    });

    test('空数组中返回undefined', function() {
        expect(M.find(even, [])).toBeUndefined();
    });

});