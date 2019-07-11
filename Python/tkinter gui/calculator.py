from tkinter import Tk, Label, Button

class BasicCalculator:
    def __init__(self, master):
        self.master = master
        master.title("Basic Caclulator")

        self.label = Label(master, text="This calculator supports basic functions (+, -, /, *)")
        self.label.pack()

        self.buffer = []

        for x in range(0, 9):
            self['button_' + str(x)] = Button(master, text=str(x), command=self.send(x))
            self['button_' + str(x)].pack()

        self.button_add = Button(master, text="+", command=self.send("+"))
        self.button_add.pack()

        self.button_sub = Button(master, text="-", command=self.send("-"))
        self.button_sub.pack()

        self.button_mult = Button(master, text="*", command=self.send("*"))
        self.button_mult.pack()

        self.button_div = Button(master, text="/", command=self.send("/"))
        self.button_div.pack()

        self.button_lparen = Button(master, text="(", command=self.send("("))
        self.button_lparen.pack()

        self.button_rparen = Button(master, text=")", command=self.send(")"))
        self.button_rparen.pack()

        self.button_enter = Button(master, text="=", command=self.calc(0))
        self.button_enter.pack()


        def send(x):
            self.buffer.append(x)
        
        def calc(level):
            for x in self.buffer:
                if(x == '(')


                x is lparen 
                    call self(lvl+1)
