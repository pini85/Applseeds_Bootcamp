def parse_commands(filename):
    x,y,north,east,south,west = 0,0,0,0,0,0
    with open(filename) as f:
        for line in f:
            k, v = line.split(" ")
            print(k)
            if k == 'North':
                north+=int(v)
            if k == "East":
                east+=int(v)
            if k == "South":
                south += int(v)
            if k == "West":
                west += int(v)
    x = east-west
    y = north-south
    return x, y
parse_commands("journey.txt")
result = parse_commands('journey.txt')
print("Result:", result)
assert (220, 180) == result