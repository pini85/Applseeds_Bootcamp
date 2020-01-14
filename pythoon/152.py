MORSE_CODE = {
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
}


def morse(word):
    """Returns an English word s in morse"""
    # ======== Your code here! ============
    for k,v in MORSE_CODE.items():
        print(k,v)
    # =====================================

morse("hello")
# result = morse('Hello')
# print(result)
# print(repr(result))
# assert result == '.... . .-.. .-.. ---'
#
# result = morse('SOS')
# print(result)
# print(repr(result))
# assert result == '... --- ...'