# Day 38
# rating = float(input("Rate us from 1-5: "))
# rating = 4.6
# if 1 < rating < 5:
#     print("Thanks for the feedback!")
# else:
#     raise ValueError("Enter a value between 1-5")


# pan = input("Enter your PAN number: ")
# salary = int(input("Enter salary to get a cibil report: "))
# if 10000 > salary or salary > 100000:
#     raise ValueError("Enter a valid amount of salary")


rating = input("Rate us from 1-5: ")
if rating == "c":
    print("Program Quit!")
else:
    if 1 < float(rating) < 5:
        print("Thanks for the feedback!")
    else:
        raise ValueError("Enter a value between 1-5")
