def gen():
    for i in range(10):
        yield i



print("Function")
for y in gen():
    print(next(gen()), end=", ")

print()
my_gen = gen()
print("Variable")
for y in gen():
    print(next(my_gen), end=", ")


# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
# print(next(my_gen))
#
#
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
# print(next(gen()))
