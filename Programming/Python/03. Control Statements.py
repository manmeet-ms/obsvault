# Decision-making
# Conditional operators
# a=int(input("Enter a number for comparison: "))
a = 89
b = 10
print("a<b: ", a, "<", b, a < b)
print("a=b: ", a, "=", b, a > b)
print("a>=b: ", a, ">=", b, a >= b)
print("a<=b: ", a, "<=", b, a <= b)
print("a==b: ", a, "==", b, a == b)
print("a!=b: ", a, "!=", b, a != b)

print()
# 1. if else statements

# price = int(input("What's the price of groceries:\n"))
price = 95
if price <= 100:
    print("I'll Buy It!")
else:
    print("Leave It!")

print()
# 2. else if (if-else ladder)

# grades=int(input("Enter your grades: "))
grades = 3
if grades == 100:
    print("Grades are excellent")
elif grades >= 65:
    print("Grades are noice")
elif 65 > grades > 33:
    print("Grades are ok")
else:
    print("Fail!")

print()
# 3. Nested if else
sub_marks = int(input("Enter subject marks marks: "))
if sub_marks > 0:
    if sub_marks == 100:
        print("Grades are excellent")
    elif sub_marks >= 65:
        print("Grades are noice")
    elif 65 > sub_marks > 33:
        print("Grades are ok")
    elif 33 > sub_marks > 0:
        print("Fail!")
else:
    print("Invalid Input!")
# Exercise 2
