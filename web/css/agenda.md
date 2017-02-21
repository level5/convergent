# CSS

## [Selector](https://www.w3.org/TR/2011/REC-CSS2-20110607/selector.html#pattern-matching)

## [Cascade](https://www.w3.org/TR/2011/REC-CSS2-20110607/cascade.html#q6.0)

#### Specified, computed, and actual values

#### inherited or not

Each property may also have a cascaded value of 'inherit', which means that, for a given element, the property takes the same specified value as the property for the element's parent. The 'inherit' value can be used to enforce inheritance of values, and it can also be used on properties that are not normally inherited

#### cascade

* Author
* User
* User Agent


1. Find all declarations that apply to the element and property in question, for the target media type.
2. Sort according to importance (normal or important) and origin (author, user, or user agent). In ascending order of precedence:
  1. user agent declarations
  2. user normal declarations
  3. author normal declarations
  4. author important declarations
  5. user important declarations
3. Sort rules with the same importance and origin by specificity of selector: more specific selectors will override more general ones. Pseudo-elements and pseudo-classes are counted as normal elements and classes, respectively.
4. Finally, sort by order specified: if two declarations have the same weight, origin and specificity, the latter specified wins. Declarations in imported style sheets are considered to be before any declarations in the style sheet itself.

#### important

```css
p { text-indent: 1em ! important }
```

#### Calculating a selector's specificity
* count 1 if the declaration is from is a 'style' attribute rather than a rule with a selector, 0 otherwise (= a)
* count the number of ID attributes in the selector (= b)
* count the number of other attributes and pseudo-classes in the selector (= c)
* count the number of element names and pseudo-elements in the selector (= d)


```css
*             {}  /* a=0 b=0 c=0 d=0 -> specificity = 0,0,0,0 */
li            {}  /* a=0 b=0 c=0 d=1 -> specificity = 0,0,0,1 */
li:first-line {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
ul li         {}  /* a=0 b=0 c=0 d=2 -> specificity = 0,0,0,2 */
ul ol+li      {}  /* a=0 b=0 c=0 d=3 -> specificity = 0,0,0,3 */
h1 + *[rel=up]{}  /* a=0 b=0 c=1 d=1 -> specificity = 0,0,1,1 */
ul ol li.red  {}  /* a=0 b=0 c=1 d=3 -> specificity = 0,0,1,3 */
li.red.level  {}  /* a=0 b=0 c=2 d=1 -> specificity = 0,0,2,1 */
#x34y         {}  /* a=0 b=1 c=0 d=0 -> specificity = 0,1,0,0 */
style=""          /* a=1 b=0 c=0 d=0 -> specificity = 1,0,0,0 */
```

```html
<HEAD>
<STYLE type="text/css">
 #x97z { color: red }
</STYLE>
</HEAD>
<BODY>
<P ID=x97z style="color: green">
</BODY>
```

## Box

#### [Box model](https://www.w3.org/TR/2011/REC-CSS2-20110607/box.html#box-model)

#### [position](https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#choose-position)

####
