var M = require('../src');

describe('prepend', function() {
    test('添加元素至列表头部', function() {
        expect(M.prepend('x', [ 'y', 'z' ])).toEqual([ 'x', 'y', 'z' ]);
        expect(M.prepend([ 'a', 'z' ], [ 'x', 'y' ])).toEqual([ [ 'a', 'z' ], 'x', 'y' ]);
    });

    test('空数组添加元素', function() {
        expect(M.prepend('x', [])).toEqual([ 'x' ]);
    });
});
