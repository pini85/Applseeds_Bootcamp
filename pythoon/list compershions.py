result = [w[:2].upper() for w in countries]
countries = ["Finland", "Jordan","Israel"]
# same as

result = []
for w in countries:
    result.append(w[:2].upper())

#
# filter

# result =[]
# for w in countries:
#     if w[0] in "AEIOU:"
#                result.append(w)

result =[w for w in countries if w[0] in "AEIOU"]