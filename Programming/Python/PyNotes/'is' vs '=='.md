The `is` and `==` operators are used for comparison, but they function in different ways. Output is in True or False

 `is`                                                                             | `==`                                                                        
----------------------------------------------------------------------------------|-----------------------------------------------------------------------------
 Checks whether two variables point to the same object in memory.                 | Checks whether the objects referred to by two variables are equal in value. 
 This operator is used for reference equality.                                    | The `==` operator checks for value equality.                                
 Comparing constants will always return True. Python doesn't wastes memory space. | -                                                                           

It is generally recommended to use the `==` operator for most cases, except when comparing to None or when dealing with
singleton objects.

> It's important to note that because of the way the CPython reference implementation works, you'll get unexpected and
> inconsistent results if you mistakenly use `is` to compare for reference equality on integers, especially those outside
> the range -5 to 256 [Source](https://stackoverflow.com/questions/132988/is-there-a-difference-between-and-is).

###### Example 1

```python
a = [1, 2, 3]
b = a

print(b is a)  # True
print(b == a)  # True
```

Both `b is a` and `b == a` return True because `b` and `a` refer to the same object in memory and have the same value.

###### Example 2

```python
b = a[:]
print(b is a)  # False
print(b == a)  # True
```

`b is a` returns False because `b` is a new copy of `a` created using the slice operator. However, `b == a` still
returns True because the objects referred to by `b` and `a` have the same value.

###### Example 3

```python
print(1000 is 10**3)  # False
print(1000 == 10**3)  # True
```

`1000 is 10**3` returns False because `1000` and `10**3` are two different objects in memory. However, `1000 == 10**3`
returns True because the objects have the same value.

###### Example 4

```python
print("a" is "a")  # True
print("aa" is "a" * 2)  # True
```

`a is a` returns True because the string literals `a` and `a` are interned by Python, meaning they refer to the same
object in memory. Similarly, `aa` is `a * 2` returns True because the two string literals have the same value and are
interned.

###### Example 5

```python
x = "a"
print("aa" is x * 2)  # False
```

`aa` is x * 2` returns False because `x * 2` creates a new object in memory. However, `aa` is intern(x*2)` returns True
because the intern() function interns the resulting string, making it refer to the same object as the string
literal `aa`.
