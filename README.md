## Members

<dl>
<dt><a href="#always">always</a> ⇒ <code>function</code></dt>
<dd><p>返回一个函数，该函数总是返回给定值</p>
</dd>
<dt><a href="#assoc">assoc</a> ⇒</dt>
<dd><p>浅复制对象，然后设置或覆盖对象的指定属性。
assoc :: String -&gt; a -&gt; {k: v} -&gt; {k: v}</p>
</dd>
<dt><a href="#call">call</a> ⇒ <code>*</code></dt>
<dd><p>提取第一个参数作为函数，其余参数作为刚提取的函数的参数，调用该函数并将结果返回。</p>
</dd>
<dt><a href="#clone">clone</a> ⇒ <code>object</code></dt>
<dd><p>深拷贝一个对象，不会复制原型链上的属性</p>
</dd>
<dt><a href="#concat">concat</a> ⇒ <code>List</code></dt>
<dd><p>连接列表或字符串。</p>
</dd>
<dt><a href="#curry">curry</a> ⇒ <code>function</code></dt>
<dd><p>柯里化未知参数个数的函数</p>
</dd>
<dt><a href="#curryN">curryN</a> ⇒ <code>function</code></dt>
<dd><p>对函数进行柯里化，并限制柯里化函数的元数</p>
</dd>
<dt><a href="#defaultTo">defaultTo</a> ⇒ <code>*</code></dt>
<dd><p>如果第二个参数不是null或者undefined或者NAN，则返回第第二个参数，否者返回第一个参数（默认值）;</p>
</dd>
<dt><a href="#divide">divide</a> ⇒ <code>Number</code></dt>
<dd><p>两个数相除 a / b</p>
</dd>
<dt><a href="#drop">drop</a> ⇒ <code>Array</code></dt>
<dd><p>删除一个列表中前几个元素
drop :: n -&gt; [<em>] -&gt; [</em>]</p>
</dd>
<dt><a href="#filter">filter</a> ⇒ <code>*</code></dt>
<dd><p>迭代列表，在每个函数上调用断言函数，返回满足断言函数的元素。返回值与传入的列表类型相同</p>
</dd>
<dt><a href="#find">find</a> ⇒ <code>Object</code></dt>
<dd><p>查找并返回 list 中首个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。</p>
</dd>
<dt><a href="#findIndex">findIndex</a> ⇒ <code>Number</code></dt>
<dd><p>查找并返回 list 中首个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。</p>
</dd>
<dt><a href="#findLast">findLast</a> ⇒ <code>Object</code></dt>
<dd><p>查找并返回list中最后一个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回undefined 。</p>
</dd>
<dt><a href="#findLastIndex">findLastIndex</a> ⇒ <code>Number</code></dt>
<dd><p>查找并返回 list中最后满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。</p>
</dd>
<dt><a href="#flip">flip</a></dt>
<dd><p>flip :: (a -&gt; b -&gt; c) -&gt; a -&gt; b -&gt; c
flip函数简单的取一个函数作为参数，返回一个效果相同的函数，但是新的函数前两个参数的顺序和之前的函数两个参数的顺序正好颠倒</p>
</dd>
<dt><a href="#has">has</a> ⇒ <code>Boolean</code></dt>
<dd><p>如果对象自身含有指定的属性，则返回 true；否则返回 false。</p>
</dd>
<dt><a href="#head">head</a> ⇒ <code>*</code></dt>
<dd><p>求列表或字符串的首个元素</p>
</dd>
<dt><a href="#identity">identity</a> ⇒ <code>*</code></dt>
<dd><p>作为默认值或占位符功能，永远返回传入的参数</p>
</dd>
<dt><a href="#includes">includes</a> ⇒ <code>Boolean</code></dt>
<dd><p>只要列表中有一个元素等于指定值，则返回 true；否则返回 false。通过 M.isEquals 函数进行相等性判断。也可以判断字符串中是否包含指定值。</p>
</dd>
<dt><a href="#indexOf">indexOf</a> ⇒ <code>Number</code></dt>
<dd><p>返回给定元素在数组中首次出现时的索引值，如果数组中没有该元素，则返回 -1。通过 M.isEquals 函数进行相等性判断</p>
</dd>
<dt><a href="#init">init</a> ⇒ <code>*</code></dt>
<dd><p>返回 list 或 string 删除最后一个元素后的部分。</p>
</dd>
<dt><a href="#is">is</a> ⇒ <code>Boolean</code></dt>
<dd><p>检查对象是否是构造函数的实例
is :: (<em> -&gt; </em>) -&gt; a -&gt; Boolean</p>
</dd>
<dt><a href="#isEmpty">isEmpty</a> ⇒ <code>Boolean</code></dt>
<dd><p>检测给定值是否为其所属类型的空值，若是则返回 true ；否则返回 false 。</p>
</dd>
<dt><a href="#isEqual">isEqual</a> ⇒ <code>Boolean</code></dt>
<dd><p>如果传入的参数相等，返回true，否则返回false</p>
</dd>
<dt><a href="#keys">keys</a> ⇒ <code>Array</code></dt>
<dd><p>返回一个组数，包含输入对象所有的key的数组，顺序可能不一致，不会提取原型上的key</p>
</dd>
<dt><a href="#map">map</a> ⇒ <code>Array</code></dt>
<dd><p>为Array和Object实现了map方法，如果第二个参数有自身的map方法，则使用自身的map方法，如果第二个参数传入的是函数类型。map会将他们组合起来相当于compose</p>
</dd>
<dt><a href="#multiply">multiply</a> ⇒ <code>Number</code></dt>
<dd><p>两个数相乘 a * b</p>
</dd>
<dt><a href="#nth">nth</a> ⇒ <code>*</code></dt>
<dd><p>返回列表或字符串的第 n 个元素。如果 n 为负数，则返回索引为 length + n 的元素。</p>
</dd>
<dt><a href="#once">once</a> ⇒ <code>function</code></dt>
<dd><p>接受一个函数，返回一个包装函数，使得接受的函数无论调用多少次，只返回第一次调用的结果</p>
</dd>
<dt><a href="#path">path</a> ⇒ <code>*</code></dt>
<dd><p>取出给定路径上的值</p>
</dd>
<dt><a href="#paths">paths</a> ⇒ <code>Array</code></dt>
<dd><p>检索对象给定路径上的值</p>
</dd>
<dt><a href="#prop">prop</a> ⇒ <code>*</code></dt>
<dd><p>获取对象指定属性的值，如果不存在则返回undefined
prop :: s -&gt; {s:a} -&gt; a | Undefined</p>
</dd>
<dt><a href="#propEq">propEq</a> ⇒ <code>Boolean</code></dt>
<dd><p>如果指定对象属性与给定的值相等，则返回 true ；否则返回 false 。通过 M.equals 函数进行相等性判断。可以使用M.whereEq进行多个属性判断
propEq :: String -&gt; a -&gt; Object -&gt; Boolean</p>
</dd>
<dt><a href="#propIs">propIs</a> ⇒ <code>Boolean</code></dt>
<dd><p>判断指定对象的属性是否为给定的数据类型（实例），是则返回 true ；否则返回 false 。
propIs :: Type -&gt; String -&gt; Object -&gt; Boolean</p>
</dd>
<dt><a href="#props">props</a> ⇒ <code>Array</code></dt>
<dd><p>返回 prop 的数组: 输入为 keys 数组，输出为对应的 values 数组。values 数组的顺序与 keys 的相同。
prop :: [k] -&gt; {k:v} -&gt; [v]</p>
</dd>
<dt><a href="#range">range</a> ⇒ <code>Array</code></dt>
<dd><p>返回从 from 到 to 之间的所有数的升序列表。左闭右开（包含 from，不包含 to）</p>
</dd>
<dt><a href="#slice">slice</a> ⇒ <code>Array</code> | <code>string</code></dt>
<dd><p>返回给定列表或字符串的元素，从from开始到to-1;如果传入的对象有slice方法，则直接调用该方法</p>
</dd>
<dt><a href="#sort">sort</a> ⇒ <code>Array</code></dt>
<dd><p>根据传入的比较器函数进行列表排序</p>
</dd>
<dt><a href="#sortBy">sortBy</a> ⇒ <code>Array</code></dt>
<dd><p>根据传入的函数对列表进行排序</p>
</dd>
<dt><a href="#subtract">subtract</a> ⇒ <code>Number</code></dt>
<dd><p>两个值相减</p>
</dd>
<dt><a href="#tail">tail</a> ⇒ <code>*</code></dt>
<dd><p>删除列表中的首个元素</p>
</dd>
<dt><a href="#take">take</a> ⇒ <code>Array</code></dt>
<dd><p>提取一个数字和一个列表作为参数，返回列表中指定的前几个元素
take:: n -&gt; [<em>] -&gt; [</em>]</p>
</dd>
<dt><a href="#tap">tap</a> ⇒ <code>*</code></dt>
<dd><p>使用提供的参数运行给定的函数，总是返回该参数，通常在链式调用或者compose | pipe 函数中调试</p>
</dd>
<dt><a href="#times">times</a> ⇒ <code>Array</code></dt>
<dd><p>执行输入的函数 n 次，返回由函数执行结果组成的数组。fn 为一元函数，n 次调用接收的参数为：从 0 递增到 n-1 。</p>
</dd>
<dt><a href="#Type">Type</a> ⇒ <code>String</code></dt>
<dd><p>检测数据类型</p>
</dd>
<dt><a href="#zip">zip</a> ⇒ <code>Array</code></dt>
<dd><p>生成一组序对的列表</p>
</dd>
<dt><a href="#zipWith">zipWith</a></dt>
<dd><p>zipWith :: (a -&gt; b -&gt; c) -&gt; [a] -&gt; [b] -&gt; [c]
取一个函数和两个列表作为参数，使用两个列表相应的元素去调用这个函数，返回一个新的列表</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#compose">compose</a> ⇒ <code>*</code></dt>
<dd><p>函数组合从右至左调用函数 a =&gt; b =&gt; c = a(b(c))</p>
</dd>
<dt><a href="#forEach">forEach</a> ⇒ <code>list</code></dt>
<dd><p>循坏遍历数组或类数组对象</p>
</dd>
<dt><a href="#omit">omit</a> ⇒ <code>object</code></dt>
<dd><p>去除对象中的属性</p>
</dd>
<dt><a href="#pipe">pipe</a> ⇒ <code>*</code></dt>
<dd><p>管道方法 从左到右执行函数</p>
</dd>
<dt><a href="#reduce">reduce</a> ⇒ <code>*</code></dt>
<dd><p>对列表中每一个元素执行提供的函数，将其结果汇总为单个返回值。</p>
</dd>
<dt><a href="#reduceRight">reduceRight</a> ⇒ <code>*</code></dt>
<dd><p>对列表中每一个元素执行提供的函数（从右至左迭代），将其结果汇总为单个返回值。</p>
</dd>
<dt><a href="#reverse">reverse</a> ⇒ <code>list</code></dt>
<dd><p>以相反的顺序返回包含元素或字符新列表或字符串</p>
</dd>
</dl>

<a name="always"></a>

## always ⇒ <code>function</code>
返回一个函数，该函数总是返回给定值

**Kind**: global variable  
**Returns**: <code>function</code> - function:: * -> val  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
const a = always('b');
     b('a') //=> 'b'
     b() //=> b
```
<a name="assoc"></a>

## assoc ⇒
浅复制对象，然后设置或覆盖对象的指定属性。
assoc :: String -> a -> {k: v} -> {k: v}

**Kind**: global variable  
**Returns**: 返回Object除已更改的属性外，等效于原始对象的新对象  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>String</code> | 要设置的属性名称 |
| val | <code>\*</code> | 要设置属性的值 |
| 要克隆的对象 | <code>Object</code> |  |

**Example**  
```js
M.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
```
<a name="call"></a>

## call ⇒ <code>\*</code>
提取第一个参数作为函数，其余参数作为刚提取的函数的参数，调用该函数并将结果返回。

**Kind**: global variable  
**Todo**

- [ ] 支持柯里化和部分应用


| Param | Type |
| --- | --- |
| ...第一个参数为函数 | <code>\*</code> | 

**Example**  
```js
M.call(R.add, 1, 2); //=> 3
```
<a name="clone"></a>

## clone ⇒ <code>object</code>
深拷贝一个对象，不会复制原型链上的属性

**Kind**: global variable  
**Returns**: <code>object</code> - 一个新的对象  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

**Example**  
```js
const objects = [{}, {}, {}];
     const objectsClone = M.clone(objects);
     objects === objectsClone; //=> false
     objects[0] === objectsClone[0]; //=> false
```
<a name="concat"></a>

## concat ⇒ <code>List</code>
连接列表或字符串。

**Kind**: global variable  
**Returns**: <code>List</code> - 返回一个有a和b组成的新的列表  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>List</code> | 第一个列表 |
| b | <code>List</code> | 第二个列表 |

**Example**  
```js
M.concat('ABC', 'DEF'); // 'ABCDEF'
     M.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3] 
     M.concat([], []); //=> []
```
<a name="curry"></a>

## curry ⇒ <code>function</code>
柯里化未知参数个数的函数

**Kind**: global variable  
<a name="curryN"></a>

## curryN ⇒ <code>function</code>
对函数进行柯里化，并限制柯里化函数的元数

**Kind**: global variable  

| Param | Type |
| --- | --- |
| 待柯里化函数参数的个数 | <code>number</code> | 
| 待柯里化的函数 | <code>function</code> | 

<a name="defaultTo"></a>

## defaultTo ⇒ <code>\*</code>
如果第二个参数不是null或者undefined或者NAN，则返回第第二个参数，否者返回第一个参数（默认值）;

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| def | <code>\*</code> | 默认值 |
| val | <code>\*</code> | 输入值 |

**Example**  
```js
defaultTo(1, null) //=> 1
     defaultTo(1, '') //=> ''
```
<a name="divide"></a>

## divide ⇒ <code>Number</code>
两个数相除 a / b

**Kind**: global variable  

| Param | Type |
| --- | --- |
| a | <code>Number</code> | 
| b | <code>Number</code> | 

**Example**  
```js
ivide(10, 100) //=> 0.1
     divide(10)(100) //=> 0.1
```
<a name="drop"></a>

## drop ⇒ <code>Array</code>
删除一个列表中前几个元素
drop :: n -> [*] -> [*]

**Kind**: global variable  
**Returns**: <code>Array</code> - [*] 一个新的列表  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | 删除列表的个数 |
| list | <code>Array</code> | 待删除的列表 |

**Example**  
```js
M.drop(1, [1,2]) //=> [2]
     M.drop(1, 'abc') //=> 'bc'
```
<a name="filter"></a>

## filter ⇒ <code>\*</code>
迭代列表，在每个函数上调用断言函数，返回满足断言函数的元素。返回值与传入的列表类型相同

**Kind**: global variable  
**Returns**: <code>\*</code> - 根据传入的对象类型，返回一个新的数组或对象  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 断言函数 |
| list | <code>\*</code> | 数组或者对象 |

**Example**  
```js
const isEven = n => n % 2 === 0;
      M.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
```
<a name="find"></a>

## find ⇒ <code>Object</code>
查找并返回 list 中首个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。

**Kind**: global variable  
**Returns**: <code>Object</code> - 首次满足fn的元素或undefined  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| list | <code>Array</code> | 查找的数组 |

**Example**  
```js
const xs = [{a: 1}, {a: 2}, {a: 3}];
     M.find( (x) => x.a == 2, x) //=> {a:2}
```
<a name="findIndex"></a>

## findIndex ⇒ <code>Number</code>
查找并返回 list 中首个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。

**Kind**: global variable  
**Returns**: <code>Number</code> - 返回列表中第一个满足fn的元素的索引，否则返回-1  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 列表中的每一项循环调用谓词函数 |
| list | <code>Array</code> |  |

**Example**  
```js
const xs = [{a: 1}, {a: 2}, {a: 3}];
      M.findIndex({a:2}, xs) //=> 1
      M.findIndex({a:4}, xs) //=> -1
```
<a name="findLast"></a>

## findLast ⇒ <code>Object</code>
查找并返回list中最后一个满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回undefined 。

**Kind**: global variable  
**Returns**: <code>Object</code> - 最后次满足fn的元素或undefined  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| list | <code>Array</code> | 查找的数组 |

**Example**  
```js
const xs = [{a: 1, b: 0}, {a:1, b: 1}];
     M.find( (x) => x.a == 1, x) //=> {a:1, b: 1}
```
<a name="findLastIndex"></a>

## findLastIndex ⇒ <code>Number</code>
查找并返回 list中最后满足 predicate 的元素的索引；如果未找到满足条件的元素，则返回 -1 。

**Kind**: global variable  
**Returns**: <code>Number</code> - 返回列表中最后一个满足fn的元素的索引，否则返回-1  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 列表中的每一项循环调用谓词函数 |
| list | <code>Array</code> |  |

**Example**  
```js
const xs = [{a: 1, b: 0}, {a:1, b: 1}];
      M.findIndex(x => x.a == 1, xs) //=> 1
```
<a name="flip"></a>

## flip
flip :: (a -> b -> c) -> a -> b -> c
flip函数简单的取一个函数作为参数，返回一个效果相同的函数，但是新的函数前两个参数的顺序和之前的函数两个参数的顺序正好颠倒

**Kind**: global variable  
**Tod**: 支持多参数部分应用  
<a name="has"></a>

## has ⇒ <code>Boolean</code>
如果对象自身含有指定的属性，则返回 true；否则返回 false。

**Kind**: global variable  
**Returns**: <code>Boolean</code> - 该属性是否存在  
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
<a name="head"></a>

## head ⇒ <code>\*</code>
求列表或字符串的首个元素

**Kind**: global variable  

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
<a name="identity"></a>

## identity ⇒ <code>\*</code>
作为默认值或占位符功能，永远返回传入的参数

**Kind**: global variable  
**Returns**: <code>\*</code> - 返回输入值'x'  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>\*</code> | 返回的value |

**Example**  
```js
identity(1) == 1
    identity({a:1}) //=> {a:1}
```
<a name="includes"></a>

## includes ⇒ <code>Boolean</code>
只要列表中有一个元素等于指定值，则返回 true；否则返回 false。通过 M.isEquals 函数进行相等性判断。也可以判断字符串中是否包含指定值。

**Kind**: global variable  
**Returns**: <code>Boolean</code> - 如果列表中包含输入的指定值则返回true， 否则返回false  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Object</code> | 要比较的元素 |
| list | <code>Array</code> |  |

**Example**  
```js
M.includes(3, [1, 2, 3]); //=> true
     M.includes(4, [1, 2, 3]); //=> false
     M.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
     M.includes([42], [[42]]); //=> true
     M.includes('ba', 'banana'); //=>true
```
<a name="indexOf"></a>

## indexOf ⇒ <code>Number</code>
返回给定元素在数组中首次出现时的索引值，如果数组中没有该元素，则返回 -1。通过 M.isEquals 函数进行相等性判断

**Kind**: global variable  
**Returns**: <code>Number</code> - 目标索引，如果未找到则返回-1  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>\*</code> | 要查找的项 |
| sorce | <code>Array</code> | 要搜索的数组 |

**Example**  
```js
M.indexOf(3, [1,2,3,4]); //=> 2
      M.indexOf(10, [1,2,3,4]); //=> -1
```
<a name="init"></a>

## init ⇒ <code>\*</code>
返回 list 或 string 删除最后一个元素后的部分。

**Kind**: global variable  

| Param | Type |
| --- | --- |
| list | <code>\*</code> | 

**Example**  
```js
M.init([1, 2, 3]);  //=> [1, 2]
     M.init([1, 2]);     //=> [1]
     M.init([1]);        //=> []
     M.init([]);         //=> []

     M.init('abc');  //=> 'ab'
     M.init('ab');   //=> 'a'
     M.init('a');    //=> ''
     M.init('');     //=> ''
```
<a name="is"></a>

## is ⇒ <code>Boolean</code>
检查对象是否是构造函数的实例
is :: (* -> *) -> a -> Boolean

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| ctor | <code>Funtion</code> | 构造函数 |
| val | <code>\*</code> | 待检测的值 |

**Example**  
```js
M.is(Object, {}); //=> true
     M.is(Number, 1); //=> true
     M.is(Object, 1); //=> false
     M.is(String, 's'); //=> true
     M.is(String, new String('')); //=> true
     M.is(Object, new String('')); //=> true
     M.is(Object, 's'); //=> false
     M.is(Number, {}); //=> false
```
<a name="isEmpty"></a>

## isEmpty ⇒ <code>Boolean</code>
检测给定值是否为其所属类型的空值，若是则返回 true ；否则返回 false 。

**Kind**: global variable  

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
<a name="isEqual"></a>

## isEqual ⇒ <code>Boolean</code>
如果传入的参数相等，返回true，否则返回false

**Kind**: global variable  

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
<a name="keys"></a>

## keys ⇒ <code>Array</code>
返回一个组数，包含输入对象所有的key的数组，顺序可能不一致，不会提取原型上的key

**Kind**: global variable  
**Returns**: <code>Array</code> - 包含obj所有key的数组  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | 要提取key的对象 |

**Example**  
```js
keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
```
<a name="map"></a>

## map ⇒ <code>Array</code>
为Array和Object实现了map方法，如果第二个参数有自身的map方法，则使用自身的map方法，如果第二个参数传入的是函数类型。map会将他们组合起来相当于compose

**Kind**: global variable  
**Returns**: <code>Array</code> - The new list.  

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
<a name="multiply"></a>

## multiply ⇒ <code>Number</code>
两个数相乘 a * b

**Kind**: global variable  

| Param | Type |
| --- | --- |
| a | <code>Number</code> | 
| b | <code>Number</code> | 

**Example**  
```js
multiply(10, 100) //=> 1000
     multiply(10)(100) //=> 1000
```
<a name="nth"></a>

## nth ⇒ <code>\*</code>
返回列表或字符串的第 n 个元素。如果 n 为负数，则返回索引为 length + n 的元素。

**Kind**: global variable  

| Param | Type |
| --- | --- |
| n | <code>Number</code> | 
| list | <code>List</code> | 

**Example**  
```js
const list = ['foo', 'bar', 'baz', 'quux'];
     M.nth(1, list); //=> 'bar'
     M.nth(-1, list); //=> 'quux'
     M.nth(-99, list); //=> undefined

     M.nth(2, 'abc'); //=> 'c'
     M.nth(3, 'abc'); //=> ''
```
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

<a name="path"></a>

## path ⇒ <code>\*</code>
取出给定路径上的值

**Kind**: global variable  

| Type |
| --- |
| <code>Array</code> | 
| <code>Object</code> | 

**Example**  
```js
M.path(['a', 'b'], {a: {b: 2}}); //=> 2
     M.path(['a', 'b'], {c: {b: 2}}); //=> undefined
```
<a name="paths"></a>

## paths ⇒ <code>Array</code>
检索对象给定路径上的值

**Kind**: global variable  
**Returns**: <code>Array</code> - 返回paths指定的路径上的值组成的数组  

| Param | Type | Description |
| --- | --- | --- |
| paths | <code>Array</code> | 给定路径的数组 |
| obj | <code>Object</code> | 要检索属性的对象 |

**Example**  
```js
M.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
     M.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
```
<a name="prop"></a>

## prop ⇒ <code>\*</code>
获取对象指定属性的值，如果不存在则返回undefined
prop :: s -> {s:a} -> a | Undefined

**Kind**: global variable  
**Returns**: <code>\*</code> - obj.prop  

| Param | Type | Description |
| --- | --- | --- |
| prop | <code>\*</code> | 属性名称 |
| obj | <code>Object</code> | 查询的对象 |

**Example**  
```js
const obj = {x:1, y:2};
     M.prop('x', obj) //=> 1;
```
<a name="propEq"></a>

## propEq ⇒ <code>Boolean</code>
如果指定对象属性与给定的值相等，则返回 true ；否则返回 false 。通过 M.equals 函数进行相等性判断。可以使用M.whereEq进行多个属性判断
propEq :: String -> a -> Object -> Boolean

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | 属性名称 |
| value | <code>\*</code> | 值 |
| obj | <code>Object</code> | 要查找的对象 |

**Example**  
```js
var obj1 = {name: 'Abby', age: 7, hair: 'blond'};
     M.propEq('name', 'Abby', obj1) //=> true
```
<a name="propIs"></a>

## propIs ⇒ <code>Boolean</code>
判断指定对象的属性是否为给定的数据类型（实例），是则返回 true ；否则返回 false 。
propIs :: Type -> String -> Object -> Boolean

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>function</code> |  |
| prop | <code>String</code> | 属性名称 |
| obj | <code>\*</code> | 要查找的对象 |

**Example**  
```js
M.propIs(Number, 'x', {x: 1, y: 2});  //=> true
     M.propIs(Number, 'x', {x: 'foo'});    //=> false
```
<a name="props"></a>

## props ⇒ <code>Array</code>
返回 prop 的数组: 输入为 keys 数组，输出为对应的 values 数组。values 数组的顺序与 keys 的相同。
prop :: [k] -> {k:v} -> [v]

**Kind**: global variable  
**Returns**: <code>Array</code> - 返回数组中相对应的值  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Array</code> | 属性名称的数组 |
| obj | <code>Object</code> | 查询的对象 |

**Example**  
```js
M.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
     M.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
```
<a name="range"></a>

## range ⇒ <code>Array</code>
返回从 from 到 to 之间的所有数的升序列表。左闭右开（包含 from，不包含 to）

**Kind**: global variable  
**Returns**: <code>Array</code> - from到to之间的集合，不包含to  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>Number</code> | 列表中的第一个数字 |
| to | <code>Number</code> | 列表中最后一个数字加1 |

**Example**  
```js
M.range(1, 5);    //=> [1, 2, 3, 4]
     M.range(50, 53);  //=> [50, 51, 52]
```
<a name="slice"></a>

## slice ⇒ <code>Array</code> \| <code>string</code>
返回给定列表或字符串的元素，从from开始到to-1;如果传入的对象有slice方法，则直接调用该方法

**Kind**: global variable  
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
<a name="sort"></a>

## sort ⇒ <code>Array</code>
根据传入的比较器函数进行列表排序

**Kind**: global variable  
**Returns**: <code>Array</code> - 排序后的新的列表  

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

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| list | <code>Array</code> | 待排序的列表 |

**Example**  
```js
const diff = (x) => x.age;
     sort(diff, [{age: 3}, {age:8}, {age:1}]) //=> [{age:1}, {age:3}, {age:8}]
```
<a name="subtract"></a>

## subtract ⇒ <code>Number</code>
两个值相减

**Kind**: global variable  

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
<a name="tail"></a>

## tail ⇒ <code>\*</code>
删除列表中的首个元素

**Kind**: global variable  

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
<a name="take"></a>

## take ⇒ <code>Array</code>
提取一个数字和一个列表作为参数，返回列表中指定的前几个元素
take:: n -> [*] -> [*]

**Kind**: global variable  
**Returns**: <code>Array</code> - [*] 一个新的列表  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | 提取列表的个数 |
| list | <code>Array</code> | 待提取的列表 |

**Example**  
```js
M.take(1, [1,2]) //=> [1]
     M.take(1, 'abc') //=> a
```
<a name="tap"></a>

## tap ⇒ <code>\*</code>
使用提供的参数运行给定的函数，总是返回该参数，通常在链式调用或者compose | pipe 函数中调试

**Kind**: global variable  
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
<a name="times"></a>

## times ⇒ <code>Array</code>
执行输入的函数 n 次，返回由函数执行结果组成的数组。fn 为一元函数，n 次调用接收的参数为：从 0 递增到 n-1 。

**Kind**: global variable  
**Returns**: <code>Array</code> - 一个数组，包含对fn调用的所有返回值。  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 要调用的函数。接受一个参数，即n的当前值。 |
| n | <code>Number</code> | 0到n-1之间的值，每次函数调用后递增。 |

**Example**  
```js
M.times(M.identity, 5); //=> [0, 1, 2, 3, 4] 
     M.times(f, 2) = [f(0), f(1)]
```
<a name="Type"></a>

## Type ⇒ <code>String</code>
检测数据类型

**Kind**: global variable  

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
<a name="zip"></a>

## zip ⇒ <code>Array</code>
生成一组序对的列表

**Kind**: global variable  

| Param | Type | Description |
| --- | --- | --- |
| list1 | <code>Array</code> | 第一个数组 |
| list2 | <code>Array</code> | 第二个数组 |

**Example**  
```js
M.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
```
<a name="zipWith"></a>

## zipWith
zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
取一个函数和两个列表作为参数，使用两个列表相应的元素去调用这个函数，返回一个新的列表

**Kind**: global variable  
<a name="compose"></a>

## compose ⇒ <code>\*</code>
函数组合从右至左调用函数 a => b => c = a(b(c))

**Kind**: global constant  

| Param | Description |
| --- | --- |
| [Function] | 调用的函数 |

**Example**  
```js
compose(f1,f2,f3)(6)
```
<a name="forEach"></a>

## forEach ⇒ <code>list</code>
循坏遍历数组或类数组对象

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| callback |  | 一个回调函数，参数为数组的每一项 |
| 遍历的数组项 | <code>list</code> |  |

**Example**  
```js
const fn = x => console.log(x);
     const arr = [1, 2, 3];
     M.forEach(fn, arr) //=> 1, 2 , 3
     
```
<a name="omit"></a>

## omit ⇒ <code>object</code>
去除对象中的属性

**Kind**: global constant  
**Returns**: <code>object</code> - 去除属性后的一个新的对象  
**Fun**:   

| Param | Type | Description |
| --- | --- | --- |
| names | <code>Array</code> | 是一个obj中的keys数组 |
| obj | <code>object</code> | 将要去除属性的源对象 |

**Example**  
```js
_M.omit(['a', 'b'], {a:1, b:2,c:3}); // { c:3}
     _M.omit(['a','b'])({a:1, b:2, c:3}) //{c:3}
```
<a name="pipe"></a>

## pipe ⇒ <code>\*</code>
管道方法 从左到右执行函数

**Kind**: global constant  

| Param | Type |
| --- | --- |
| ...functions | <code>function</code> | 

**Example**  
```js
pipe(f1, f2, f3)({x:1,y:2});
	    pipe(f1)(f2)(f3)({x:1,y:2}, 8, 10);
```
<a name="reduce"></a>

## reduce ⇒ <code>\*</code>
对列表中每一个元素执行提供的函数，将其结果汇总为单个返回值。

**Kind**: global constant  
**Returns**: <code>\*</code> - 累加值  

| Param | Type | Description |
| --- | --- | --- |
| fn处理list每一项的回调 | <code>function</code> |  |
| list | <code>list</code> |  |
| init | <code>\*</code> | 首次执行的初始值 |

<a name="reduceRight"></a>

## reduceRight ⇒ <code>\*</code>
对列表中每一个元素执行提供的函数（从右至左迭代），将其结果汇总为单个返回值。

**Kind**: global constant  
**Returns**: <code>\*</code> - 累加值  

| Param | Type | Description |
| --- | --- | --- |
| fn处理list每一项的回调 | <code>function</code> |  |
| list | <code>Array</code> | 数组 |
| init | <code>\*</code> | 首次执行的初始值 |

<a name="reverse"></a>

## reverse ⇒ <code>list</code>
以相反的顺序返回包含元素或字符新列表或字符串

**Kind**: global constant  

| Param | Type |
| --- | --- |
| list | <code>list</code> | 

**Example**  
```js
everse([1, 2]); //=> [2,1];
     reverse([]); //=> []
     reverse('abc'); //=> 'cba'
     reverse(''); //=> ''
```
<a name="add"></a>

## ~add ⇒ <code>Number</code>
两个值相加

**Kind**: inner member  

| Param | Type |
| --- | --- |
| a | <code>Number</code> | 
| b | <code>Number</code> | 

**Example**  
```js
M.add(1,2) //=>3
     M.add('1', '2') //=>3
     M.add(1)(2) //=>3
```
<a name="append"></a>

## ~append ⇒ <code>Array</code>
返回包含给定列表内容的新列表，后跟给定的元素。

**Kind**: inner member  
**Returns**: <code>Array</code> - 一个新列表，包含旧列表的元素，数组最后一个元素为item。  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>\*</code> | 要添加到新列表末尾的元素。 |
| list | <code>Array</code> | 要添加新项目的元素列表。 |

**Example**  
```js
R.append('d', ['b', 'c']); //=> ['b', 'c', 'd']
     M.append('1', []) //=> [1]
    
```
<a name="prepend"></a>

## ~prepend ⇒ <code>Array</code>
返回包含给定列表内容的新列表，头部为给定的元素。

**Kind**: inner member  
**Returns**: <code>Array</code> - 一个新列表，包含旧列表的元素，数组第一个元素为item。  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>\*</code> | 要添加到新列表头部的元素。 |
| list | <code>Array</code> | 要添加新项目的元素列表。 |

**Example**  
```js
R.prepend('a', ['b', 'c']); //=> ['a', 'b', 'c']
     M.prepend('1', []) //=> [1]
```
