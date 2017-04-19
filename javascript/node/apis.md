# javascript

# API
## Buffer

```js

// 长度为10的Buffer, 填充的0
const buff = Buffer.alloc(10)

// 长度为10的Buffer，填充的0x1
const buff2 = Buffer.alloc(10, 1)

// 长度为10的Buffer，但是没有初始化数据
const buff3 = Buffer.allocUnsafe(10)

// Buffer中包含[0x1, 0x2, 0x3]
const buff4 = Buffer.from([1, 2, 3])

const buff5 = Buffer.from('test')

const buff6 = Buffer.from('test', 'latin-1')
```

api
```js
Buffer.from(array)

Buffer.from(array[, byteOffset[, length]])

Buffer.from(buffer)

Buffer.from(string[, encoding])

Buffer.alloc(size[, fill[, encoding]])

Buffer.allocUnsafe(size)

Buffer.concat(list[, totalLength])

buff.toString([encoding[, start[, end]]])

```

## Stream

## HTTP

## File System

## Child Processes

## Events

# express/koa

# mysql
