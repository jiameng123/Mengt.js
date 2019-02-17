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

   it('Map通过set方法递归调用isEquals', function() {
        var a = new Map();
        var b = new Map();
        a.set(a, a);
        expect(M.isEquals(a, b)).toBeFalsy();
        a.set(b, b);
        b.set(b, b);
        b.set(a, a);
        expect(M.isEquals(a, b)).toBeTruthy();
   });

   it('按值比较Set对象', function() {
     expect(M.isEquals(new Set([]), new Set([]))).toBeTruthy();
     expect(M.isEquals(new Set([]), new Set([1]))).toBeFalsy();
     expect(M.isEquals(new Set([1]), new Set([]))).toBeFalsy();
     expect(M.isEquals(new Set([1, 2]), new Set([2, 1]))).toBeTruthy();
     expect(M.isEquals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])]))).toBeTruthy();
     expect(M.isEquals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])]))).toBeFalsy();
     expect(M.isEquals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]]))).toBeTruthy();
     expect(M.isEquals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]]))).toBeFalsy();
   });

   it('Sey通过add方法递归调用isEquals', function() {
        var a = new Set();
        var b = new Set();
        a.add(a, a);
        expect(M.isEquals(a, b)).toBeFalsy();
        a.add(b, b);
        b.add(b, b);
        b.add(a, a);
        expect(M.isEquals(a, b)).toBeTruthy();
    });

    it('按引用比较WeakMap', function() {
        var m = new WeakMap([]);
        expect(M.isEquals(m, m)).toBeTruthy();
        expect(M.isEquals(m, new WeakMap([]))).toBeTruthy();
        expect(M.isEquals(m, new Map([]))).toBeFalsy();
      });


    it('按引用比较WeakSet', function() {
        var m = new WeakSet([]);
        expect(M.isEquals(m, m)).toBeTruthy();
        expect(M.isEquals(m, new WeakSet([]))).toBeTruthy();
        expect(M.isEquals(m, new Map([]))).toBeFalsy();
      });

    it('递归调用isEquals', function() {
        function Left(x) { this.value = x; }
        Left.prototype.isEquals = function(x) {
          return x instanceof Left && M.isEquals(x.value, this.value);
        };
    
        function Right(x) { this.value = x; }
        Right.prototype.isEquals = function(x) {
          return x instanceof Right && M.isEquals(x.value, this.value);
        };
        expect(M.isEquals(new Left([42]), new Left([42]))).toBeTruthy();
        expect(M.isEquals(new Left([42]), new Left([43]))).toBeFalsy(); 
        expect(M.isEquals(new Left(42), {value: 42})).toBeFalsy();
        expect(M.isEquals({value: 42}, new Left(42))).toBeFalsy();
        expect(M.isEquals(new Left(42), new Right(42))).toBeFalsy();
        expect(M.isEquals(new Right(42), new Left(42))).toBeFalsy();
    
        expect(M.isEquals([new Left(42)], [new Left(42)])).toBeTruthy();
        expect(M.isEquals([new Left(42)], [new Right(42)])).toBeFalsy();
        expect(M.isEquals([new Right(42)], [new Left(42)])).toBeFalsy();
        expect(M.isEquals([new Right(42)], [new Right(42)])).toBeTruthy();
    });

    it('isEquals方式是可替换的' ,function () {
       
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.isEquals = function (point) {
            return point instanceof Point &&
                this.x === point.x && this.y === point.y;
        };

        function ColorPoint(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }
        ColorPoint.prototype = new Point(0, 0);
        ColorPoint.prototype.isEquals = function (point) {
            return point instanceof ColorPoint &&
                this.x === point.x && this.y === point.y &&
                this.color === point.color;
        };
        expect(M.isEquals(new Point(2, 2), new Point(2, 2))).toBeTruthy();
        expect(M.isEquals(new Point(2, 2), new ColorPoint(2, 2, 'red'))).toBeFalsy();
        expect(M.isEquals(new ColorPoint(2, 2, 'red'), new Point(2, 2))).toBeFalsy();
        
    })
});