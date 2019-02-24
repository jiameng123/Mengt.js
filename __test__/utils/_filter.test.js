import _filter from '../../src/utils/_filter';

describe('_filter', function () {
    var arr = [1, 2, 3, 4];
    var f1 = (x) => x > 2;

    test('数组中调用', function () {
        expect(_filter(f1, arr)).toEqual([3,4])
    });

    test('回调调用次数', function () {
        var mockFn = jest.fn();
        _filter(mockFn, arr);
        expect(mockFn.mock.calls.length).toBe(4)
    });
});