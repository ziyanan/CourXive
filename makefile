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

docs: FORCE
	cd $(API_DIR); make docs
