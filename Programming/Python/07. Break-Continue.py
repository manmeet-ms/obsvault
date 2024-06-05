# Day 19
print("Printing table")
num = 5
for i in range(1, 11):
    print(num, "x", i, "=", num * i)
print()
for i in range(1, 11):
    if i == 5:
        break  # will take exit at 5
    print(num, "x", i, "=", num * i)

print()
for i in range(1, 11):
    if i == 2:
        continue  # will skip 2nd iteration
    print(num, "x", i, "=", num * i)
