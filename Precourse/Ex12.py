# user_input = input("Type something: ")
# result = ''.join(c.upper() if c in 'aeiou' else c for c in user_input)
# print(result)
#
# def capitalizeVowels(word):
#     for i in word:
#         if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
#             target = i.upper()
#             word = word.replace(i, target)
#     return word
#
# print(capitalizeVowels(user_input))

promt = "Type any sentanse: "
user = input(promt)
big = ""
vowels = ['a','e','i','o','u']
for i in user:
    if i in vowels:
        big = big + i.upper()
        print(big)
    else:
        big = big + i
        print(big)
print(big)

def capital_vowel():
    input_str = input("Please write a sentence: ")
    vowel = ["a", "e", "o", "i", "u", "y"]
    for i in vowel:
        input_str = input_str.replace(i, i.upper())
    return input_str

print(capital_vowel())
