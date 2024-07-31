# loops are used to perform a task numerous times

for i in range(1, 11):
    print(i, end=", ")
print()
# for strings
name = "Goodman"
for letter in name:
    print(letter, end=", ")

# for iterating fr_list
fr_list = ["Orange", "Mango", "Melon", "Pear", "Kiwi"]
for fruits in fr_list:
    print(fruits)

# for iterating items contained in that fr_list
for fruits in fr_list:
    for seeds in fruits:
        print(seeds, end=", ")
print("Printing table")
# num = int(input("Enter: "))
num = 4
for i in range(1, 11):
    print(num * i)
