info = {"Name": "Ashley", "Age": 19, "Eligible": True}
print(info)

metals = {"Ag": "Silver", "Au": "Gold", "Hg": "Mercury"}
print(metals)
print(metals["Ag"])

# print(metals["Hg2"])
print(metals.get("Hg2"))

print(metals.keys())
print(metals.values())
print(metals.items())
# insertion of items in a dictionary
data = {"key": "val", "key2": "val2"}

data["key_insert"] = "val_insert"
print(data)

print()
watch = {"Series": "Avatar - The Last Airbender", "Book 1": "Water", "Book 2": "Earth", "Book 3": "Fire"}
print(watch)
