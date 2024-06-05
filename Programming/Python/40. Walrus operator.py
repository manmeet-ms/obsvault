# Without Walrus Operator
a = False
print(a)
# With Walrus Operator
print(a := False)

# ---

fav_food = []
while (True):
    food = input("Enter your favoutite food: ")
    if food == "q":
        break
    fav_food.append(food)
print(fav_food)

fav_food = []
while (food := input("Enter your favoutite food: ")) != "q":
    fav_food.append(food)
print(fav_food)

fav_food = []
while (food := input("Enter your favoutite food: ")):
    if food == "q":
        break
    fav_food.append(food)
print(fav_food)
