# 71
x = [1, 2, 4]
print(dir(x))


# To print a full verbose help
# help(int)

class Person:
    def __init__(self, name, wage):
        self.name = name
        self.wage = wage

    def info(self):
        print(f"Name: {self.name} | Daily Wage: {self.wage}")


# for a class
print("__dir__ For Class\n", Person.__dict__)

# for an Instance
p = Person("Name", 9932)
print("__dir__ For Instance\n", p.__dir__)
