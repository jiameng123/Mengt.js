import _m from '../src/index';

describe('omit test block', function( ) {
    it('test omit', function() {
        var obj = {a:1, b:2, c:3};
        expect(_m.omit(['a'], obj)).toEqual({b:2, c:3});
    });

    it('测试柯里化调用', function() {
        var obj = {a:1, b:2, c:3};
        expect(_m.omit(['a'])(obj)).toEqual({b:2, c:3});
    });

    
})