# Day 21
def add(a=10, b=20, c=4):  # Default args/Values
    print("Value of a:", a, "| b:", b, "| c:", c)
    print("The sum is: ", a + b + c)
    print()


add()  # Case 1: All fetched from default args
add(12, 6)  # Case 2: It will take default value of `c` only
add(1, 8, 3)  # Case 3: We explicitly gave all parameters

# Keyword Arguments demo
add(c=10, a=13)


def print_name(first, mid, last="Emily"):
    print("Name:", first, mid, last)


print_name(mid="Shane", first="John", last="Sherly")
print_name("Lady", "Noir")
print_name("Lady", "Noir", "Jane")


# This becomes required if we dont set/provide any default value


def print_name(first, mid, last):
    print("Your name:", first, mid, last)


print_name("Pine", "R", "Rose")


# Variable Length Arguments
def average(*number):  # passing arg as a tuple
    sum = 0
    for i in number:
        sum += i
    # avg = sum / len(number)
    avg = sum / i
    print(avg)


average(1, 2)
average(1, 2, 3)
average(1, 2, 3, 4, 5)


def note(**name):  # passing args as a dictionary
    print(name["fn"], name["mn"], name["ln"], name["arg4"])


note(fn="Boku", mn="Wa", ln="Tobi", arg4="#kawaii")


# return statements
def average(*number):  # passing arg as a tuple
    sum = 0
    for i in number:
        sum += i
    avg = sum / len(number)
    return sum / len(number)
    # `OR an alternative way -->` return avg


c = average(1, 5)
print(c)


def average(*number):  # passing arg as a tuple
    sum = 0
    for i in number:
        sum += i
    avg = sum / len(number)


# it will print `none` if no return is specified
c = average(1, 5)
print(c)
