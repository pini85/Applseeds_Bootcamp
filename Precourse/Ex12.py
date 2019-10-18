user_input = input("Type something: ")
result = ''.join(c.upper() if c in 'aeiou' else c for c in user_input)
print(result)

def capitalizeVowels(word):
    for i in word:
        if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
            target = i.upper()
            word = word.replace(i, target)
    return word

print(capitalizeVowels(user_input))
