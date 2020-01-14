# funny_reverse.py
# result = [w[:2].upper() for w in countries]
def funny(s):
    # === YOUR CODE HERE! ===
    result = [w[::-1].title() for w in s.split()]
    return " ".join(result)



    # =======================
funny("foo bar")

result = funny("Foo bar")
print(result)
assert result == "Oof Rab"

result = funny("The quick brown fox")
print(result)
assert result == "Eht Kciuq Nworb Xof"

print("OK")