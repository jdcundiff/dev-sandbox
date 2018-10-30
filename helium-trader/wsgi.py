"""
It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/howto/deployment/wsgi/
"""

import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "helium-trader.settings")

from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
