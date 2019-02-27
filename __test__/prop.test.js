var M = require('../src');

describe('prop', function () {
    var fred = {
        name: 'Fred',
        age: 23
    };

    test('返回一个获取相应属性的函数', function () {
        var nm = M.prop('name');
        expect(typeof nm).toBe('function');
        expect(nm(fred)).toBe('Fred');
    });

    test('当第二个参数为undefined是，返回值与M.path处理undefined时的行为相同', function () {
        var propResult, propException, pathResult, pathException;
        try {
            propResult = M.prop('name', undefined);
        } catch (e) {
            propException = e;
        }

        try {
            pathResult = M.path(['name'], undefined);
        } catch (e) {
            pathException = e;
        }

        expect(propResult).toEqual(pathResult);
        expect(propException).toEqual(propException);
    })

});