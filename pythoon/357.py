class RecordingBell:
    def __init__(self,recording =""):
        self.sound = ""
        self.recording = recording
    def record(self):
        self.sound = self.recording

    def play(self):
       return self.sound

bell1 = RecordingBell()
bell1.record("hi")

