In Python, sets are unordered collections of unique elements. When displaying the elements of a set, they may appear in
a random order or arbitrary order, which means that the order of items in a set cannot be relied upon. Here's an
explanation of why sets are unordered in the context of Python, based on the provided search results:

Sets in Python are implemented using a data structure called a hash table. Hash tables use hash functions to map values
to specific slots in the table. The order of elements in a set is determined by the hash values of the elements and the
internal implementation of the hash table. When an element is inserted into a set, its hash value is calculated, and the
element is placed in the corresponding slot in the hash table. The order of insertions and deletions affects the
internal arrangement of the hash table, which in turn determines the order in which the elements are displayed when the
set is printed.

According to the provided StackOverflow
answer [Source 7](https://stackoverflow.com/questions/21701618/why-does-a-set-display-in-same-order-if-sets-are-unordered),
the order of elements in a set is not randomly ordered but rather arbitrarily ordered. This means that you should not
rely on the order of insertions being maintained, as the actual internal implementation details determine the order
instead. The order depends on the insertion and deletion history of the set. In CPython, the reference implementation of
Python, sets use a hash table where inserted values are slotted into a sparse table based on the value returned from the
hash() function modulo the table size and a collision handling algorithm. When the set contents are listed, the values
are returned in the order determined by this table.

The unordered nature of sets in Python is intentional and serves a specific purpose. Sets are primarily used for
membership testing and eliminating duplicate elements. The unordered property allows for efficient membership testing by
utilizing the hash table's ability to quickly check whether a specific element is contained in the set. This makes sets
highly optimized for checking membership, which is their major advantage over lists. However, if you require a specific
order or need to maintain the order of elements, sets are not suitable, and you should consider using other data
structures such as lists or tuples.

To summarize, sets in Python are unordered because they are implemented using hash tables. The order of elements in a
set is determined by the hash values of the elements and the internal implementation of the hash table. The order of
insertions and deletions affects the internal arrangement of the hash table, which in turn determines the order in which
the elements are displayed when the set is printed. The unordered nature of sets allows for efficient membership testing
but does not guarantee a specific order of elements.