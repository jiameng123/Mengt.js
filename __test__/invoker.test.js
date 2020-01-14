var M = require('../src');

describe('invoker', function() {
    const concat2 = M.invoker(2, 'concat');
    it('返回具有正确参数的函数', function() {
        expect(concat2.length).toBe(3);
    });
    it('调用对象上的方法', function() {
        expect(concat2(3, 4, [ 1, 2 ])).toEqual([ 1, 2, 3, 4 ]);
    });
    /* it('如果方法不存在，则抛出TypeError', function() {
        function err() {
            M.invoker(0, 'foo')(null);
        }
        expect(err).toThrowError('null does not have a method named "foo"');
    }); */
});
