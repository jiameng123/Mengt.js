var M = require('../src');

describe('tap', function () {
    
    it('返回一个函数，该函数始终返回传入的参数', function() {
        var f = M.tap(M.identity);
        expect(typeof f).toBe('function');
        expect(f(100)).toBe(100);
        expect(f(undefined)).toBeUndefined();
        expect(f(null)).toBeNull();
        
    });

});