# Day 24
t_num = (1, 2, 3, 4)
print(t_num)
print(type(t_num))

tuple_name = ("items1", 2, 3.0, 4, True, False)
print(tuple_name)

single_tup = (1,)
print(type(single_tup), single_tup)
print(type((1,)))
print(type((1)))

# Tuples are ImmutableS
num = (1, 72, 35, 14, 5)

#  Tuple methods
res = num.index(35)
print(res)

range_tup = (5, 11, 17, 23, 29, 35, 41, 47, 53, 59, 65, 71, 77, 83, 89, 95)
print(range_tup.index(29, 0, 7))
# It will throw an error as 29 does not exists between he range of 7 to 15
# print(range_tup.index(29, 7, 15))
