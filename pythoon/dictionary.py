from collections import Counter

def check_words(filename, tests):
    c = Counter()
    with open(filename) as f:
        for line in f:
            s = line.strip()
            if not s:
                continue  # skip blank lines
            # TODO
            for name,func in tests.items():
               if func(s):
                c[name] +=1
    return c

word_tests = {
    "Words with more than 3 letters": lambda w: len(w) > 3,
    "Words with more than 5 letters": lambda w: len(w) > 5,
    "Words with the letter x": lambda w: 'x' in w,
    "Word starts with a vowel": lambda w: w[0] in "aeiou",
    "Word ends with a vowel": lambda w: w[-1] in "aeiou",
    "All words":lambda w: True,
    "No words": lambda w: False,
    "Words with oop": lambda w: "oop" in w,
    "Words has only vowels udi": lambda w: all([c in "aeiou" for c in w]),
    "Words has only vowels for set": lambda w: set(w) <= set("aeiou") ,
    # "Word does not have any vowel": lambda



# count = len([e for x in list for e in x if e.lower() in 'aeiou'])
    # TODOa,e,i,o,u
# Very simple:
# Word starts with a vowel (a, e, i, o ,u)
# Word ends with a vowel
# All words. (Test always passes)

}

print(word_tests["Words with more than 3 letters"])

# expected = {
#     "Words with more than 3 letters": 108588,
#     "Words with more than 5 letters": 98539,
#     "Words with the letter x": 2699,
#     ........
# }



results = check_words('wordsEn.txt', word_tests)
for k, v in results.items():
    print(k, v)

print(results)