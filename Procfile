release: python manage.py makemigrations
release: python manage.py migrate
web: python manage.py collectstatic --noinput; bin/gunicorn_django --workers=4 --bind=0.0.0.0:$PORT testmaker_backend/settings.py
web: gunicorn testmaker_backend.wsgi --log-file -