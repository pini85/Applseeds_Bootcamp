# s = "this is a sentence"
# words = s.split()
# letter_count_per_word = {w:len(w) for w in words}
def word_lengths(s):
    # ==== YOUR CODE HERE ===
    return [len(w) for w in s.split()]
    # words = s.split()
    # result = [w:len(w) for w in words]
    # array = []
    # count = 0
    # for word in s.split():





    # =======================

word_lengths("hello how are you")
result = word_lengths("Contrary to popular belief Lorem Ipsum is not simply random text")
print("Result:", result)
assert result == [8, 2, 7, 6, 5, 5, 2, 3, 6, 6, 4]
print("OK")