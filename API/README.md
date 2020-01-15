<h2>Installation</h2>

<ul>
<li>First install MongoDB and MongoDB Compass on your local machine and start a local instance.</li>
<li>Open Compass and connect to the local DB instance.  It should be auto populated to connect to a local instance with the default
port.</li>

<li>Create a new DB called "Students-debug" with a collection named "Students-all"</li>

<li>Clone the repository and navigate to the directory you installed to on the command line</li>

<li>(Assume you have installed python3 and pip.  If not, install these first)
<ul>
<li>run <code>pip install pymongo</code></li>
<li>then <code>python3 populate-localDB.py students create</code></li>
</ul>
</li>

<li>In your IDE you need to create a new project from existing sources.  In IntelliJ you click File -> New -> Project From Existing sources. This should add all the necessary files that aren't included in the repository.</li>

<li>If everything works you should be able to run the application and in the IDE and it will output some Spring Boot related information in the terminal.


<li>With the application running you should be able to go to <code>localhost:8080/all</code> in a web browser and see a list of JSON formatted student objects cooresponding to the contents of the MongoDB.</li>
</ul>

<h3>Endpoints</h3>

Get list of all students ------- `GET localhost:8080/all`\
Get student by id----------`GET localhost:8080/all/{id}`\
Get list of all students in Car-line--------- `GET localhost:8080/line`\
Add student to Car-line------`POST localhost:8080/line/{id}`\
Add student to Car-line with position in line------`POST localhost:8080/line/{id}/{position}`\
Remove student from line-----`DELETE localhost:8080/line/{id}`\
Clear the line completely----------`DELETE localhost:8080/line`
