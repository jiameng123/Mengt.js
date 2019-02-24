var M = require('../src');

describe('findLastIndex', function() {
    var obj1 = {x: 100};
    var obj2 = {x: 200};
    var a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
    var even = function(x) { return x % 2 === 0; };
    var gt100 = function(x) { return x > 100; };
    var isStr = function(x) { return typeof x === 'string'; };
    var xGt100 = function(o) { return o && o.x > 100; };
    //var intoArray = M.into([]);

    test('返回满足谓词函数的最后一个元素的索引', function() {
        expect(M.findLastIndex(even, a)).toBe(15);
        expect(M.findLastIndex(gt100, a)).toBe(9);
        expect(M.findLastIndex(isStr, a)).toBe(3);
        expect(M.findLastIndex(xGt100, a)).toEqual(10);
    });

    test('如果没有满足谓词函数的元素则返回-1', function() {
        expect(M.findLastIndex(even, ['aaaa'])).toBe(-1);
    });

    test('空数组中返回-1', function() {
        expect(M.findIndex(even, [])).toBe(-1);
    });

});