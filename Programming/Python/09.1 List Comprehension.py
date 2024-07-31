gen_list = [i for i in range(5)]
print(gen_list)

gen_list_of_squares = [i * i for i in range(1, 10)]
print(gen_list_of_squares)

gen_alphabet = [chr(65 + i) for i in range(5)]
print(gen_alphabet)

gen_even_nums = [i for i in range(1, 10) if i % 2 == 0]
print(gen_even_nums)
gen_eld_nums = [i for i in range(1, 10) if i % 2 != 0]
print(gen_eld_nums)
