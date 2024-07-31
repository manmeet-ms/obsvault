# 66
class Dev:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def info(self):
        print(f"The name\'s {self.name}. Earns {self.salary}")


instance1 = Dev("Maggie", 100)
instance1.info()

print()


class Developer:
    company = "Meta"
    no_of_employee = 0

    def __init__(self, name):
        self.name = name
        self.salary = 10000
        Developer.no_of_employee += 1

    def info(self):
        print(
            f"\n\nDeveloper Details:\nName: {self.name} | Works in {self.company} | Earns {self.salary} | Current no. of employees {Developer.no_of_employee}")


e1 = Developer("Shirou")
e1.salary = 5000
e1.info()
e1.company = "Apple (company changed)"
e1.info()

e2 = Developer("Emily")
e2.info()

