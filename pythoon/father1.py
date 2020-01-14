# father1.py
name = input("What is the name of the father?")
sons = int(input("How many sons he has?"))
daughters = int(input("How many daughters he has?"))

# ----- ENTER YOUR CODE HERE --------
s = f"{name.title()} has {sons + daughters} kids."
# -----------------------------------

print(s)
assert s == "Joe has 5 kids."
print("OK")
