#!/usr/bin/env python

import pymongo
import bson
import pprint
import sys
from urllib.parse import quote_plus

params = sys.argv
if len(params) not in [2,3]:
	print("./runmr map-reduce-name [collection-name]")
	sys.exit(-1)

name = params[1]
collection = params[2] if len(params) == 3 else "medits2022"

# DEV NOTE: CUSTOM SETUP FOR DOCKER EE

uri = "mongodb://%s:%s@%s" % (
	quote_plus("sdge"), quote_plus("student"), "localhost:27017")
client = pymongo.MongoClient(uri)

# client = pymongo.MongoClient(host='localhost', port=27017)
# END DEV NOTE

db = client.uoc

f = open("%s_map.js" % name)
code = f.read()
map = bson.Code(code)

f = open("%s_reduce.js" % name)
code = f.read()
reduce = bson.Code(code)

f = open("%s_finalize.js" % name)
code = f.read()
finalize = bson.Code(code)

print("running map-reduce '%s' on '%s' collection" % (name, collection))
result = db[collection].map_reduce(map = map,
	                        	   reduce = reduce,
	                               finalize = finalize,
	                               out = "result_%s_%s" % (name,collection),
	                               full_response = True)

pprint.PrettyPrinter(indent=4).pprint(result)
