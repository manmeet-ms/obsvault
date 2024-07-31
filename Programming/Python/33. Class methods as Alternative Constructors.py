# 70
class Person:
    def __init__(self, name, wage):
        self.name = name
        self.wage = wage

    @classmethod
    def toHandleDash(self, passedStr):
        return self(passedStr.split("-")[0], int(passedStr.split("-")[1]))

    @classmethod
    def toHandleComma(self, passedStr):
        return self(passedStr.split(",")[0], int(passedStr.split(",")[1]))

    def info(self):
        print(f"Name: {self.name} | Daily Wage: {self.wage}")


data1 = "Nanami, 4500"
d1 = Person.toHandleComma(data1)
d1.info()
data2 = "Dior-150"
d2 = Person.toHandleDash(data2)
d2.info()


class Person:
    def __init__(self, name, wage):
        self.name = name
        self.wage = wage

    @classmethod
    def toHandleDash(newObject, passedStr):
        return newObject(passedStr.split("-")[0], passedStr.split("-")[1])

    @classmethod
    def toHandleComma(newObject, passedStr):
        return newObject(passedStr.split(",")[0], passedStr.split(",")[1])

    def info(self):
        print(f"Name: {self.name} | Daily Wage: {self.wage}")


data = Person.toHandleComma("Nanami, 4500")
data.info()
data = Person.toHandleDash("Dior-150")
data.info()