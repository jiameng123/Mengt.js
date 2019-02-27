var M = require('../src');

describe('paths', function () {
    var obj = {
        a: {
          b: {
            c: 1,
            d: 2
          }
        },
        p: [{q: 3}, 'Hi'],
        x: {
          y: 'Alice',
          z: [[{}]]
        }
      };

    test('获取路径并返回正确的路径值', function () {
        expect(M.paths([['a', 'b', 'c'], ['x', 'y']],  obj)).toEqual([1, 'Alice']);
        expect(M.paths([['a', 'b', 'd'], ['p', 'q']], obj)).toEqual([2, undefined]);
    });

    test('输入路径中存在索引', function () {
		expect(M.paths([['p', 0, 'q'], ['x', 'z', 0, 0]], obj)).toEqual([3, {}]);
		expect(M.paths([['p', 0, 'q'], ['x', 'z', 2, 1]], obj)).toEqual([3, undefined]);
	});
	
	test('输入路径中存在负数索引', function() {
		expect(M.paths([['p', -2, 'q'], ['p', -1]] , obj)).toEqual([3, 'Hi']);
		expect(M.paths([['p', -4, 'q'], ['x', 'z', -1, 0]], obj)).toEqual([undefined, {}]);
	});

	test('获取对象中深层属性值', function () {
		expect(M.paths([['a', 'b']], obj)).toEqual([obj.a.b]);
		expect(M.paths([['p', 0]], obj)).toEqual([obj.p[0]]);
	});

	test('路径不存在对象中则返回undefined', function () {
		expect(M.paths([['a', 'x', 'y']], obj)).toEqual([undefined]);
		expect(M.paths([['p', 2]], obj)).toEqual([undefined]);
	});
})