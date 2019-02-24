import defaultTo from '../src/defaultTo';

describe(' defaultTo', function() {
    var defaultTo99 = defaultTo(99);

    it('如果输入为null，undefined或者NaN，则返回默认值', function() {
        expect(defaultTo99(NaN)).toBe(99);
        expect(defaultTo99(undefined)).toBe(99);
        expect(defaultTo99(NaN)).toBe(99);
    });

    it('如果输入不为null,undefined或者NaN,则返回输入值', function() {
        expect(defaultTo99('default value')).toBe('default value');
        expect(defaultTo99({a:1})).toEqual({a:1});
    });

    it('如果输入的值为falsy则返回输入值', function() {
        expect(defaultTo99('')).toBe('');
        expect(defaultTo99(0)).toBe(0);
        expect(defaultTo99(false)).toBeFalsy();
        expect(defaultTo99([])).toEqual([]);
        expect(defaultTo99({})).toEqual({});
    });

    it('两个参数直接调用', function() {
        expect(defaultTo(22, 1)).toBe(1);
        expect(defaultTo(22, NaN)).toBe(22);
        expect(defaultTo(22, null)).toBe(22);
    })

})