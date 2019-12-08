# Groovy Syntax

### String

#### single-quoted string

#### double-quoted string

没有变量时是`java.lang.String`, 有变量是`groovy.lang.GString`.

```groovy
def name = 'Huang'
def greeting = "Hello ${name}"

assert greeting.toString() == 'Hello Huang'


def person = [name: 'Guillaume', age: 36]
assert "$person.name is $person.age years old" == 'Guillaume is 36 years old' // 直接使用$xxx, 只支持a.b, a.b.c这样的格式

```

You can think of `"$number.toString()"` as being interpreted by the parser as `"${number.toString}()"`.


```groovy
// escape
assert '$5' == "\$5"
assert '${name}' == "\${name}"

```


`${->}`: TBD

当方法需要一个`java.lang.String`时，传入的是一个`groovy.lang.GString`时，会自动调用`toString()`

#### triple-quoted string

```groovy

assert 'ab' == 'a' + 'b'

def multiplelineString = '''line one
line two
'''

def aMultipleLineString = '''\
line one
line two
'''

```

#### slashy string

for regex, no need to escape backslashes. another to define Gstring in another rule.

```groovy

def fooPattern = /.*foo.*/
assert fooPattern == '.*foo.*'

def escapeSlash = /The character \/ is a forward slash/
assert escapeSlash == 'The character / is a forward slash'

```

#### dollar slashy string

TBD


### List

```groovy

def numbers = [1, 2, 3]         

assert numbers instanceof List  
assert numbers.size() == 3

def arrayList = [1, 2, 3]
assert arrayList instanceof java.util.ArrayList

def linkedList = [2, 3, 4] as LinkedList    
assert linkedList instanceof java.util.LinkedList

LinkedList otherLinked = [3, 4, 5]          
assert otherLinked instanceof java.util.LinkedList


```

### Array

```groovy

String[] arrStr = ['Ananas', 'Banana', 'Kiwi']  

assert arrStr instanceof String[]    
assert !(arrStr instanceof List)


def numArr = [1, 2, 3] as int[]      

assert numArr instanceof int[]       
assert numArr.size() == 3 // 为啥会是size方法？

def matrix3 = new Integer[3][3]         
assert matrix3.size() == 3

```


### Map

```groovy

def colors = [red: '#FF0000', green: '#00FF00', blue: '#0000FF']   

assert colors['red'] == '#FF0000'    
assert colors.green  == '#00FF00'    

colors['pink'] = '#FF00FF'           
colors.yellow  = '#FFFF00'           

assert colors.pink == '#FF00FF'
assert colors['yellow'] == '#FFFF00'

assert colors instanceof java.util.LinkedHashMap

```
