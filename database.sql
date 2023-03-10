-- this is where i will post my data base creation code. --

-- you can delete the first set of values from the values part. it was used as a test.

CREATE TABLE "tasks" (
	"id" serial primary key,
	"task" varchar(150) not null,
	"status" BOOLEAN
	);
	
INSERT INTO "tasks"
	("task", "status")
VALUES
	('Workout', 'False');