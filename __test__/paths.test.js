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
})