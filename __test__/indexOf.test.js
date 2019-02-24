var M = require('../src');

describe('indexOf', function(){
    test('返回对象在数组中的位置', function () {
        var list = [0, 10, 20, 30];
        expect(M.indexOf(30, list)).toBe(3);
    });

    test('如果对象不存在数组中，则返回0-1', function () {
        var list = [0, 10, 20, 30];
        expect(M.indexOf(80, list)).toBe(-1);
    });

    var input = [1, 2, 3, 4, 5];
    test('返回数组项中的第一个索引', function () {
        expect(M.indexOf(1, input)).toBe(0);
    });

    test('返回数组项中的最后一个索引', function () {
        expect(M.indexOf(5, input)).toBe(4);
    });

    test('将无效的索引设置为数组对象的属性', function () {
        var list = [1, 2, 3];
        list[-2] = 4;
        expect(M.indexOf(1, list)).toBe(0);
        expect(M.indexOf(1, list)).toBe(0);
        expect(M.indexOf(4, list)).toBe(-1);
        expect(M.indexOf('1', list)).toBe(-1);
    });

    test('空数组中调用返回-1', function() {
        expect(M.indexOf('x', [])).toBe(-1);
    });

    it('对象具有isEquals', function() {
        function Just(x) { this.value = x; }
        Just.prototype.isEquals = function(x) {
          return x instanceof Just && M.isEquals(x.value, this.value);
        };
    
        expect(M.indexOf(0, [-0])).toBe(-1);
        expect(M.indexOf(-0, [0])).toBe(-1);
        expect(M.indexOf(NaN, [NaN])).toBe(0);
        expect(M.indexOf(new Just([42]), [new Just([42])])).toBe(0);
      });
    
    it('调用自身indexOf方法', function () {
        function Empty() {};
        Empty.prototype.indexOf = M.always(-1);
        
        function List(head, tail) {
            this.head = head;
            this.tail = tail;
        }
        List.prototype.indexOf = function (x) {
            var idx = this.tail.indexOf(x);
            return this.head === x ? 0 : idx >= 0 ? 1 + idx : -1;
        };

        var list = new List('b',
        new List('a',
          new List('n',
            new List('a',
              new List('n',
                new List('a',
                  new Empty()
                )
              )
            )
          )
        )
      );

      expect(M.indexOf('a', 'banana')).toBe(1);
      expect(M.indexOf('x', 'banana')).toBe(-1);;
      expect(M.indexOf('a', list)).toBe(1);
      expect(M.indexOf('x', list)).toBe(-1);;

    });

    test('数组项为函数', function () {
        var f = function() {};
        var g = function() {};
        var h = function() {};
        var list = [g, f, g, f];
        expect(M.indexOf(f)(list)).toBe(1);
        expect(M.indexOf(h)(list)).toBe(-1);
    })
})