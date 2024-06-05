# Day 36
import math

m = 2
n = 2
q = 2
try:
    print("Result: ", m / (n - q))
except Exception as e:
    print(e)  # Nor need tobe mentioned explicitly. JUST TO IMPROVE UX
    print("You made denominator zero! Baka")

print("Statements will execute as usual despite error occurrences.")
print("Made possible with Error Handling")

a = 3
b = 3
c = 3

try:
    d = math.sqrt(b ** 2 - 4 * a * c)
    r1 = (d - b) / (2 * a)
    r2 = (d + b) / (2 * a)
    print(f"Roots are {r1} & {r2}")
except Exception as e:
    print(e)
    print("Determinant came to be negative.\nRoots not possible")

# Day 37: Finally Keyword
arr = [1, 2, 3, 1]
i = int(input("Enter"))
try:
    print(arr[i])
except:
    print("error occurred")
finally:
    print("Always executed.")
