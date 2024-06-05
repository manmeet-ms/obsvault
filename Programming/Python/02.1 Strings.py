# 11- strings
name = "Shane"
name2 = 'Shenron'
print(name, name2, sep="\n")
print("Ohio " + name2)

# to use "..." in strings
quotes_esc = "He said, \"Nice to meet you.\""
quotes_singleq = 'He said, "Nice to meet you".'
print(quotes_esc)
print(quotes_singleq)

# To print multi-line string
para = '''Name: Shenron
Background: Certified Villager,  
Age: "Undefined"
'''
print(para)

# String Accessing
demo = "Indexing"
print(demo)
print("Character at index 0: ", demo[0])
print("Character at index 1: ", demo[1])
print("Character at index 2: ", demo[3])
print("Character at index 3: ", demo[5])
print("Character at index 4: ", demo[7])

print("Accessing through for loop")
for i in range(0, len(demo)):
    print(demo[i], end=", ")
print()
print("Accessing via in operator")
for character in quotes_esc:
    print(character, end=", ")
