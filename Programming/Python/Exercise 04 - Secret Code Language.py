import random

text = "Shenron"
plain = list(text)
print(text)
if len(plain) >= 3:
    # remove
    rem = plain.pop(0)
    plain.append(rem)
    # print(plain)
    # Append
    for idx in range(1, 4):
        rangechrfst = chr(random.randint(65, 97))
        rangechrlst = chr(random.randint(65, 97))
        plain.insert(idx, rangechrfst)
        plain.insert(len(plain) + idx, rangechrlst)
    print("".join(plain))

else:
    plain.reverse()
    print(plain)

# print(ord('A'), ord('Z'), ord('a'), ord('z'))
# 65 90 97 122
