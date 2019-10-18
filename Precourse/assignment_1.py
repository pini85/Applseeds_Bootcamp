questions_to_ask = ["Question 1", "Question 2", "Question 3"]

first_answers_object = [{"answer1": 4}, {"answer2": 1}, {"answer3": 3},
                        {"answer4": 2}, {"answer5": 5}]

second_answers_object = [{"answer1": 4}, {"answer2": 1}, {"answer3": 3},
                         {"answer4": 2}, {"answer5": 5}]

third_answers_object = [{"answer1": 4}, {"answer2": 1}, {"answer3": 3},
                        {"answer4": 2}, {"answer5": 5}]


def questions(question, answers):
    while True:
        print(question, "\n"
              "1.", list(answers[0].keys())[0], "\n"
              "2.", list(answers[1].keys())[0], "\n"
              "3.",list(answers[2].keys())[0], "\n"
              "4.", list(answers[3].keys())[0], "\n"
              "5.", list(answers[4].keys())[0], "\n"
              )
        answer_input = int(input("Choose answer:")) - 1
        if answer_input > -1 and answer_input < 5:
            break
    return list(answers[answer_input].values())[0]


first_question_results = questions(questions_to_ask[0], first_answers_object)
second_question_results = questions(questions_to_ask[1], second_answers_object)
third_question_results = questions(questions_to_ask[2], third_answers_object)
result_points = first_question_results + second_question_results + third_question_results


def result(results):
    if results < 5:
        return print("Under 5 points")
    elif results < 8:
        return print("Under 8 points")
    elif results < 12:
        return print("Under 12 points")
    else:
        return print("Over 11 points")

result(result_points)

