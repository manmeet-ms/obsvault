# 89
import requests

# help(requests)

# req = requests.get("http://www.manmeets.me")
req =requests.get("http://www.google.com")

print('''
# This prints html source code to console
''')

print(req.text)


print('''
Now, If we want to parse it 
We use BeautifulSoup. Very useful in static webpage scraping.''')