# Day 42

seq = "Tokito Muichiro"
for idx, val in enumerate(seq):
    print(idx, val)

# EX 2
marks = [95, 54, 58, 5, 65, 9, 85, 4]
for idx, val in enumerate(marks):
    print(f"Value is: {val} at the Index: {idx}")
print("Verify:", marks)

veggie = ("Onion", "Potato", "Chilli", "Mint", "Lemon")
for idx, val in enumerate(veggie, start=1):
    print(f"At counter no. {idx}, we have {val}.")

# enumeration result as tuple containing index and value
fruits = ("Banana", "Kiwi", "Orange", "Avocado")
for v in enumerate(fruits):
    print(f"Fruit Code TUple: {v}")
