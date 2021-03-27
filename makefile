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
