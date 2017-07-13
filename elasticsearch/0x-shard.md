
The ***inverted index*** contains a sorted list of all of the unique values, or terms, that occur in any document and, for each term, a list of all the documents that contain it.

The inverted index that is written to disk is ***immutable***: it doesn’t change. Ever. This immutability has important benefits:

* There is no need for locking.

* Once the index has been read into the kernel’s filesystem cache, it stays there, because it never changes.

* Any other caches (like the filter cache) remain valid for the life of the index.

* Writing a single large inverted index allows the data to be compressed



If you want to make new documents searchable, you have to rebuild the entire index. This places a significant limitation either on the amount of data that an index can contain, or the frequency with which the index can be updated.

这一块具体的限制，　其实也就是inverted index的实现
