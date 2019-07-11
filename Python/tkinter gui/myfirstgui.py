from tkinter import Tk, Label, Button, StringVar

class MyFirstGUI:
    LABEL_TEXT = [
        'This is our first GUI!',
        'Actually, it\'s our second.',
        'We made it more interesting...',
        '...by making this label interactive.',
        'Go on, click it again!',
    ]
    def __init__(self, master):
        self.master = master
        master.title("A simple GUI")

        self.label_index = 0
        self.label_text = StringVar()
        self.label = Label(master, text="this is our first GUI!")
        self.label.pack()

        self.greet_button = Button(master, text="Greet", command=self.greet)
        self.greet_button.pack()

        self.close_button = Button(master, text="Close", command=master.quit)
        self.close_button.pack()

    def greet(self):
        print("Greetings!")
    
root = Tk()
my_gui = MyFirstGUI(root)
root.mainloop()
