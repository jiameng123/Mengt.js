var M = require('../src');

describe('isEquals test block', function () {
    var a = [];
    var b = a;
    it('对象相同深度相等' , function () {
        expect(M.isEquals(100, 100)).toBeTruthy();
        expect(M.isEquals(100, '100')).toBeFalsy();
        expect(M.isEquals([], [])).toBeTruthy();
        expect(M.isEquals({}, {})).toBeTruthy();
        expect(M.isEquals(a, b)).toBeTruthy();
    });

    it('传入相同Boolean类型a和b, 则a和b相等', function() {
        expect(M.isEquals(true, true)).toBeTruthy();
        expect(M.isEquals(false, false)).toBeTruthy();
        expect(M.isEquals(true, false)).toBeFalsy();
        expect(M.isEquals(false, true)).toBeFalsy();
    });

    it('传入等效的布尔值实例对象相等', function() {
        expect(M.isEquals(new Boolean(true), new Boolean(true))).toBeTruthy();
        expect(M.isEquals(new Boolean(false), new Boolean(false))).toBeTruthy();
        expect(M.isEquals(new Boolean(true), new Boolean(false))).toBeFalsy();
        expect(M.isEquals(new Boolean(false), new Boolean(true))).toBeFalsy();
    });

    it('通过构造函数创造的基本类型不等同于通过字面量创建类型', function() {
        expect(M.isEquals(new Boolean(true), true)).toBeFalsy();
        expect(M.isEquals(new Boolean(false), false)).toBeFalsy();
        expect(M.isEquals(true, new Boolean(false))).toBeFalsy();
        expect(M.isEquals(false, new Boolean(true))).toBeFalsy();

        expect(M.isEquals('', '')).toBeTruthy();
        expect(M.isEquals('a', 'a')).toBeTruthy();
        expect(M.isEquals('a', '')).toBeFalsy();
        expect(M.isEquals(new String(''), '')).toBeFalsy();
        expect(M.isEquals(new String('a'), new String('a'))).toBeTruthy();
        expect(M.isEquals('aaaa', new String('aaa'))).toBeFalsy();
        expect(M.isEquals( new String('aaa'), 'aaa')).toBeFalsy();

        expect(M.isEquals(0, 0)).toBeTruthy();
        expect(M.isEquals(0, 1)).toBeFalsy();
        expect(M.isEquals(1, 0)).toBeFalsy();
        expect(M.isEquals(new Number(0), new Number(0))).toBeTruthy();
        expect(M.isEquals(new Number(0), new Number(1))).toBeFalsy();
        expect(M.isEquals(new Number(1), new Number(0))).toBeFalsy();
        expect(M.isEquals(0, new Number(0))).toBeFalsy();
        expect(M.isEquals(new Number(0), 0)).toBeFalsy();
    
    });

    it('测试Date', function() {
        expect(M.isEquals(new Date(0), new Date(0))).toBeTruthy();
        expect(M.isEquals(new Date(1), new Date(1))).toBeTruthy();
        expect(M.isEquals(new Date(0), new Date(1))).toBeFalsy();
        expect(M.isEquals(new Date(1), new Date(0))).toBeFalsy();
    });

    it('测试对象', function() {
        var a = {}; a.v = a; a.d = a.v;
        var b = {}; b.v = b; b.d = b.v;

        expect(M.isEquals(a, b)).toBeTruthy();
        expect(M.isEquals({}, {})).toBeTruthy();
        expect(M.isEquals({a:1, b:2}, {a:1, b:2})).toBeTruthy();
        expect(M.isEquals({a:1, b:2}, {b:2, a:1})).toBeTruthy();
        expect(M.isEquals({a:2, b:2}, {b:2, a:1})).toBeFalsy();
        expect(M.isEquals({a:1, b:2, c:2}, {b:2, a:1})).toBeFalsy();
    });

    it('比较函数，如果函数参数个数相同，则返回true', function() {
        var a = (function() { return arguments; }());
        var b = (function() { return arguments; }());
        var c = (function() { return arguments; }(1, 2, 3));
        var d = (function() { return arguments; }(1, 2, 3));

        expect(M.isEquals(a, b)).toBeTruthy();
        expect(M.isEquals(b, a)).toBeTruthy();
        expect(M.isEquals(c, d)).toBeTruthy();
        expect(M.isEquals(d, c)).toBeTruthy();
        expect(M.isEquals(a, c)).toBeFalsy();
        expect(M.isEquals(c, a)).toBeFalsy();
    });

    it('同类型的Error对象是相等的', function() {
        expect(M.isEquals(new Error('xxx'))(new Error('xxx'))).toBeTruthy();
        expect(M.isEquals(new Error('xxx'))(new Error('yyy'))).toBeFalsy();
        expect(M.isEquals(new Error('xxx'))(new TypeError('xxx'))).toBeFalsy();
        expect(M.isEquals(new Error('xxx'), new TypeError('yyy'))).toBeFalsy();
        expect(M.isEquals(new TypeError('yyy'), new TypeError('yyy'))).toBeTruthy();
        expect(M.isEquals(new TypeError('yyy'), new TypeError('xxx'))).toBeFalsy();
    });

    it('测试输入正则表达式', function() {
        expect(M.isEquals(/\s/, /\s/)).toBeTruthy();
        expect(M.isEquals(/\s/, /\d/)).toBeFalsy();
        expect(M.isEquals(/a/gi, /a/ig)).toBeTruthy();
        expect(M.isEquals(/a/mgi, /a/img)).toBeTruthy();
        expect(M.isEquals(/a/gi, /a/i)).toBeFalsy();
    });

   it('测试输入列表', function() {
       var list1 = [1,2,3];
       var list2 = [1,2,4];
       expect(M.isEquals([], {})).toBeFalsy();
       expect(M.isEquals(list1, list2)).toBeFalsy();
       expect(M.isEquals([1,2,{a:3,d:[11,2, {a:{1:{a:2,e:5}}}]}], [1,2,{a:3,d:[11,2, {a:{1:{a:2,e:5}}}]}])).toBeTruthy();
   });

   it('按值比较Map对象', function() {
       expect(M.isEquals(new Map([]), new Map([]))).toBeTruthy();
       expect(M.isEquals(new Map([]), new Map([[1, 2]]))).toBeFalsy();
       expect(M.isEquals(new Map([[1, 2]]), new Map([[1, 2]]))).toBeTruthy();
       expect(M.isEquals(new Map([[1, 3]]), new Map([[1, 2]]))).toBeFalsy();
       expect(M.isEquals(new Map([[1, 'a'], [2, 'b']]), new Map([[2, 'b'], [1, 'a']]))).toBeTruthy(); 
       expect(M.isEquals(new Map([[1, 'a']]), new Map([[2, 'a']]))).toBeFalsy();
       expect(M.isEquals(new Map([[1, 'a']]), new Map([[1, 'b']]))).toBeFalsy();
       expect(M.isEquals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]]))).toBeTruthy();
       expect(M.isEquals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]]))).toBeFalsy();
       expect(M.isEquals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]]))).toBeTruthy();
       expect(M.isEquals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]]))).toBeFalsy();

   });

   it('通过set方法递归调用isEquals', function() {
        var a = new Map();
        var b = new Map();
        a.set(a, a);
        expect(M.isEquals(a, b)).toBeFalsy();
        a.set(b, b);
        b.set(b, b);
        b.set(a, a);
        expect(M.isEquals(a, b)).toBeTruthy();
   })

});