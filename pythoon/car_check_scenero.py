from car_check import Report

car1 = Report('30-210-18')

car1.add_check('Wheels', True)
car1.add_check('Brakes', True)
car1.add_check('Lights', False)
car1.add_check('Gear', True)

assert False == car1.passed()

TEST_RESULT = """Results for car #30-210-18
* Wheels: OK
* Brakes: OK
* Lights: Failed
* Gear: OK
NOT PASSED"""

print(car1.render())

assert TEST_RESULT == car1.render()

print()

car2 = Report('40-444-40')

car2.add_check('Wheels', True)
car2.add_check('Brakes', True)
car2.add_check('CO', True)

assert car2.passed()

TEST_RESULT = """Results for car #40-444-40
* Wheels: OK
* Brakes: OK
* CO: OK
PASSED"""

print(car2.render())

assert TEST_RESULT == car2.render()

print()
print("OK")
