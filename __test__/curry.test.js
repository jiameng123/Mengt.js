var M = require('../src');
describe('curry', function() {

    const mockFn = function(a, b, c, d) {
        return (a+b-c)*d;
    } ;

    test('单一值curry', function() {
        const f = M.curry(mockFn);
        const g = f(12);
        expect(g(1,3,9)).toBe(mockFn(12,1,3,9))
        
    });

    test('多个值curry', function() {
        const f = M.curry(mockFn);
        const g = f(12,1);
        const g2 = f(12,1,3);

        expect(g(3,9)).toBe(mockFn(12,1,3,9));
        expect(g2(9)).toBe(mockFn(12,1,3,9));
    });

    test('每次调用返回的是curry', function() {
        const f = M.curry(mockFn);
        const g = f(12);
        const g2 = g(1);
        expect(g2(3)(9)).toBe(mockFn(12,1,3,9));
    });

     test('经过curry转化后的函数参数个数', function() {
        const f = M.curry(mockFn);
        expect(f.length).toBe(4);
        const g = f(12);
       
        expect(g.length).toBe(3);
        const h = g(1);
        expect(h.length).toBe(2);
    });  

    test('保留上下文', function() {
        const ctx = { x : 1};
        const f = function(a, b) {
            return a + b + this.x;
        }
        const g = M.curry(f);
        console.log(g.call(ctx, 1,2))
        expect(g.call(ctx, 1,2)).toBe(4);
        expect(g.call(ctx, 1).call(ctx, 2)).toBe(4);
    });
    

     test('占位符', function() {
        var f = function(a, b, c) { return [a, b, c]; };
        var g = M.curry(f);
        var _ = M._m;
        expect(g(1, _, _)(2)(3)).toEqual([1, 2, 3]);
      
    }); 

   
})