# Day 23
list = [23, 68, 89, 545, 34]
print("Generated List: ", list)

list.append(23)
print("Append Method: ", list)

list.sort()
print("Sort Method: ", list)

list.sort(reverse=True)
print("Sort Reverse Method: ", list)

list.reverse()
print("Reverse Method: ", list)

print(list.count(2))  # Count occureneces

# IMPORTANT
prev_l = [12, 2, 5, 7]
print(prev_l)

new_l = prev_l  # not a preferred method
print("Newly copied list: ", new_l)

new_l[0] = 100
print("Prev: ", prev_l, "New: ", new_l)  # it will change the main list as well

#  Instead we must use
new_l = prev_l.copy()
new_l[0] = 233
print("Prev: ", prev_l, "New: ", new_l)

# insert method
print(list)
list.insert(2, 466)  # name.insert(index, value)
print(list)

# extend method
a = [1, 2, 3]
print("List a:", a)
b = [10, 20, 30]
print("List b:", b)
a.extend(b)  # extend a list
print("Extended List a:", a)
