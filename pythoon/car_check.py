class Report:
    def __init__(self,report):
        self.report = report
        self.data = {}
    def add_check(self,type,bool):

        self.data[self] = bool

    def passed(self):
        # for i in self.data.values():
        #     if i == False:
        #         return False
        #     return True
        return all(self.data.values())

    def render(self):
        s ="Results for car #30-210-18"
        for k,v in self.data.items():
            s+=f"*{k}: {'OK' if v else 'failed'}\n"
        s+= "PASSED" if self.passed() else "Not Passed"
        return s








car1 = Report("45678")
car1.add_check("wheels",False)
car1.add_check("Brakes",True)
car1.add_check("Gear",True)
car1.passed()
car1.render()

# car1.display()






