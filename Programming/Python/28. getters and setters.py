# 60

class Yamada:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    def info(self):
        print(f"{self._name} turns {self._age}")

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, new_age):
        self._age = new_age


# getter

# setter
one = Yamada("Shion", 10)
one.age = 100
one.info()
