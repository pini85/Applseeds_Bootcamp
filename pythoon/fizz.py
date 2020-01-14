# All numbers divisible by 3 should not be printed, instead the word 'Fizz!'
# # should be printed.
# # All numbers divisible by 5 should not be printed, instead the word 'Buzz!'
# # should be printed.
# # All numbers divisible by both 3 and 5 should not be printed, instead the word
# # 'Fizzbuzz!!!' should be printed.

x = range(1,51)
for i in x:
    if i % 3 == 0:
        print("fizz")
    elif i % 5 == 0:
        print("Buzz")
    elif i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz!!!")
    else:
        print(i)
