x = int(input("Enter a number: "))
match x:
    case 4:
        print("x is four")
    case 4:
        print("x is four")
        # there can be more than one default case
    case _ if x < 10:  # can be declared/differentiated with a condition
        print("x is less than 10")
    case _ if x > 10:
        print("x is more than 10")
    case _:  # bare default case must ba at very last
        print("x is ", x)

# Day 16
# Like Switch case in C and Java


# `break` keyword is not necessary to be declared here
# Program exits the `match-case` block right after satisfying first condition


# `break` keywords are not necessary to explicitly declare, if a condition is likely to be matched with condition
