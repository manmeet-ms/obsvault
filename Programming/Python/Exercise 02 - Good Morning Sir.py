import time

current_time = time.strftime('%H:%M:%S')
print("Current Time:", current_time)

if (time.strftime("%H") < "12"):
    print("Good Morning")
elif (time.strftime("%H") >= "12" and time.strftime("%H") < "16"):
    print("Good Afternoon")
elif (time.strftime("%H") >= "16" and time.strftime("%H") < "23"):
    print("Good Evening")
else:
    print("Good Night")
