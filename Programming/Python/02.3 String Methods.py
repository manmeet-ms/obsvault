para = "Process Finished With Exit Code"
print("lowercase:", para.lower())

print("uppercase:", para.upper())

print("rstrip:", para.rstrip("code"))  # only removes trailing chars

print("replace:", para.replace("i", "^"))

print("capitalize:", para.capitalize())

print("center:", para.center(50))

print("count:", para.count("c"))

print("endswith:", para.endswith("Code"))
print("endswith:", para.endswith("python"))

print(para.find("Finished"))  # Returns index of the very first occurrence it meets
print(para.find("python"))  # returns -1 if it not found

print(para.index("With"))  # Displays the index
# print(para.index("2with")) # Raises an error "ValueError: substring not found"

print(para.isalnum())
para1 = "Code1"  # spaces must not be included
print(para1.isalnum())

print(para.islower())
para2 = "process return"
print(para2.islower())

print(para.isprintable())
para3 = "process\t"
print(para3.isprintable())

# isspace
# istitle
# islower
# isupper
# swapcase
# title
