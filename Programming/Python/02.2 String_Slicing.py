veggie = "Potato Coriander Cabbage"
print("Default Slicing (with both values provided): ", veggie[0:6])
print("Slicing by providing end index only: ", veggie[:6])
print("Slicing by providing starting index: ", veggie[1:])

print("------")

# negative Slicing
print("Negative Slicing: ", veggie[0:-7])
'''
This is Actually
print("Negative Slicing: ", veggie[0:len(veggie)-7])
'''
print(len(veggie))
print(len(veggie) - 7)
print("------")
fruit = "Pomegranate"
print(fruit[3:12])
print(fruit[0:len(fruit)])
# Determining Length of a string
print("Length of Pomegranate:", len(fruit))
