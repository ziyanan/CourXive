LINTER = flake8
DOCFILES = $(shell ls *.py | sed 's/.py/.html/')
COVER_PKG = $(shell pwd)

FORCE:

docs:
	pydoc -w endpoints
	pydoc -w db

%.html: %.py
	pydoc -w ./$<
	git add $@

tests: lint unit

unit: FORCE
	#nosetests --exe --verbose --with-coverage --cover-package=$(COVER_PKG)
	python -m unittest tests.test_endpoints

lint: FORCE
	$(LINTER) *.py
