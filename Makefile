run:
	cd API && yarn run dev

git:
	git add .
	git commit -m $(MSG)
	git push