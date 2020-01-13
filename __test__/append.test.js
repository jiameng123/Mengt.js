var M = require('../src');

describe('append', function() {
    test('添加元素至列表尾', function() {
        expect(M.append('x', [ 'y', 'z' ])).toEqual([ 'y', 'z', 'x' ]);
        expect(M.append([ 'a', 'z' ], [ 'x', 'y' ])).toEqual([ 'x', 'y', [ 'a', 'z' ] ]);
    });

    test('空数组添加元素', function() {
        expect(M.append('x', [])).toEqual([ 'x' ]);
    });
});
