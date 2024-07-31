# Day 50
'''
open(), read(), write() -------methods are discussed previously
'''
f = open('22. filenotes.txt', 'r')
print(f.readlines())
f.close()
with open('22. filenotes.txt', 'a') as f:
    f.writelines(['Barlow\n', 'Barlow\n', 'Barlow\n', 'Barlow\n', 'Barlow\n'])
