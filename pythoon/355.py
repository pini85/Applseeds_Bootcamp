class CustomBell:
    def __init__(self, msg="ding!"):
        self.n = 1
        self.msg = msg

    def press_button_a(self):
        return self.msg * self.n

    def press_button_b(self):
        self.n += 1

def myFunc():
    return 1+1
bell1 = CustomBell(myFunc())
print(bell1.press_button_a())
