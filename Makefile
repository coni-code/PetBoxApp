run:
	docker compose up --build -d
	node server/seed.js

stop:
	docker compose down
