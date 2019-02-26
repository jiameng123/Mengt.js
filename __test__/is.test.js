var M = require('../src');

describe('is', function () {
    test('内置类型', function () {
        expect(M.is(Array, [])).toBeTruthy();
        expect(M.is(Boolean, new Boolean(false))).toBeTruthy();
        expect(M.is(Date, new Date())).toBeTruthy();
        expect(M.is(Function, function () {})).toBeTruthy();
        expect(M.is(Number, new Number(0))).toBeTruthy();
        expect(M.is(Object, {})).toBeTruthy();
        expect(M.is(RegExp, /(?:)/)).toBeTruthy();
        expect(M.is(String, new String(''))).toBeTruthy();
    });

    test('自定义类型', function () {
        function Foo() {}

        function Bar() {}
        Bar.prototype = new Foo();

        var foo = new Foo();
        var bar = new Bar();

        expect(M.is(Foo, foo)).toBeTruthy();
        expect(M.is(Bar, bar)).toBeTruthy();
        expect(M.is(Foo, bar)).toBeTruthy();
        expect(M.is(Bar, foo)).toBeFalsy();
    });

    test('一切皆为对象, 除了null和undefined', function () {
        function Foo() {}
        var foo = new Foo();
        var isObject = M.is(Object);

        expect(isObject(foo)).toBeTruthy();
        expect(isObject((function () {return arguments;})())).toBeTruthy();
        expect(isObject([])).toBeTruthy();
        expect(isObject(new Boolean(false))).toBeTruthy();
        expect(isObject(new Date())).toBeTruthy();
        expect(isObject(function () {})).toBeTruthy();
        expect(isObject(new Number(0))).toBeTruthy();
        expect(isObject(/(?:)/)).toBeTruthy();
        expect(isObject(new String(''))).toBeTruthy();

        expect(isObject('aaaa')).toBeFalsy();
        expect(isObject(null)).toBeFalsy();
        expect(isObject(undefined)).toBeFalsy();
    });

    test('不会发生隐式类型转换', function () {
        expect(M.is(Boolean, 1)).toBeFalsy();
        expect(M.is(Number, '1')).toBeFalsy();
        expect(M.is(Number, false)).toBeFalsy();
    });

    test('原始值是其构造函数的实例', function () {
        expect(M.is(Boolean, false)).toBeTruthy();
        expect(M.is(Number, 0)).toBeTruthy();
        expect(M.is(String, '')).toBeTruthy();
    });


    test('原始值不是Object的实例', function () {
        expect(M.is(Object, false)).toBeFalsy();
        expect(M.is(Object, 0)).toBeFalsy();
        expect(M.is(Object, '')).toBeFalsy();
    });
});