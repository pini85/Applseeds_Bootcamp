def shout(s):
    """Returns s in uppercase with excitrmrnt.
    >>> shout('shalom')
    'SHALOM!!'

    >>> shout('hi')
    'HI!!'
    """
    return s.upper() + "!!"

print(shout("hello"))



def shout(s: str):
    """Returns s in uppercase with excitrmrnt.
    >>> shout('shalom')
    'SHALOM!!'

    >>> shout('hi')
    'HI!!'
    """
    return s.upper() + "!!"

print(shout("hello"))

# Will give you the string options even without a string parameter but if its not a string it wont error