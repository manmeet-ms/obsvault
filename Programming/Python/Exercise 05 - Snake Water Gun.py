from random import randint
import time

record = {1: "Snake", 2: "Gun", 3: "Water"}
r_match = {(1, 3): "Won", (2, 1): "Won", (3, 2): "Won", (1, 2): "Lose", (2, 3): "Lose", (3, 1): "Lose"}
score = 0
for round_count in range(1, 4):
    user = int(input(f"\nRound {round_count}. Make your choice: 1. Snake 2. Gun 3. Water: "))
    comp = randint(1, 3)
    c_round = (user, comp)
    print(f"You chose: {record[user]}. Computer chose: {record[comp]}")

    if user != comp:
        for i in r_match.keys():
            if c_round == i:
                res = r_match[c_round]
                print(f"Result: You {res}!")
                if res == "Won":
                    score = score + 1
                else:
                    score = score - 1
    else:
        print("Draw")
        score = score + 0.5
    #     print("Enter a valid choice")
print("Calculating score...")
time.sleep(2)
print(f"Your score {score} ")
