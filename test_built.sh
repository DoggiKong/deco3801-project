# DO NOT USE IN PRODUCTION
# Run npm run build before this script
. set_test_secret.sh
. $(pipenv --venv)/bin/activate
python manage.py runserver
