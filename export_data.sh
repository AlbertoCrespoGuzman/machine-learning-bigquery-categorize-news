mongoexport --collection=news --db=sms --out=data/news.json
mongoexport --collection=news --db=sms --out=data/news.csv --type=csv --fields _id,title,category,source,author,visits

mongoexport --collection=categories --db=sms --out=data/categories.json 
mongoexport --collection=categories --db=sms --out=data/categories.csv --type=csv --fields _id,name