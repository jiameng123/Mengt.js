import { _isFunction } from '../src/utils';

describe('isFunction test block', function(){
    it('测试generator箭头函数及函数声明' , function() {
        expect(_isFunction(function() {})).toBeTruthy();
        expect(_isFunction('aaa')).toBeFalsy();
        expect(_isFunction(() => null)).toBeTruthy();
        expect(_isFunction(function*(){})).toBeTruthy();
    })
  
})