from random import randint

file = open("22. filenotes.txt",
            'r')  # A file must exist before it is opened in reading mode. Otherwise, it will result in error.

print(file.read())  # Content inside the file will be printed
file.close()

#  MESSING WITHIN MODES OF File IO

'''
We can not switch the functions within work modes.
Like opening a file in reading mode and then executing writing, appending functions on it. 
Error will be shown 
'''

# file = open("22. filenotes.txt", 'w')
# print(file.read())
'''
`io.UnsupportedOperation: not readable`
We are not supposed to read a file when it is opened with writing mode. Like How can you XD?! 
'''

# file = open("22. filenotes other.txt", 'r')
# print(file.read())
'''
FileNotFoundError: [Errno 2] No such file or directory: '22. filenotes other.txt'`
If we open a non-existing  file in reading mode.
'''

rem_health = 4000
with open('22. filenotes.txt', 'w') as f:
    for health in range(4000, 0, -10):
        if rem_health >= 0:
            damage = randint(100, 1500)
            rem_health = rem_health - damage
            f.write(f"Damage Inflicted: {damage}, Health: {rem_health}. \n")
        else:
            f.write(f"Final Blow: {damage}, Health {rem_health} ")
            break
