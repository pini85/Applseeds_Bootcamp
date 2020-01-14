def rotate(s):
    # ---- YOUR CODE HERE ---
    return s[-1] + s[:-1]
    # -----------------------

result = rotate("abcd")
print(result)
assert result == "dabc"

result = rotate("ello worldh")
print(result)
assert result == "hello world"

result = rotate("x")
print(result)
assert result == "x"

result = rotate(rotate(rotate("xyz")))
print(result)
assert result == "xyz"
print("OK.")

print(rotate("hello"))