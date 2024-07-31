# # 61
class TeamMembers:
    name = "None"
    salary = "None"
    def details(self):
        print(f"{self.name} earns {self.salary}")

class Programmer(TeamMembers):
    def __init__(self, name, lang, salary):
        self.name = name
        self.salary = salary
        self.lang = lang
    hobby = "Staring at the screen all the day."

    def info(self):
        print(f"{self.name} is a {self.lang} developer and earns ${self.salary}/day")


c = Programmer("Leo", "C#", 500)

c.details()
c.info()

#
# from random import randint
#
# forms = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"]
# rd = forms[randint(0, 9)]
#
#
# class DemonSlayer:
#     def __init__(self, name, type):
#         self.name = name
#
#     def info(self):
#         print(f"Watashi no nawa {self.name}!")
#
# class Humans(DemonSlayer):
#     def __init__(self, name, breathing):
#         self.name = name
#         self.breathing = breathing
#
#     def use_breathing(self):
#         print(f"{self.breathing} breathing {rd} form!")
#
#
# class HalfDemons(DemonSlayer):
#     def __init__(self, name):
#         self.name = name
#
#     def use_blood_arts(self):
#         print("Nezuko's Blood Arts paired with Tanjiro's Blade looks aesthetically pleasing.")
# t = Humans("Tanjiro", "Sun")
# t.info()
# t.use_breathing()
# n = HalfDemons("Nezuko")
# n.use_blood_arts()
