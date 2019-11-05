user_input = input("Type something: ")


def find_longest_word(word_list):
    longest_word = ''
    word_split = word_list.split()
    for word in word_split:
        if len(word) > len(longest_word):
            longest_word = word
    return print(longest_word)


find_longest_word(user_input)
