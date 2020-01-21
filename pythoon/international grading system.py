import re
def country_letter_grade(system, score):
    #system = JAPAN
    # score = 95
    #result = AA

    result = re.split(r'[,:]', system)
    for i in range(0, len(system), 2):





    # split ,
    # result = system.split(",")
    # print(result)

    # Check if score is in system list
    # if score in result:
    #     #change system score to an integer
    #     print("yes")





    print(system,score)






    """Converts a numeric grade to a letter grade.

    Args:
        system (str) : Pairs of "mark:lowest score" separated by commas, ordered from high to low.

        score (int|float) : A number between 0 and 100.

    Returns:
        str : The correct mark for `score`.
    """
    # ---------- YOUR CODE HERE ----------
    return "AA"
    # ------------------------------------


JAPAN = "AA:90,A:80,B:70,C:60,F:0"
THAILAND = "A:80,B+:75,B:70,C+:65,C:60,D+:55,D:50,F:0"
ICELAND = "A:94,B+:82,B:65,C+:50,C:35,D:1,O:0"
IRELAND = "A:85,B:70,C:55,D:40,E:25,F:1,NG:0"
US_4 = "A:92,B:83,C:74,D:65,F:0"
US_12 = "A+:97,A:93,A-:90,B+:87,B:83,B-:80,C+:77,C:73,C-:70,D+:67,D:63,D-:60,F:0"

country_letter_grade(JAPAN,90)
# assert country_letter_grade(JAPAN, 100) == "AA"
# assert country_letter_grade(THAILAND, 100) == "A"
# assert country_letter_grade(US_12, 100) == "A+"
# assert country_letter_grade(JAPAN, 90) == "AA"
# assert country_letter_grade(THAILAND, 90) == "A"
# assert country_letter_grade(US_12, 90) == "A-"
# assert country_letter_grade(US_4, 90) == "B"
# assert country_letter_grade(ICELAND, 85) == "B+"
# assert country_letter_grade(ICELAND, 80) == "B"
# assert country_letter_grade(THAILAND, 79.5) == "B+"
# assert country_letter_grade(IRELAND, 72) == "B"
# assert country_letter_grade(US_12, 72) == "C-"
# assert country_letter_grade(ICELAND, 60) == "C+"
# assert country_letter_grade(JAPAN, 10) == "F"
# assert country_letter_grade(JAPAN, 0) == "F"
# assert country_letter_grade(ICELAND, 0) == "O"
# assert country_letter_grade(IRELAND, 10) == "F"
# assert country_letter_grade(IRELAND, 0) == "NG"
#
# print("OK")