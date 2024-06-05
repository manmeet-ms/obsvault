class ParentClass:
    def same(self):
        print("Same named method defined under parent class.")

    def parent_method(self):
        print("Method of a parent class")


class ChildClass(ParentClass):
    def same(self):
        print("Same named method as of parent class but defined under child class.")

    def child_method(self):
        print("Method of a child class")
        super().parent_method()

    def point(self):
        print("Pointing to a same named method in parent class")
        super().same()

    def same(self):
        print("Same named method in child class")
        super().same()


child = ChildClass()
child.child_method()
print()
child.point()
print()
child.same()


# inheriting extending constructors
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def info(self):
        print(f"Employee Info: Name - {self.name} Salary - {self.salary}")


class Programmer(Employee):
    def __init__(self, name, salary, lang):
        super().__init__(name, salary)
        self.lang = lang

    def info(self):
        print(f"Programmer's Profile: Name - {self.name} Salary - {self.salary} Language - {self.lang}")


e = Employee("Ryan", 10200)
e.info()
p = Programmer("Wamiqa", 1200, "C#")
p.info()
