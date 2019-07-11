def string_splosion(str):
  temp = ''
  for x in range(len(str)):
    temp += str[0:x+1]
  return temp

def last2(str):
  count = 0
  if len(str) < 4:
    return 0
  for x in range(len(str)-2):
    # print(str[x:x+2], str[-2:],str[x:x+2] == str[-2:])
    if str[x:x+2] == str[-2:]:
      count += 1
  return count

print(last2('13121312'))
