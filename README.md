# Members

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

## Constants

<dl>
<dt><a href="#omit">omit</a> ⇒ <code>object</code></dt>
<dd><p>去除对象中的属性</p>
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
<dt><a href="#always">always(val)</a> ⇒ <code>function</code></dt>
<dd><p>返回一个函数，该函数总是返回给定值</p>
</dd>
<dt><a href="#compose">compose([Function])</a> ⇒ <code>*</code></dt>
<dd><p>函数组合从右至左调用函数 a =&gt; b =&gt; c = a(b(c))</p>
</dd>
<dt><a href="#curry">curry()</a> ⇒ <code>function</code></dt>
<dd><p>柯里化未知参数个数的函数</p>
</dd>
<dt><a href="#curryN">curryN(待柯里化函数参数的个数, 待柯里化的函数)</a> ⇒ <code>function</code></dt>
<dd><p>对函数进行柯里化，并限制柯里化函数的元数</p>
</dd>
<dt><a href="#identity">identity(x)</a> ⇒ <code>*</code></dt>
<dd><p>作为默认值或占位符功能，永远返回传入的参数</p>
</dd>
<dt><a href="#forEach">forEach(callback, 遍历的数组项)</a> ⇒ <code>list</code></dt>
<dd><p>循坏遍历数组或类数组对象</p>
</dd>
<dt><a href="#head">head(list)</a> ⇒ <code>*</code></dt>
<dd><p>求列表或字符串的首个元素</p>
</dd>
<dt><a href="#map">map(fn, list)</a> ⇒ <code>Array</code></dt>
<dd><p>为Array和Object实现了map方法，如果第二个参数有自身的map方法，则使用自身的map方法，如果第二个参数传入的是函数类型。map会将他们组合起来相当于compose</p>
</dd>
<dt><a href="#reduceRight">reduceRight(fn处理list每一项的回调, list, init)</a> ⇒ <code>*</code></dt>
<dd><p>对列表中每一个元素执行提供的函数（从右至左迭代），将其结果汇总为单个返回值。</p>
</dd>
<dt><a href="#isEmpty">isEmpty(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>检测给定值是否为其所属类型的空值，若是则返回 true ；否则返回 false 。</p>
</dd>
<dt><a href="#add">add(a, b)</a> ⇒ <code>Number</code></dt>
<dd><p>两个值相加</p>
</dd>
<dt><a href="#divide">divide(a, b)</a> ⇒ <code>Number</code></dt>
<dd><p>两个数相除 a / b</p>
</dd>
<dt><a href="#multiply">multiply(a, b)</a> ⇒ <code>Number</code></dt>
<dd><p>两个数相乘 a * b</p>
</dd>
<dt><a href="#subtract">subtract(a, b)</a> ⇒ <code>Number</code></dt>
<dd><p>两个值相减</p>
</dd>
<dt><a href="#has">has(key)</a> ⇒ <code>Boolean</code></dt>
<dd><p>如果对象自身含有指定的属性，则返回 true；否则返回 false。</p>
</dd>
<dt><a href="#keys">keys(obj)</a> ⇒ <code>Array</code></dt>
<dd><p>返回一个组数，包含输入对象所有的key的数组，顺序可能不一致，不会提取原型上的key</p>
</dd>
<dt><a href="#isEqual">isEqual(a, b)</a> ⇒ <code>Boolean</code></dt>
<dd><p>如果传入的参数相等，返回true，否则返回false</p>
</dd>
<dt><a href="#defaultTo">defaultTo(def, val)</a> ⇒ <code>*</code></dt>
<dd><p>如果第二个参数不是null或者undefined或者NAN，则返回第第二个参数，否者返回第一个参数（默认值）;</p>
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
    type(null) //=> Null'
    type(undefined) //=> "Undefined"
    type(() => {}); //=> "Function"
```
<a name="always"></a>

## always(val) ⇒ <code>function</code>
返回一个函数，该函数总是返回给定值

**Kind**: global function
**Returns**: <code>function</code> - function:: * -> val
**Category**: Function

| Param | Type |
| --- | --- |
| val | <code>\*</code> |

**Example**
```js
const a = always('b');
 b('a') //=> 'b'
 b() //=> b
```
<a name="compose"></a>

## compose([Function]) ⇒ <code>\*</code>
函数组合从右至左调用函数 a => b => c = a(b(c))

**Kind**: global function
**Category**: Function
**See**: pipe

| Param | Description |
| --- | --- |
| [Function] | 调用的函数 |

**Example**
```js
compose(f1,f2,f3)(6)
```
<a name="curry"></a>

## curry() ⇒ <code>function</code>
柯里化未知参数个数的函数

**Kind**: global function
**Category**: Function
<a name="curryN"></a>

## curryN(待柯里化函数参数的个数, 待柯里化的函数) ⇒ <code>function</code>
对函数进行柯里化，并限制柯里化函数的元数

**Kind**: global function
**Category**: Function

| Param | Type |
| --- | --- |
| 待柯里化函数参数的个数 | <code>number</code> |
| 待柯里化的函数 | <code>function</code> |

<a name="identity"></a>

## identity(x) ⇒ <code>\*</code>
作为默认值或占位符功能，永远返回传入的参数

**Kind**: global function
**Returns**: <code>\*</code> - 返回输入值'x'
**Category**: Function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | 返回的value |

**Example**
```js
identity(1) == 1
    identity({a:1}) //=> {a:1}
```
<a name="forEach"></a>

## forEach(callback, 遍历的数组项) ⇒ <code>list</code>
循坏遍历数组或类数组对象

**Kind**: global function
**Category**: List

| Param | Type | Description |
| --- | --- | --- |
| callback |  | 一个回调函数，参数为数组的每一项 |
| 遍历的数组项 | <code>list</code> |  |

<a name="head"></a>

## head(list) ⇒ <code>\*</code>
求列表或字符串的首个元素

**Kind**: global function
**Category**: List

| Param | Type | Description |
| --- | --- | --- |
| list | <code>\*</code> | 数组或者字符串 |

**Example**
```js
head(['a', 'b', 'c']) //=> 'a';
 head([]) //=> 'undefined';
 head('abc') //=> 'a';
 head('') //=> ''
```
<a name="map"></a>

## map(fn, list) ⇒ <code>Array</code>
为Array和Object实现了map方法，如果第二个参数有自身的map方法，则使用自身的map方法，如果第二个参数传入的是函数类型。map会将他们组合起来相当于compose

**Kind**: global function
**Returns**: <code>Array</code> - The new list.
**Category**: List

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 遍历list每次执行的函数 |
| list | <code>List</code> \| <code>function</code> |  |

**Example**
```js
var double = x => x * 2;
 map(double, [1,2,3]) //=> [2,4,6];
 map(double, {a:1, b:2, c:3}) //=> {a:2, b:4, c:6};
```
<a name="reduceRight"></a>

## reduceRight(fn处理list每一项的回调, list, init) ⇒ <code>\*</code>
对列表中每一个元素执行提供的函数（从右至左迭代），将其结果汇总为单个返回值。

**Kind**: global function
**Returns**: <code>\*</code> - 累加值
**Category**: List
**See**: reduce

| Param | Type | Description |
| --- | --- | --- |
| fn处理list每一项的回调 | <code>function</code> |  |
| list | <code>Array</code> | 数组 |
| init | <code>\*</code> | 首次执行的初始值 |

<a name="isEmpty"></a>

## isEmpty(obj) ⇒ <code>Boolean</code>
检测给定值是否为其所属类型的空值，若是则返回 true ；否则返回 false 。

**Kind**: global function
**Category**: Logic

| Param | Type |
| --- | --- |
| obj | <code>\*</code> |

**Example**
```js
isEmpty([1, 2, 3]);   //=> false
 isEmpty([]);          //=> true
 isEmpty('');          //=> true
 isEmpty(null);        //=> false
 isEmpty({});          //=> true
 isEmpty({length: 0}); //=> false
```
<a name="add"></a>

## add(a, b) ⇒ <code>Number</code>
两个值相加

**Kind**: global function
**Category**: Math
**See**: subtract

| Param | Type |
| --- | --- |
| a | <code>Number</code> |
| b | <code>Number</code> |

**Example**
```js
add(1,2) //=>3
 add('1', '2') //=>3
 add(1)(2) //=>3
```
<a name="divide"></a>

## divide(a, b) ⇒ <code>Number</code>
两个数相除 a / b

**Kind**: global function
**Category**: Math
**See**: multiply

| Param | Type |
| --- | --- |
| a | <code>Number</code> |
| b | <code>Number</code> |

**Example**
```js
divide(10, 100) //=> 0.1
 divide(10)(100) //=> 0.1
```
<a name="multiply"></a>

## multiply(a, b) ⇒ <code>Number</code>
两个数相乘 a * b

**Kind**: global function
**Category**: Math
**See**: divide

| Param | Type |
| --- | --- |
| a | <code>Number</code> |
| b | <code>Number</code> |

**Example**
```js
multiply(10, 100) //=> 1000
 multiply(10)(100) //=> 1000
```
<a name="subtract"></a>

## subtract(a, b) ⇒ <code>Number</code>
两个值相减

**Kind**: global function
**Category**: Math
**See**: add

| Param | Type |
| --- | --- |
| a | <code>Number</code> |
| b | <code>Number</code> |

**Example**
```js
add(1,2) //=> -1
 add('1', '2') //=> -1
 add(1)(2) //=> -1
```
<a name="omit"></a>

## omit ⇒ <code>object</code>
去除对象中的属性

**Kind**: global constant
**Returns**: <code>object</code> - 去除属性后的一个新的对象
**Category**: Object
**Fun**:
**See**: pick

| Param | Type | Description |
| --- | --- | --- |
| names | <code>Array</code> | 是一个obj中的keys数组 |
| obj | <code>object</code> | 将要去除属性的源对象 |

**Example**
```js
_M.omit(['a', 'b'], {a:1, b:2,c:3}); // { c:3}
     _M.omit(['a','b'])({a:1, b:2, c:3}) //{c:3}
```
<a name="has"></a>

## has(key) ⇒ <code>Boolean</code>
如果对象自身含有指定的属性，则返回 true；否则返回 false。

**Kind**: global function
**Returns**: <code>Boolean</code> - 该属性是否存在
**Category**: Object
**Oarma**: <code>Obejct</code> obj 要查询的对象

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 要检查属性的key |

**Example**
```js
const obj = {a: 1};
 has('a', obj) //=> true
 has('a')({}) //=> false
```
<a name="keys"></a>

## keys(obj) ⇒ <code>Array</code>
返回一个组数，包含输入对象所有的key的数组，顺序可能不一致，不会提取原型上的key

**Kind**: global function
**Returns**: <code>Array</code> - 包含obj所有key的数组
**Category**: Object

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | 要提取key的对象 |

**Example**
```js
keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
```
<a name="isEqual"></a>

## isEqual(a, b) ⇒ <code>Boolean</code>
如果传入的参数相等，返回true，否则返回false

**Kind**: global function
**Category**: Relation

| Param | Type |
| --- | --- |
| a | <code>\*</code> |
| b | <code>\*</code> |

**Example**
```js
isEquals(1, 1); //=> true
     isEquals(1, '1'); //=> false
     isEquals([1, 2, 3], [1, 2, 3]); //=> true

     const a = {}; a.v = a;
     const b = {}; b.v = b;
     isEquals(a, b); //=> true
```
<a name="defaultTo"></a>

## defaultTo(def, val) ⇒ <code>\*</code>
如果第二个参数不是null或者undefined或者NAN，则返回第第二个参数，否者返回第一个参数（默认值）;

**Kind**: global function
**Category**: logic

| Param | Type | Description |
| --- | --- | --- |
| def | <code>\*</code> | 默认值 |
| val | <code>\*</code> | 输入值 |

**Example**
```js
defaultTo(1, null) //=> 1
 defaultTo(1, '') //=> ''
```