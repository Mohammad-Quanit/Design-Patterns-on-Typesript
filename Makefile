run:
	cd API && tsc && node ./dist/index.js

git:
	git add .
	@echo $(MSG)
	git commit -m $(MSG)
	git push