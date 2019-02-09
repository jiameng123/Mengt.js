import once from '../src/once';

describe('test once block', function() {
    const mockFn = jest.fn();

    it('测试回调函数只调用一次', function() {
        const testOnce = once(mockFn);
        expect(mockFn.mock.calls.length).toBe(0);
        testOnce();
        expect(mockFn.mock.calls.length).toBe(1);
        testOnce();
        testOnce();
        expect(mockFn.mock.calls.length).toBe(1);
    });

    it('提供参数调用', function() {
        const testOnce = once(function(a, b) { return a+ b});
        expect(testOnce(1,2)).toBe(3);
    });

    it('不同参数调用，永远返回第一次传入参数调用值', function() {
        var calledNum = 0;
        const testOnce = once(function(a, b) { calledNum++; return a+ b});
        const result  = testOnce(1,2);
        expect(result).toBe(3);
        expect(calledNum).toBe(1);
        const result2 = testOnce(10,5);
        expect(result2).toBe(3);
        expect(calledNum).toBe(1);
    });

    it('测试返回包装函数的参数个数', function(){
        const testOnce = once((a,b,c) => a+b+c);
        expect(testOnce.length).toBe(3)
    })
})