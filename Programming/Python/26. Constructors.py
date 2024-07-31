# Day 58

# solves a major problem
class jinchuriki:
    name = "Naruto"
    tails = 9
    beast = "Kurama"

    def info(self):  # requires self few exception
        # But when it is called self is not necessary
        print(f"{self.name} is a {self.tails} tails Jinchuriki. Owner of {self.beast}")


j = jinchuriki()
j.info()
# changing property
j.name = "Uzumaki Naruto"
j.info()

print()

z = jinchuriki()
z.name = "Madara"
z.tails = 10
z.beast = "Ten-Tails"
z.info()

# Now comes the convenient way

c = jinchuriki()
c.name = "Killer Bee"
c.tails = 4
c.beast = "Octopops"
c.info()


class tailed_beast:
    def __init__(self, arg1, arg2):
        print("I\'m a constructor, always called when a new object is made")
        self.name = arg1  # can also be same
        self.tails = arg2  # can also be same
        print(f"{self.name} has {self.tails} tails")


# A constructor is always called a new object is made

k = tailed_beast("Kurama", 9)
z = tailed_beast("Octopops", 5)

# class Warrior:
#     pass
# Viking is a warrior (inheritance)
