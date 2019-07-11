# Input
N = int(input());
arr = input();
arr = list( map(lambda a: int(a) , arr.split(' ')) )
# print(N, arr)

#=====[FUNCTIONS]=====#

def mean(li):
    #add all numbers together then divide by total
    total = 0
    for num in li:
        total += num
    return round(total/len(li) , 1)

def median(li):
    li.sort()
    if len(li)%2 == 0:
        # return the avg of the middle two entries
        return round(( li[int(len(li)/2) - 1] + li[int(len(li)/2)]) / 2 , 1)
    else:
        # return the middle entry
        return li[len(li)/2 + .5]

#MODE: finds the mode of li by making a dict to count occurances of certain numbers
def mode(li):
    #create b to hold items and amount of occurances then fill out with occurances
    b = {}
    for item in li:
        b[item] = b[item] + 1 if item in b.keys() else 1

    # 1) b entries converted to tuples, represented in lambda as 'a'
    # 2) filter out all but the numbers repeated the most
    # 3) return the smallest of the most repeated numbers
    return min( list(filter( lambda a: a[1] is b[max(b, key= b.get)], b.items() )) )[0]


print(mean(arr))
print(median(arr))
print(mode(arr))
