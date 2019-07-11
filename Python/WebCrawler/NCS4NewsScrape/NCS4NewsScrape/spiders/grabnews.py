#- * -coding: utf - 8 - * -
import scrapy
import re
import datetime


class GrabnewsSpider(scrapy.Spider):
    name = 'grab_alison_news'
    def start_requests(self):
        urls = [
            'https://www.usm.edu/news/?author=Alison+Crumpton'
        ]
        for url in urls:
            yield scrapy.Request(url = url, callback = self.parse)

    def parse(self, response):
        arr = response.css(".list__item")
        print("array:")
        print(arr)
        for item in arr:
            match = re.search(r'(\d{2}|\d{1})\.\d{2}\.\d{4}', item.css(".text-small.list__meta::text").extract_first())
            dateobj = datetime.datetime.strptime(match.group(), '%m.%d.%Y')
            print(":::::::::::::::::::::\n")
            print(dateobj)
            print(datetime.datetime(2019, 12, 1))
            print(dateobj > datetime.datetime(2018, 12, 1))
            print(":::::::::::::::::::::\n")

            if dateobj > datetime.datetime(2018, 12, 1):
                yield {
                    "title": item.css("h2 a::text").extract_first(),
                    "link": item.css("h2 a::attr(href)").extract_first(),
                    "date": dateobj.strftime('%m/%d/%Y'),
                    "img": ("https://www.usm.edu" + item.css('.list__image.list__image--small img::attr(src)').extract_first())
                }

        next_page = response.css('.pagination a:last-child::attr(href)').extract_first()
        if next_page is not None:
            yield response.follow(next_page, callback = self.parse)

# http: //news.usm.edu/author/alison-crumpton-ncs4
    ##http: //news.usm.edu/search/apachesolr_search/alison%20crumpton%20ncs4  - exclude pages not containing ncs4 or some variation of it