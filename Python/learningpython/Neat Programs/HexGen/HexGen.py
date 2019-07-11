#! py
# Author: Brayden Songe, July 2018
# This program was created to generate a random hex number from a list without ever repeating the hex.
#
# HexGen.py pulls all lines from hex.txt, outputs a random line from it, then puts every other line back in the file.
# allhexes.txt contains a list of hexes to refresh hex.txt if it ever runs low (manually copy paste into the file).


import random

filemax = 0
thing = []

# pull numbers from file
with open("hex.txt", "r") as f:
    for line in f:
        thing.append(line.rstrip("\n"))
        filemax += 1

if filemax is 0:
    print("Out of numbers! Please refill 'hex.txt'.")
    exit()

# grab random number
num = random.randint(0,filemax-1)
print(thing[num])
print("Numbers left in file: ", filemax-1)

# write remaining numbers back to file
with open("hex.txt", "w") as f:
    for line in thing:
        if line is not thing[num]:
            f.write(line + "\n")

input()
