# -*- coding: utf-8 -*-
import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotes" # must be unique in project
    def start_requests(self):    #must return iteratable of requests (can use generator or return a list of requests)
                                 #you can also just include the urls array and scrapy will implement them in a default start_requests()
        urls=[
            'http://quotes.toscrape.com/page/1/',
            'http://quotes.toscrape.com/page/2/',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response): #handles the response downloaded for each of the requests made: usually parses response, extracting scraped data as dicts and finding new urls to follow and create new requests from
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').extract_first(),
                'author': quote.css('small.author::text').extract_first(),
                'tags': quote.css('div.tags a.tag::text').extract(),
            }
            #extract data from specific link (in this case iterate thorugh all pages)
            next_page = response.css('li.next a::attr(href)').extract_first()
            if next_page is not None:
                next_page= response.urljoin(next_page)
                yield scrapy.Request(next_page, callback=self.parse)




        # page = response.url.split("/")[-2]
        # filename = 'quotes-%s.html' % page
        # with open(filename, 'wb') as f:
        #     f.write(response.body)
        # self.log('Saved file %s' % filename)
