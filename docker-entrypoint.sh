#!/bin/sh
npm run build
python manage.py collectstatic --no-input
