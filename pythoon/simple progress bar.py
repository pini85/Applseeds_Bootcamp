def simple_progress_bar(completed):
    """Returns a progress bar as str of width 10
    composed of the characters '#' for the completed part
    and '-' for the uncompleted part"""
    # --------- YOUR CODE HERE --------------


    return completed * "#" + (10-completed) * "-"
    # --------- YOUR CODE HERE --------------

print(simple_progress_bar(3))


result = simple_progress_bar(3)
print(result)
assert result == "###-------"

result = simple_progress_bar(10)
print(result)
assert result == "##########"

result = simple_progress_bar(0)
print(result)
assert result == "----------"

print()
print()

print(simple_progress_bar(0))
print(simple_progress_bar(1))
print(simple_progress_bar(2))
print(simple_progress_bar(3))
print(simple_progress_bar(4))
print(simple_progress_bar(5))
print(simple_progress_bar(6))
print(simple_progress_bar(7))
print(simple_progress_bar(8))
print(simple_progress_bar(9))
print(simple_progress_bar(10))

print()
print("OK!")