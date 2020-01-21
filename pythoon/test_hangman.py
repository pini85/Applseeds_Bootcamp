import pytest
from hangman import Hangman

def test_status():
    game1 = Hangman("hello")
    assert game1.status() == "?????"
    game2 = Hangman("goodbye")
    assert game2.status() == "???????"

def test_bad_guess():
    game1 = Hangman("hello")
    game1.guess("x")
    assert game1.status() == "?????"

    game2 = Hangman("goodbye")
    game1.guess("x")
    assert game2.status() == "???????"


def test_good_guess():
    game1 = Hangman("hello")
    game1.guess("h")
    assert game1.status() == "h????"

    game2 = Hangman("goodbye")
    game2.guess("o")
    assert game2.status() == "?oo????"


def test_passed_game():
    game1 = Hangman("hello")
    game1.guess("h")
    game1.guess("e")
    game1.guess("l")
    game1.guess("l")
    game1.guess("o")
    assert game1.status() == "hello"

#
# def test_invalid_letter():
#     game1 = Hangman("hello")
#     with pytest.raises(ValueError):
#         game1.guess("@")
#     try:
#         game1.guess("@")
#         assert False, "oh no ValueError Not Raised"
#     except ValueError:
#         pass
















# def test_status():
#     game1 = Hangman("hello")
#     assert game1.status() == "?????"
#
#     game2 = Hangman("goodbye")
#     assert game2.status() == "???????"

# def test_bad_guess():
#     game1 = Hangman("hello")
#     assert game1.guess("x") == "?????"
#
#     game2 = Hangman("goodbye")
#     assert game2.status() == "???????"
#
# def  test_good_guess():
#     game1 = Hangman("hello")
#     game1.guess("h")
#     assert game1.status() == "h????"
#
# def test_invalid_letter():
#     game1 = Hangman("hello")
#     with pytest.raises(ValueError):
#         game1.guess("@")
    # try:
    #     game1.guess("@")
    #     assert False, "oh no ValueError Not Raised"
    # except ValueError:
    #     pass




# def test_guess():
#     assert game1.guess("x") == 0