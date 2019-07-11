# NOTE: This script may be no longer nessasary due to the datetime comparison on the grabnews.py script

import json
# import ast
# import re
import datetime
from pprint import pprint


with open('articles_db.json') as f:
    articles_db = json.load(f)

with open('articles.json') as f:
    articles = json.load(f)

# with open('articles2.json') as f:
#     articles2 = json.load(f)


# check list for self duplicates    ==============================
# whitelist = [
#     'Professionals to Receive Recognition during National Sports Security Conference',
# ]
# to_rm = []
# for a in articles:
#     if(a.get('title') in whitelist):
#         continue
#     is_duplicate = False
#     count = 0
#     for db in articles:
#         if a.get("link").rsplit('/', 1)[-1] == db.get("link").rsplit('/', 1)[-1] or a.get("title") == db.get("title"):
#             holder.append(db)
#             if(len(holder) >= 2):
#                 print('Found Duplicate: ', count)
#                 print(holder)
#                 is_duplicate = True
#     if(is_duplicate):
#         to_rm.append(a)

# check for duplicate dates         ==============================
# for a in articles:
#     is_duplicate = False
#     holder = []
#     for db in articles:
#         if a.get("date") == db.get("date"):
#             holder.append(db)
#     if(len(holder) >= 2):
#         is_duplicate = True
#         print('Found Duplicate Dates: ', len(holder))
#         pprint(holder)

#check list vs database             ==============================
to_add = []
for a in articles:
    if(datetime.datetime.strptime(a.get('date'), '%m/%d/%Y') < datetime.datetime(2018, 10, 2)): #Put most recent article date here. If searching all, alison joined ncs4 in 2012 Oct
        continue
    is_duplicate = False
    for db in articles_db:
        if a.get("link").rsplit('/', 1)[-1] == db.get("link").rsplit('/', 1)[-1] or a.get("title") == db.get("title"):
            is_duplicate = True
            break
    if(not is_duplicate):
        to_add.append(a)

#look for img in db and            ==============================
# to_add = []
# for db in articles_db:
#     db['img'] = 'null'
#     for a in articles2:
#         if a.get("link").rsplit('/', 1)[-1] == db.get("link").rsplit('/', 1)[-1]:
#             db['img'] = a.get('img') or ''
#             break
#
#     to_add.append(db)




    # articles[:] = [d for d in articles if d.get('link').split('/',1)[-1] != i.get('link').split('/',1)[-1] and d.get('title') != i.get('title')]
# and not re.search("/node",d.get('link'))
# print(len(articles2))
print(len(to_add), "New Articles by Alison:")
print(json.dumps(to_add))

# print(len(to_add), len(articles_db))
