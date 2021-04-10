PYLINT = flake8
REQ_DIR = .

FORCE:

tests: FORCE
	$(PYLINT) *.py
	nosetests --exe --with-coverage --verbose --cover-package=CourXive

prod: tests
	git commit -a
	git push origin main

%.py: FORCE
	nosetests tests.test_$* --nocapture

dev_env: FORCE
	pip install -r $requirements-dev.txt

# here's how to set up heroku for your repo:
# Already done for gcallah/GameAPI!
heroku:
	# install heroku:
	curl https://cli-assets.heroku.com/install.sh | sh
	heroku login
	heroku apps:create sd-game-api
	# set up heroku app as remote for this repo
	heroku git:remote -a sd-game-api
	heroku config:set PYTHONPATH="/app"
	heroku config:set GAME_HOME="/app"
	echo "web: gunicorn source.endpoints:app" > Procfile
	# enter deploy code in .travis.yml

docs: FORCE
	cd $(API_DIR); make docs
