run:
	cd API && tsc && node ./dist/index.js

git:
	git add .
	git commit -m $(MSG)
	git push