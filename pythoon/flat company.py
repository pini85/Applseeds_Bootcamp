# company_flat2.py
import json
from pprint import pprint

def get_birthdays_for_day(people, month, day):
    person_list = []
    for person in people:
       birthday = person['birthday']
       split = birthday.split("-")
       person_month = split[1]
       person_day = split[2]
       if len(person_day) == 2 and int(person_day) < 10:
           person_day = person_day[1]
       if len(person_month) == 2 and int(person_month) < 10:
           person_month = person_month[1]
       if person_day == str(day) and person_month == str(month):
         person_list.append(person)
    return person_list


def get_birthdays_for_month(people, month):
    person_list = []
    for person in people:
       birthday = person['birthday']
       split = birthday.split("-")
       person_month = split[1]
       if len(person_month) == 2 and int(person_month) < 10:
           person_month = person_month[1]
       if person_month == str(month):
        person_list.append(person)
    return person_list

with open("company1.json") as f:
    all_employees = json.load(f)


get_birthdays_for_day(all_employees,12,8)
dec8 = get_birthdays_for_day(all_employees, 12, 8)
print("Birthdays for December 8th:")
pprint(dec8)
assert len(dec8) == 1
assert dec8[0]['name'] == "Michael Brooks"
print("OK1")
print(get_birthdays_for_month(all_employees,12))
dec = get_birthdays_for_month(all_employees, 12)
print("Birthdays for December:")
pprint(dec)
assert len(dec) == 7
print("OK2")

print("Done!")