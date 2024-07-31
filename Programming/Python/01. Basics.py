print("Hello World")
print("Addition: ", 4 + 3)
print("Subtraction: ", 4 - 3)
print("Multiplication: ", 4 * 3)
print("Division: ", 4 / 3)
print("Exponentiation: ", 4 ** 3)
print()

x = 5
y = 10
print(f"{x} greater than {y}: ", x > y)
print(f"{x} less than {y}: ", x < y)
print(f"{x} greater than or equal to {y}: ", x >= y)
print(f"{x} less than or equal to {y}: ", x <= y)
print(f"{x} equal to {y}: ", x == y)
print(f"{x} not equal to {y}: ", x != y)

# This is a comment will not be executed
'''
This is a multi-line comment
Also achieved by enclosing lines between 3 double quotes (")
'''

print("To display a new line in console \n\"\\n\" is used ")
print("To give a tab \t\"\\t\" is used ")
print("Hello World", 4, 'Q')
print()

string_var = "String"
chr_var = 'e'
var = 100.01
print(var)
print(type(var))
result = True
print(type(result))

# printing a complex number
cmp = complex(6, 2)
print(cmp)
print(type(cmp))

print()

# 9- Typecasting
print("Explicit typecasting")
string_v = "13"
int_v = 6
print("Before conversion: ", type(string_v))
print("The sum: ", int(string_v) + int_v)
print("After type conversion: ", type(string_v))

print("Implicit typecasting")
a = 4
b = 13.6
print(a + b, type(a), type(b), type(a + b), sep="\n")

print()

# 10 - Taking user Input
# name = input("Enter your name: ")
# num = int(input("Enter a number: "))
# decimal = float(input("Enter a number: "))
