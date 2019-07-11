# COMMANDS:

- scrapy crawl *name_of_crawler*
    - Send crawler out to do it's thing
    - add -o *filename.extension* in order to output to a file (e.g. .json or .jl)
- scrapy shell *www.url_to_crawl.com*
    - Open a cmd shell to play with data on website
- scrapy genspider *name_of_crawler* *www.url_to_crawl.com*
    - Generate a basic spider

# NOTES:

- Description:
    - This is a python webcrawler using scrapy to pull news articles made by Alison on the usm website.  Since we are not allowed to access search pages (see robot.txt), we must find entry through her profile news article list.
    - The user agent (in settings.py) is set to the email of the person using it: please change this during use so that if there arizes any issues with the bot, they will have the right contact info to access.
    - HTTPCACHE_ENABLED is set to true (settings.py): This will pull only on a cached version of the website.  To get the most recent version of the website, you must set this to false.
    - Delays and ect are set to the robots.txt settings
    - I was originally comparing the output to a database until I was sure I had everything with no duplicates, then switched to just filtering by newest date.  You can see an old script I ran raw in Old_Jsons_and_Code/_SCRIPT_Compare-to-db.py with several bits of commented out code based on what I needed at the time (I know its gross but I was time crunching).
- How to use:
    - Run spiders/grabnews.py by calling it's name with:
        - scrapy crawl grab_alison_news -o articles.json
    - Note: The spider only outputs dates from after a certain point (line 33), so to see more news from the past, change the date.
    - Obey robots.txt by adjusting settings.py as needed.  
    - You can open up a shell on a page to run scrapy selectors (see scrapy api) and figure out what you need to use to grab what you want.  Generally this looks like this:
        - items = response.css("css selector here")
        - You can use .extract() and .extract_first() to get just the contained information (see scrapy api)
        - You can call more selectors on items above like this: 
            - subitems = items.css("more css selector stuff").extract()
