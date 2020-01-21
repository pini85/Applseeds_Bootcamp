import calendar


class MyTextCalendar(calendar.TextCalendar):
    def formatday(self, day, weekday, width):
        if day % 7 == 0 and day != 0 or "7" in str(day):
           return "**"
        return super().formatday(day, weekday, width)


# --- WRITE YOUR CODE HERE --- #







    # ---------------------------- #


c = MyTextCalendar()
result = c.formatmonth(2014, 5)
print(result)

expected = '''      May 2014
Mo Tu We Th Fr Sa Su
          1  2  3  4
 5  6 **  8  9 10 11
12 13 ** 15 16 ** 18
19 20 ** 22 23 24 25
26 ** ** 29 30 31
'''
print("Expected:")
print("-" * 40)
print(expected)
print( "-" * 40)
print("My calendar:")
print("-" * 40)
print(result)
print("-" * 40)

assert result == expected

print("OK")