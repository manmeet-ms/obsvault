a = 10
print("Outside function (Before):", a)


# global keyword
def main():
    global a
    a = 43
    print("Changed Inside function:", a)


main()
print("Outside function (After):", a)
