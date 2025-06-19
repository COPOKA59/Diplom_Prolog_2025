#!/bin/sh

DIST_DIR="/usr/share/nginx/html"
API_URL=${API_URL:-http://localhost:8000/api/v1}

find $DIST_DIR -type f -name '*.js' -print -exec sed -i "s|__API_URL__|$API_URL|g" {} \;

nginx -g "daemon off;"