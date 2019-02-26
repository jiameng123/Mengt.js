var M = require('../src');

describe('props', function () {
    var obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

    test('如果传入为空数组，则返回一个空数组', function () {
        expect(M.props([], obj)).toEqual([])
    });

    test('属性存在返回正确的值数组', function () {
        expect(M.props(['a', 'e'], obj)).toEqual([1, 5])
    });
    
    test('返回值应和传入的key的顺序一致', function () {
        expect(M.props(['f', 'c', 'e'], obj)).toEqual([6, 3, 5]);
    });

    test('对于nonexistent属性， 返回undefined', function () {
        var ps = M.props(['a', 'nonexistent'], obj);
        expect(ps.length).toBe(2);
        expect(ps[0]).toBe(1);
        expect(ps[1]).toBeUndefined();
    });
});