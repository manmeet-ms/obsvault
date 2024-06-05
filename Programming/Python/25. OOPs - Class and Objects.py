# day 57


f_name1 = "Shinobu"
Hashira1 = "Flower"
l_name1 = "Kochou"

f_name2 = "Tengen"
Hashira2 = "Sound"
l_name2 = "Uzui"


class Hashira:
    f_name = "Giyu"
    style = "Mizu"
    l_name = "Tomioka"

    def info(self):  # method #self keyword is used
        print(f"{self.l_name} {self.f_name} is {self.style} Hashira.")


print(Hashira.f_name)
print(Hashira.style)
print(Hashira.l_name)

# self is used to refer that object being called
h1 = Hashira()  # Object 1 # new template
h2 = Hashira()  # Object 2 # new template
# They have got the default values. But are changeable
# for example
print("Before Changing")
h1.info()
h1.f_name = "Sanemi"
h1.style = "Wind"
h1.l_name = "Shinazugawa"
# print(Hashira.l_name)
print("After Changing")
h1.info()

print()
h2.f_name = "Obanai"
h2.style = "Serpent"
h2.l_name = "Iguro"
# print(Hashira.l_name)
h2.info()
