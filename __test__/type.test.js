import type from '../src/type';

describe('type test block', function() {

    it('传入array类型 返回Array' , function() {
        expect(type([1,2,3])).toBe('Array')
    });

    it('传入对象类型返回Object', function() {
        expect(type({a:111})).toBe('Object');
    });

    it('传入数字或者数字对象返回Number', function() {
        expect(type(1)).toBe('Number');
        expect(type(new Number(111))).toBe('Number')
    });

    it('传入NaN返回Number', function() {
        expect(type(NaN)).toBe('Number');
    });

    it('传入字符串类型或者字符串对象返回String', function() {
        expect(type('aaaa')).toBe('String');
        expect(type(new String('aaaa'))).toBe('String');
    });

    it('传入null返回Null', function() {
        expect(type(NaN)).toBe('Number');
    });

    it('传入undefined返回Undefined', function() {
        expect(type(undefined)).toBe('Undefined');
    })

    it('传入正则表达式返回RegExp', function() {
        expect(type(/\.s/)).toBe('RegExp');
        expect(type(new RegExp('\.s'))).toBe('RegExp')
    })
    

    
})