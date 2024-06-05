# Day 20

a = 3
b = 5
a_mean = (a + b) / 2
print(a)
print(b)
print("Mean:", a_mean)

# same code we will have to repeat for different numbers/cases
c = 4
d = 57
a_mean = (c + d) / 2
print(c)
print(d)
print("Mean:", a_mean)

m = 7
n = 5
a_mean = (m + n) / 2
print(m)
print(n)
print("Mean:", a_mean)


# Instead we can bind this whole in a function and can use it anywhere

def calc_mean(p, q):
    mean = (p + q) / 2
    print("1st Num: ", p, "| 2nd Num: ", q)
    print("Arithmetic Mean: ", mean)
    print()


def is_greater(num1, num2):
    if num1 > num2:
        print(num1, "is greater than", num2)
    else:
        print(num1, "is smaller than", num2)


calc_mean(10, 42)
calc_mean(53, 7)
calc_mean(10, 4)
is_greater(10, 42)
