import _isFunction from './_isFunction';
export default function trampoline(func){
    while(func && _isFunction(func)){
        console.log('aaaa')
        func = func();
    }
    return func;
}