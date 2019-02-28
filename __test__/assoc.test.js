var M = require('../src');

describe('assoc', function() {
    test('覆盖浅克隆对象的指定属性', function() {
        var obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
        var obj2 = M.assoc('e', {x: 42}, obj1);
        expect(obj2).toEqual( {a: 1, b: {c: 2, d: 3}, e: {x: 42}, f: 5});
        expect(obj1.a).toStrictEqual(obj2.a);
        expect(obj1.b).toStrictEqual(obj2.b);
        expect(obj1.f).toStrictEqual(obj2.f);
    });

    test('如果克隆对象上不存在制定属性，则相当与set操作', function() {
        var obj1 = {a: 1, b: {c: 2, d: 3}, e: 4, f: 5};
        var obj2 = M.assoc('z', {x: 42}, obj1);
        expect(obj2).toStrictEqual({a: 1, b: {c: 2, d: 3}, e: 4, f: 5, z: {x: 42}});
    })
});