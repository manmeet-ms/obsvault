# Day 27
question = ["Q1 - Lorem Ipsum? \n1. Option \t2. Option \n3. Option \t4. Option",
            "Q2 - Lorem Ipsum? \n1. Option \t2. Option \n3. Option \t4. Option",
            "Q3 - Lorem Ipsum? \n1. Option \t2. Option \n3. Option \t4. Option",
            "Q4 - Lorem Ipsum? \n1. Option \t2. Option \n3. Option \t4. Option",
            "Q5 - Lorem Ipsum? \n1. Option \t2. Option \n3. Option \t4. Option"]
# answers = ["A", "C", "B", "D", "B"]
answers = [1, 3, 2, 4, 2]

price_per_question = [1000, 2500, 5000, 10000, 25000]
final_reward = 0
for i in range(0, 5):
    print(question[i])
    lock = int(input("Give your answer: "))
    if lock == answers[i]:
        print("You got it right. Correct Answer!!! Here's your check of", price_per_question[i])
        final_reward += price_per_question[i]
        # print("Your final amount until yet: Rs", final_reward)
    else:
        print("Sorry you lost. Better luck next time")
        break
        # i += 1 # question increment

print("You won: Rs.", final_reward)
