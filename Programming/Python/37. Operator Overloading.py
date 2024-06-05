class Vector:
    def __init__(self, i, j, k):
        self.i = i
        self.j = j
        self.k = k

    def __str__(self):
        return f"{self.i}i + {self.j}j + {self.k}k"
    #
    # def __add__(self, other):
    #     return f"{self.i + other.i}i + {self.j + other.j}j + {self.k + other.k}k"
    #

    def __add__(self, other):
        # putting attrs IN A vector constructor
        return Vector(self.i + other.i, self.j + other.j, self.k + other.k)

v1 = Vector(1, 3, 4)
print(v1)
v2 = Vector(4, 6, 8)
print(v2)

# Example Operator overloading : Vector Addition
print("Vector Addition", v1+v2)
print(type(v1+v2))