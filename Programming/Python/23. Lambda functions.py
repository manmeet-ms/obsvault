twice = lambda a: 2 * a
print(twice(9))
square = lambda x: x ** 2
print(square(4))

power = lambda x, y: x ** y
print(power(5, 3))

average = lambda x, y, z: (x + y + z) / 3
print(average(3, 4, 5))


# Functions as an argument
def high(fx, num):
    return f"Space has {fx} stars and {num} planets"


print(high(power(567, 34), 9))
