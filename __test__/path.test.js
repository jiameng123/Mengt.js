var M = require('../src');

describe('path', function () {
    var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};

    test('根据输入的路径获取对象上的值，未获取则返回undefined', function () {
        var obj = {
            a: {
              b: {
                c: 100,
                d: 200
              },
              e: {
                f: [100, 101, 102],
                g: 'G'
              },
              h: 'H'
            },
            i: 'I',
            j: ['J']
          };
        expect(M.path(['a', 'b', 'c'], obj)).toBe(100);
        expect(M.path([], obj)).toEqual(obj);
        expect(M.path(['a', 'e', 'f', 1], obj)).toBe(101);
        expect(M.path(['j', 0], obj)).toBe('J');
        expect(M.path(['j', 1], obj)).toBeUndefined();
    });

    test('输入路径中存在索引', function () {
		var obj = {
            a: [[{}], [{x: 'first'}, {x: 'second'}, {x: 'third'}, {x: 'last'}]]
          };
          expect(M.path(['a', 0, 0], obj)).toEqual({});
          expect(M.path(['a', 0, 1], obj)).toEqual(undefined);
          expect(M.path(['a', 1, 0, 'x'], obj)).toBe('first');
          expect(M.path(['a', 1, 1, 'x'], obj)).toBe('second');
          expect(M.path([0], ['A'])).toBe('A');
	});
	
	test('输入路径中存在负数索引', function() {
		expect(M.path(['x', -2] , {x: ['a', 'b', 'c', 'd']})).toBe('c');
		expect(M.path([-1, 'y'], [{x: 1, y: 99}, {x: 2, y: 98}, {x: 3, y: 97}])).toEqual(97);
	});

	test('获取对象中深层属性值', function () {
		expect(M.path(['a', 'b', 'c'], deepObject)).toBe('c');
		expect(M.path(['a'], deepObject)).toEqual(deepObject.a);
	});

	test('路径不存在对象中则返回undefined', function () {
		expect(M.path(['a', 'b', 'foo'], deepObject)).toBeUndefined();
        expect(M.path(['bar'], deepObject)).toBeUndefined();
        expect(M.path(['a', 'b'], {a: null})).toBeUndefined();
    });
    
    test('布尔值', function() {
        expect(M.path(['toString'], false)).toEqual(Boolean.prototype.toString);
    })
})