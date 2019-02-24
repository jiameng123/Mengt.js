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

    it('clone循环引用对象', function() {
        var x = {c: null};
        var y = {a: x};
        var z = {b: y};
        x.c = z;
        var clone = M.clone(x);
        expect(x).toEqual(clone);
        expect(x.c).toEqual(clone.c);
        expect(x.c.b).toEqual(clone.c.b);
        expect(x.c.b.a).toEqual(clone.c.b.a);
        expect(x.c.b.a.c).toEqual( clone.c.b.a.c);
        expect(M.keys(clone)).toEqual( M.keys(x));
        expect(M.keys(clone.c)).toEqual( M.keys(x.c));
        expect(M.keys(clone.c.b)).toEqual(M.keys(x.c.b));
        expect(M.keys(clone.c.b.a)).toEqual(M.keys(x.c.b.a));
        expect(M.keys(clone.c.b.a.c)).toEqual( M.keys(x.c.b.a.c));

        x.c.b = 1;
       
        expect(clone.c.b).not.toEqual(x.c.b);

       
    })

})