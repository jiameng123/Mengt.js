var M = require('../src');

describe('clone test block', function() {
    it('克隆整数', function() {
        expect(M.clone(-4)).toBe(-4);
        expect(M.clone(9007199254740991)).toBe(9007199254740991);
    });

    it('克隆浮点数', function() {
        expect(M.clone(-4.5)).toBe(-4.5);
        expect(M.clone(0.0)).toBe(0.0);
    });

    it('克隆字符串', function() {
        expect(M.clone("-4.5")).toBe("-4.5");
        expect(M.clone("aaa")).toBe("aaa");
    });

    it('克隆布尔值', function() {
        expect(M.clone(true)).toBeTruthy();
        expect(M.clone(false)).toBeFalsy();
    });
});

describe('深度克隆对象', function() {
    it('单层对象clone', function() {
        var obj = {a: 1, b: 'ramda', c: true, d: new Date(2013, 11, 25)};
        var clone = M.clone(obj);
        obj.c = false;
        obj.d.setDate(31);
        expect(clone).toEqual({a: 1, b: 'ramda', c: true, d: new Date(2013, 11, 25)});
    });

    it('clone嵌套对象', function() {
        var obj = {a: {b: {c: 'Meng'}}};
        var clone = M.clone(obj);
        obj.a.b.c = null;
        expect(clone).toEqual({a: {b: {c: 'Meng'}}});
    });

})