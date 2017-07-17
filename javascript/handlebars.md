# handlebars

html加上handlebars expression。

形状如：`{{title}}`

```html
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>
```

`.hbs`后缀

### 基本语法

```html

<h1>{{title}}</h1>

```

支持`.`或者`/`

```html

<h1>{{article.title}}</h1>

<h1>{{article/title}}</h1>

```

类似于js的语法，引用不是合法的变量名的变量时,使用`[]`

```html
{{#each articles.[10].[#comments]}}
  <h1>{{subject}}</h1>
  <div>
    {{body}}
  </div>
{{/each}}
```

注释

```html

{{!-- 这部分是注释 --}}

{{！这部分也是注释 }}

```
### path

执行上下文

通过`../`访问父执行上下文

### built-in Helper


#### if

这里的判断条件和`author == true` 一样。`""`, `false`, `0`, `[]`, `undefined`和`null`都会当成false

```html
<div class="entry">
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>
```


#### unless

与`if`相反

```html
<div class="entry">
  {{#unless license}}
  <h3 class="warning">WARNING: This entry does not have a license!</h3>
  {{/unless}}
</div>
```

#### each

可以使用`this`来指向迭代的对象, `{{@index}}`对应index， `{{@key}}`迭代对象时对应key

```html
<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

可以加上`{{else}}`, 当each的对象是空的时候，显示else中的内容

```html
{{#each paragraphs}}
  <p>{{this}}</p>
{{else}}
  <p class="empty">No content</p>
{{/each}}

```

#### partials

先注册好模板，然后使用。`koa-hbs`之类的框架提供了指定目录的方式来自动注册
```js

Handlebars.registerPartial('myPartial', '{{name}}')

```

第二个参数是编译好的模板， 使用当前context。也可以后面接参数指定context

```html
{{> myPartial }}
```

因为第一个参数必须是函数，所以想动态的使用子模板时,使用`look`

```
{{> (lookup . 'myVariable') }}
```

设定hash对
```
{{> myPartial parameter=value }}

{{> myPartial name=../name }}
```

如果模板找不到，会报错，也可以使用块的方式在找不到的情况下给个默认
```
{{#> myPartial }}
  Failover content
{{/myPartial}}
```

也可以用来传递内容给子模块，在子模块中，通过`@partial-block`来引用传入的内容

***When called in this manner, the block will execute under the context of the partial at the time of the call***

```
{{#> layout }}
  My Content
{{/layout}}

# layout中：
Site Content
{{> @partial-block }}
```

使用inline decorator来定义模板
```
{{#*inline "myPartial"}}
  My Content
{{/inline}}
{{#each children}}
  {{> myPartial}}
{{/each}}
```

***Each inline partial is available to the current block and all children, including execution of other partials***
```
{{#> layout}}
  {{#*inline "nav"}}
    My Nav
  {{/inline}}
  {{#*inline "content"}}
    My Content
  {{/inline}}
{{/layout}}
```
在layout中可以这么用：
```
<div class="nav">
  {{> nav}}
</div>
<div class="content">
  {{> content}}
</div>
```
