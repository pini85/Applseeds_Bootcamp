s = "hello world"


def nachmanize(s):
    word = []
    letter = ""
    for i in s:
        letter = letter + i
        word.append(letter)
    return " ".join(word)

def nachmannize(word):
    s = ""
    for i in range(len(word)):
        if i:
            s += " "
        s += word[:i + 1]
    return s





nachmanize("hello")
# #
result = nachmanize("abcd")
print(result)
assert result == "a ab abc abcd"

result = nachmanize("shalom")
print(result)
assert result == "s sh sha shal shalo shalom"

print("OK")