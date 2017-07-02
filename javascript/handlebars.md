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
