class Employee:
    company = "Google"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show_details(self):
        print(f"{self.name}, {self.age}. Works in (referring class) {Employee.company}")
        print(f"{self.name}, {self.age}. Works in (referring instance) {self.company}")
        print()

    def change_comp(self, new_comp):
        self.company = new_comp


i = Employee("Raphael", 30)
i.show_details()
i.change_comp("Facebook")
i.show_details()

# class variable changed
print("class variable changed")


class Employee:
    company = "Google"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def show_details(self):
        print(f"{self.name}, {self.age}. Works in (referring class) {Employee.company}")
        print(f"{self.name}, {self.age}. Works in (referring instance) {self.company}")
        print()

    @classmethod
    def change_comp(self, new_comp):
        self.company = new_comp


i = Employee("Raphael", 30)
i.show_details()
i.change_comp("Facebook")
i.show_details()
