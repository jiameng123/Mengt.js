export default function trampoline(func){
    while(func && func instanceof Function){
        func = func();
    }
    return func;
}