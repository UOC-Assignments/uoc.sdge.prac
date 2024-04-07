#!/bin/sh
/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf

# Populate mongoDB (NOT WORKING!)
mongorestore --archive=/tmp/mongo_db_data.agz --gzip
