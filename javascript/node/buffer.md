# Buffer

Instances of the `Buffer` class are similar to arrays of integers but correspond to fixed-sized, raw memory allocations outside the V8 heap. The size of the `Buffer` is established when it is created and cannot be resized.

The `Buffer` class is a global within Node.js.

Note that the Buffer module pre-allocates an internal Buffer instance of size Buffer.poolSize that is used as a pool for the fast allocation of new Buffer instances created using Buffer.allocUnsafe(size) (and the deprecated new Buffer(size) constructor) only when size is less than or equal to Buffer.poolSize >> 1 (floor of Buffer.poolSize divided by two). The default value of Buffer.poolSize is 8192 but can be modified.

Use of this pre-allocated internal memory pool is a key difference between calling Buffer.alloc(size, fill) vs. Buffer.allocUnsafe(size).fill(fill). Specifically, Buffer.alloc(size, fill) will never use the internal Buffer pool, while Buffer.allocUnsafe(size).fill(fill) will use the internal Buffer pool if size is less than or equal to half Buffer.poolSize. The difference is subtle but can be important when an application requires the additional performance that Buffer.allocUnsafe(size) provides.
