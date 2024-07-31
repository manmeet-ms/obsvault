# Day 18 while loops

i = 1
while (i <= 10):
    print(i)
    i += 1

print()

count = 10
while count > 0:
    print(count)
    count -= 1

print()
print("Wsing else statement with while loop")

num = 1
while (num <= 10):
    print(num)
    num += 1
else:
    print("I am her to execute else statement's code")
    print("What is 1+1? It is", 1 + 1)

# emulating do while loop
do_num = 1
print(do_num)
do_num += 1
while (do_num < 10):
    print(do_num)
    do_num += 1
