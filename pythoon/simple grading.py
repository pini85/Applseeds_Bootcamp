def letter_grade(score):
    if(score < 60 ):
        return "F"
    elif(60 <= score < 70):
        return "D"
    elif(70 <= score < 80):
        return "C"
    elif (80 <= score < 90):
        return "B"
    else:
        return "A"
print(letter_grade(95))
# >= 90	A
# [80-90)	B
# [70-80)	C
# [60-70)	D
# < 60	F

assert letter_grade(100) == "A"
assert letter_grade(95) == "A"
assert letter_grade(90) == "A"
assert letter_grade(85) == "B"
assert letter_grade(80) == "B"
assert letter_grade(79.5) == "C"
assert letter_grade(72) == "C"
assert letter_grade(70) == "C"
assert letter_grade(69) == "D"
assert letter_grade(60) == "D"
assert letter_grade(59) == "F"
assert letter_grade(10) == "F"
assert letter_grade(1) == "F"
assert letter_grade(0) == "F"
print("OK")

