#discuss 


We'll be referring to this class throughout 
```python
class Person:
    def __init__(self, name, wage):
        self.name = name
        self.wage = wage

    def info(self):
        print(f"Name: {self.name} | Daily Wage: {self.wage}")
```

# `dir() ` method 
- dir method return a list of all attributes and methods available for an object (including dunder methods)
- useful for discovering what you can do with tht object.

```python
x = [1, 2, 4]
print(x.__dir__())
```

```Output
['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getstate__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

we can get all methods and attributes defines in a class
```python
print(dir(Person))
```

```Output
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'info']

```


# `help()` method 

To print an attribute's method's, class' , etc... user manual 

```python
help(int)
```

```Output
# A Full User Manual Will Be Printed
```

# `__dict__` attribute

Returns a dictionary representation of an object's instance. It is useful  for introspection

```python
print(Person.__dict__)
```

```Output
{'__module__': '__main__', '__init__': <function Person.__init__ at 0x7fb80ce88cc0>, 'info': <function Person.info at 0x7fb80cf984a0>, '__dict__': <attribute '__dict__' of 'Person' objects>, '__weakref__': <attribute '__weakref__' of 'Person' objects>, '__doc__': None}
```

