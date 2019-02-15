var M = require('../src');

describe('keys test block', function () {
    var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};

    it('返回给定对象的键数组', function () {
        expect(M.keys(obj).sort()).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
    });

    it('hasOwnProperty 属性重写', function() {
        expect(M.keys({hasOwnProperty:false})).toEqual(['hasOwnProperty'])
    });

    it('测试undefined,NaN,Number,String,Boolean', function () {
        var testData = [null, undefined, 55, '', true, false, NaN, Infinity, , []];
        var result = testData.map(v => M.keys(v));
        expect(result).toEqual([...new Array(10)].map(v => []))
    })

})