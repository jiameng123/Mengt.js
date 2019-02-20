var M = require('../src');

describe('keys', function () {
    var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};

    it('返回给定对象的键数组', function () {
        expect(M.keys(obj).sort()).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
    });

    it('hasOwnProperty 属性重写', function() {
        expect(M.keys({hasOwnProperty:false})).toEqual(['hasOwnProperty'])
    });

    it('测试undefined,NaN,Number,String,Boolean', function () {
        var testData = [null, undefined, 55, '', true, false, NaN, Infinity, , []];
        var result = M.map((v, i) => M.keys(v), testData);
        expect(result).toEqual([...new Array(10)].map(v => [])) 
    });

    it('不包括对象原型上的属性', function() {
        function C() { this.a = 100; this.b = 200; }
        C.prototype.x = function() { return 'x'; };
        C.prototype.y = 'y';
        var cobj = new C();
        expect(M.keys(cobj)).toEqual(['a', 'b']);
    })

})