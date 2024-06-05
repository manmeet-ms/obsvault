# Day 53
# Used for advanced list manipulation

from functools import reduce


# map
def cube(num):
    return num ** 3


num_list = [1, 2, 3, 4, 5, 6]
# Suppose if we want to make a cube of every item in it
cn_list = []
for items in num_list:
    cn_list.append(cube(items))
print(cn_list)
# Here map() comes into play
new = map(cube, num_list)
print(new)  # returns a map object; for efficiency purposes
print(list(new))

print()
# filter
nums = {2, 3, 4, 5, 6, 1, 9, 7}
print(nums)
new_num = set(map(lambda thrice: 3 * thrice, nums))
print(new_num)
print()
w_tup = (5, 2, 1, 0, 13, 4, 9, 28)
print("Before filtering:", w_tup)


def filter_function(a):
    if a % 2 == 0:
        return a


n_tup = filter(filter_function, w_tup)
print(n_tup)
# print("Filter list with a even number")
print("After filtering:", tuple(n_tup))

# reduce
ex_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
reduce_list = reduce(lambda x, y: x + y, ex_list)
print(reduce_list)
