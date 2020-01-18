def automaton_126(s):
   result = ""
    for i in range(len(s)):
        if(s[i-1] == "X" and s[i] == "X" and )
        result += "." if (s[i-1] == "X" and s[i] == "X" and s[(i+1) % len(s)] == "X") or\
                         (s[i-1] == "." and s[i] == "." and s[(i+1) % len(s)] == ".") else "X"


automaton_126(".X.")
# "[.xx][]"
# assert automaton_126("...") == "..."
# assert automaton_126("XXX") == "..."
# assert automaton_126("...X..X...") == "..XXXXXX.."
# assert automaton_126("..X.....") == "....XXX...."
# assert automaton_126("X..........") == "XX........X"
# assert automaton_126("..........X") == "X........XX"
# assert automaton_126(".XX.X.X..X.X.X") == "XXXXXXXXXXXXXX"
# assert automaton_126("...X..X..") == "..XXXXXX."
# print("Tests OK")