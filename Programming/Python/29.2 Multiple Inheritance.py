class Employee:
    def __init__(self, name):
        self.name = name

    def show(self):
        print(f"(Employee method): {self.name}")

class Programmer:
    def __init__(self, name, lang):
        self.name = name
        self.lang = lang

    def show(self):
        print(f"(Programmer method): {self.name} talks {self.lang}")

class Designer:
    def __init__(self, name, tool):
        self.name = name
        self.tool = tool

    def show(self):
        print(f"(Designer method): {self.name} uses {self.tool}")

class Intern(Programmer, Designer):
    def __init__(self, name, lang, tool):
        self.name = name
        self.tool = tool
        self.lang = lang

    def show(self):
        print(f"(Intern method): {self.name} is proficient in {self.lang} and {self.tool}")

e = Employee("Feona")
e.show()
p = Programmer("Ron", "Haskell")
p.show()
d = Designer("Satori", "Adobe Ps")
d.show()
i = Intern("Neoni", "ReactJS", "Figma")
i.show()

# MRO Method Resolution Order
print(f'''
Method Resolution Order
{(Intern.mro())}''')
