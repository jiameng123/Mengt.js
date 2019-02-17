## Members

<dl>
<dt><a href="#clone">clone</a> ⇒</dt>
<dd><p>潜复制一个对象或者数组，不会复制原型链上的属性,</p>
</dd>
<dt><a href="#once">once</a> ⇒ <code>function</code></dt>
<dd><p>接受一个函数，返回一个包装函数，使得接受的函数无论调用多少次，只返回第一次调用的结果</p>
</dd>
<dt><a href="#sort">sort</a> ⇒ <code>Array</code></dt>
<dd><p>根据传入的比较器函数进行列表排序</p>
</dd>
<dt><a href="#sortBy">sortBy</a> ⇒ <code>Array</code></dt>
<dd><p>根据传入的函数对列表进行排序</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#pipe">pipe([function])</a> ⇒ <code>*</code></dt>
<dd><p>管道方法 从左到右执行函数</p>
</dd>
<dt><a href="#reduce">reduce(fn处理list每一项的回调, list, init)</a> ⇒ <code>*</code></dt>
<dd><p>对列表中每一个元素执行提供的函数，将其结果汇总为单个返回值。</p>
</dd>
<dt><a href="#reverse">reverse(list)</a> ⇒ <code>list</code></dt>
<dd><p>以相反的顺序返回包含元素或字符新列表或字符串</p>
</dd>
<dt><a href="#slice">slice(from, to, })</a> ⇒ <code>Array</code> | <code>string</code></dt>
<dd><p>返回给定列表或字符串的元素，从from开始到to-1;如果传入的对象有slice方法，则直接调用该方法</p>
</dd>
<dt><a href="#tail">tail(list)</a> ⇒ <code>*</code></dt>
<dd><p>删除列表中的首个元素</p>
</dd>
<dt><a href="#tap">tap(使用参数val调用fn,返回值将被丢弃, val)</a> ⇒ <code>*</code></dt>
<dd><p>使用提供的参数运行给定的函数，总是返回该参数，通常在链式调用或者compose | pipe 函数中调试</p>
</dd>
<dt><a href="#type">type(x)</a> ⇒ <code>String</code></dt>
<dd><p>检测数据类型</p>
</dd>
</dl>

<a name="clone"></a>

## clone ⇒
潜复制一个对象或者数组，不会复制原型链上的属性,

**Kind**: global variable  
**Returns**: object  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

<a name="once"></a>

## once ⇒ <code>function</code>
接受一个函数，返回一个包装函数，使得接受的函数无论调用多少次，只返回第一次调用的结果

**Kind**: global variable  
**Returns**: <code>function</code> - 返回一个包装函数  
**@example**: const addOnce = M.once(x => x+1)
     addOnce(10); // 11;
     addOnce((addOneOnce(50)); //11  

| Param | Type |
| --- | --- |
| func | <code>function</code> | 

<a name="sort"></a>

## sort ⇒ <code>Array</code>
根据传入的比较器函数进行列表排序

**Kind**: global variable  
**Returns**: <code>Array</code> - 排序后的新的列表  
**See**: sortBy  

| Param | Type | Description |
| --- | --- | --- |
| comparator | <code>function</code> | 排序函数 |
| list | <code>Array</code> | 待排序的列表 |

**Example**  
```js
const diff = (a, b) => a - b;
 sort(diff, [1,0, 4, 3, 2]) //=> [0, 1, 2, 3, 4]
```
<a name="sortBy"></a>

## sortBy ⇒ <code>Array</code>
根据传入的函数对列表进行排序

**Kind**: global variable  
**Returns**: <code>Array</code> - 排序后的新的列表  
**See**: sort  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| list | <code>Array</code> | 待排序的列表 |

**Example**  
```js
const diff = (x) => x.age;
 sort(diff, [{age: 3}, {age:8}, {age:1}]) //=> [{age:1}, {age:3}, {age:8}]
```
<a name="pipe"></a>

## pipe([function]) ⇒ <code>\*</code>
管道方法 从左到右执行函数

**Kind**: global function  
**See**: compose  

| Param | Description |
| --- | --- |
| [function] | f1,f2,.. |

**Example**  
```js
pipe(f1, f2, f3)({x:1,y:2})
		pipe(f1)(f2)(f3)({x:1,y:2}, 8, 10)
```
<a name="reduce"></a>

## reduce(fn处理list每一项的回调, list, init) ⇒ <code>\*</code>
对列表中每一个元素执行提供的函数，将其结果汇总为单个返回值。

**Kind**: global function  
**Returns**: <code>\*</code> - 累加值  
**See**: reduceRight  

| Param | Type | Description |
| --- | --- | --- |
| fn处理list每一项的回调 | <code>function</code> |  |
| list | <code>list</code> |  |
| init | <code>\*</code> | 首次执行的初始值 |

<a name="reverse"></a>

## reverse(list) ⇒ <code>list</code>
以相反的顺序返回包含元素或字符新列表或字符串

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>list</code> | 

**Example**  
```js
reverse([1, 2]); //=> [2,1];
 reverse([]); //=> []
 reverse('abc'); //=> 'cba'
 reverse(''); //=> ''
```
<a name="slice"></a>

## slice(from, to, }) ⇒ <code>Array</code> \| <code>string</code>
返回给定列表或字符串的元素，从from开始到to-1;如果传入的对象有slice方法，则直接调用该方法

**Kind**: global function  
**Returns**: <code>Array</code> \| <code>string</code> - }  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Number</code> | 起始位置 |
| to | <code>Number</code> | 结束位置 |
| } | <code>Array</code> \| <code>string</code> | list 列表或字符串 |

**Example**  
```js
slice(1, 2, [a, b, c, d]) //=> [b]
    slice(1, Infinity, [a, b, c, d, e]) //=> [b, c, d, e]
    slice(0, -1, ['a', 'b', 'c', 'd']) //=> [a, b, c]
    slice(-1, -3, [a, b, c, d]) //=> [b ,c]
    slice(1,2, 'abc') //=> 'a'
```
<a name="tail"></a>

## tail(list) ⇒ <code>\*</code>
删除列表中的首个元素

**Kind**: global function  

| Param | Type |
| --- | --- |
| list | <code>\*</code> | 

**Example**  
```js
const list = [1, 2, 3];
 tail(list) //=>[2,3];
 tail([1, 2]) //=>[2]
 tail([1]) //=>[]
 tail([]) //=> []
 tail('abc') //=>'bc'
 tail('a') //=> ''
 tail('') //=> ''
```
<a name="tap"></a>

## tap(使用参数val调用fn,返回值将被丢弃, val) ⇒ <code>\*</code>
使用提供的参数运行给定的函数，总是返回该参数，通常在链式调用或者compose | pipe 函数中调试

**Kind**: global function  
**Returns**: <code>\*</code> - val  

| Param | Type |
| --- | --- |
| 使用参数val调用fn,返回值将被丢弃 | <code>function</code> | 
| val | <code>\*</code> | 

**Example**  
```js
const consoleX = x => console.log(x);
    tap(consoleX, 'aa') //=> aa    
```
<a name="type"></a>

## type(x) ⇒ <code>String</code>
检测数据类型

**Kind**: global function  

| Param | Type |
| --- | --- |
| x | <code>\*</code> | 

**Example**  
```js
type({}) //=> 'Object'
    type(1) //=> 'Number'
    type([]) //=> 'Array'
    type(/\.s/) //=> 'RegExp'
    type(null) //=> 'Null'
    type(undefined) //=> "Undefined"
    type(() => {}); //=> "Function"    
```
