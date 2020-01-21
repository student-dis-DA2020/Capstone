<h2>Setting up and testing the API locally</h2>

<ul>
<li>First install <a href=https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition-as-a-windows-service>MongoDB and MongoDB Compass</a> (if your on Windows, if other then find the tutorial for your OS).  When installing, don't worry about anything to do with Atlas, thats MongoDB's cloud storage solution.  We will use Heroku to keep everything together.  Select install MongoDB as a service option while installing.</li>
  
<li>Open Compass and connect to the local DB instance.  The connection string (if its running) is <code>mongodb://localhost:27017</code>

<li>Create a new DB called "Students-debug" with a collection named "Students-all"</li>

<li>In Compass navigate to the newly created collection "Students-all" in the "Students-debug" database you just created</li>

<li>Click "Collection" from the top bar then "Import Data" and select the Students-all.json file from the repo.  This will populate the local database with dummy student data with ids from 100-140</li>

<li>In your IDE you need to create a new project from existing sources.  In IntelliJ you click File -> New -> Project From Existing sources. This should add all the necessary files that aren't included in the repository.</li>

<li>Once the project is loaded in your IDE then you should be able to right click on the pom.xml file and select Maven > ReImport or something similiar to import all the libraries</li>

<li>Find the file StudentsAPIApplicationTests.java and right click and then run</li>

<li>If everything works you should be able to run the application and in the IDE and it will output some Spring Boot related information in the terminal.</li>


<li>If everything worked, with the application running you should be able to go to <code>localhost:8080/all</code> in a web browser and see a list of JSON formatted student objects cooresponding to the contents of the MongoDB.</li>
</ul>

<li>[Postman](https://www.getpostman.com) is a good tool for checking endpoints/routes from the api<li>

<h3>Endpoints</h3>

Get list of all students ------- `GET http:/localhost:8080/all`\
Get student by id----------`GET localhost:8080/all/{id}`\
Get list of all students in Car-line--------- `GET localhost:8080/line`\
Add Car to Car-line------`POST localhost:8080/line/{id}`\
Add Car to Car-line with position in line------`POST localhost:8080/line/{id}/{position}`\
Change Car's respective student's waiting status------- `PUT /line/{_id}/changewaiting`\
Remove Car from line-----`DELETE localhost:8080/line/{id}`\
Clear the line completely----------`DELETE localhost:8080/line`
