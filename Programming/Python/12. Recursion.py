# Day 30
def fact(num):
    if num == 0 or num == 1:
        return 1
    else:
        return num * fact(num - 1)


print(fact(5))


#  Fibonacci series
def fibo(n):
    if n == 1 or n == 0 or n == -1:
        return 1
    else:
        return fibo(n - 1) + fibo(n - 2)


terms = 10
for i in range(0, terms):
    print(fibo(i), end=", ")
