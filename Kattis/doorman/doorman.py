import sys

max_diff = int(sys.stdin.readline())
str = list(sys.stdin.readline())
str.pop() #get rid of '\n'


if len(str) == 0 or max_diff == 0:
    print(0)
    sys.exit()
elif len(str) == 1:
    print(1)
    sys.exit()

M = 0
W = 0
diff = 0

print(str)
while True:
    if max_diff <= abs(diff):
        break
    if len(str) == 0:
        break

    if diff < 0:  #W bigger than M
        favored = 'M'
    elif diff > 0:  #M bigger than W
        favored = 'W'
    else:
        favored = str[0]

    # diff = M - W
    # if max_diff < abs(diff + 1) or max_diff < abs(diff - 1):
    #     break

    if str[0] == favored or (len(str) > 1 and str[1] != favored):
        print('FIRST')

        if str[0] == 'M':
            M += 1
        else:
            W += 1
        str.pop(0)
    else:
        print('SECOND')
        if str[1] == 'M':
            M += 1
        else:
            W += 1
        str.pop(1)
        diff = M - W
    print(diff, M+W, favored)
    print(str)


if(abs(diff) > 1):
    print(M + W+1)
else:
    print(M + W-1)
