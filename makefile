YAML_LINT = yamllint
API_DIR = API
REQ_DIR = .

FORCE:

prod: tests github

tests: FORCE
	cd $(API_DIR); make tests

first_run: FORCE
	cd ./Source/courxive && python manage.py migrate \
	&& python manage.py createsuperuser \
	&& python manage.py makemigrations \
	&& python manage.py migrate \
	&& python manage.py runserver
run:
	cd ./Source/courxive && python manage.py runserver

#test_yaml:
#	$(YAML_LINT) .travis.yml

github: FORCE
	- git commit -a
	git push origin main

dev_env: FORCE
	pip install -r $(REQ_DIR)/requirements-dev.txt

# here's how to set up heroku for your repo:
# Already done for gcallah/GameAPI!

#heroku:
	# install heroku:
	#curl https://cli-assets.heroku.com/install.sh | sh
	#heroku login
	#heroku apps:create sd-game-api
	# set up heroku app as remote for this repo
	#heroku git:remote -a sd-game-api
	#heroku config:set PYTHONPATH="/app"
	#heroku config:set GAME_HOME="/app"
	#echo "web: gunicorn source.endpoints:app" > Procfile
	# enter deploy code in .travis.yml


docs: FORCE
	cd $(API_DIR); make docs
