<h2>Setting up and testing the API locally with a local MongoDB</h2>

<ul>
<li>First install <a href=https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition-as-a-windows-service>MongoDB and MongoDB Compass</a> (if your on Windows, if other then find the tutorial for your OS).  When installing, don't worry about anything to do with Atlas, thats MongoDB's cloud storage solution and we have a cloud based DB already set up with it.  We will use Heroku to keep everything together.  Select install MongoDB as a service option while installing.</li>
  
<li>Open Compass and connect to the local DB instance.  The connection string (if its running) is <code>mongodb://localhost:27017</code>

<li>Create a new DB called "Students-debug" with a collection named "Students-all"</li>

<li>In Compass navigate to the newly created collection "Students-all" in the "Students-debug" database you just created</li>

<li>Click "Collection" from the top bar then "Import Data" and select the Students-all.json file from the repo.  This will populate the local database with dummy student data with ids from 100-140</li>

<li>In your IDE you need to create a new project from existing sources.  In IntelliJ you click File -> New -> Project From Existing sources. This should add all the necessary files that aren't included in the repository.</li>

<li>Once the project is loaded in your IDE then you should be able to right click on the pom.xml file and select Maven > ReImport or something similiar to import all the libraries</li>

<li>Find the file StudentsAPIApplicationTests.java and right click and then run</li>

<li>If everything works you should be able to run the application and in the IDE and it will output some Spring Boot related information in the terminal.</li>


<li>If everything worked, with the application running you should be able to go to <code>localhost:8080/all</code> in a web browser and see a list of JSON formatted student objects cooresponding to the contents of the MongoDB.</li>

<li>When testing the API and DB locally the spring boot application is set up to connect to an instance of MongoDB running on your local computer.  Therefore the base url to test all the endpoints will be <code>http://localhost:8080</code>. </li>

<li><a href="https://www.getpostman.com">PostMan</a> is a good tool for checking endpoints/routes from the api</li>

</ul>

<h2>Setting up and testing the API locally but connecting to cloud-based production MongoDB cluster</h2>

<li> Go to <code>API/src/main/resources/application.properties</code> and comment out the line <code>spring.profiles.active=dev</code> and uncomment the line <code>spring.profiles.active=prod</code>

<li> Make sure you have a file in <code>.../resources/</code> called <code>application-prod.properties</code>.  This file is not in the repo because it contains the user/pass for our cloud-based MongoDB cluster/instance.  If you need it just ping me or Tomas in group me.</li>

<li>The base URL is still http://localhost:8080, but the Spring Boot application is internally connecting to the production database on Atlas.  So try not to do anything too crazy with the production database because it's the one we all share and our application(s) will depend on.</li>

<h2>Endpoints</h2>

Get list of all students ------- `GET {Base Url}/all`\
Get student by id----------`GET {Base Url}/all/{id}`\
Add a student -------------`POST {Base Url}/all Body: JSON student representation`\
Update a student -------------`PUT {Base Url}/all/{id} Body: JSON student representation`\
Delete a student -------------`DELETE {Base Url}/all/{id}`\
Get list of students by teacher---`GET {Base Url}/all/searchByTeacher?teacher={teacher name}`\
Get list of students by mode of dismissal -- `GET {Base Url}/all/searchByMode?mode={transportation mode (CAR, BUS, WALK)}`\
Get list of students riding assigned to a bus -- `GET {Base Url}/all/searchByBus?bus={Bus number}`\
\
Get list of all students in Car-line--------- `GET {Base Url}/line`\
Add Car to Car-line------`POST {Base Url}/line/{id}`\
Add Car to Car-line with position in line------`POST {Base Url}/line/{id}/{position}`\
Change Car's respective student's waiting status------- `PUT {Base Url}/line/{id}/changewaiting`\
Remove Car from line-----`DELETE {Base Url}/line/{id}`\
Clear the line completely----------`DELETE {Base Url}/line`

<h2>Updating the backend on Heroku</h2>

<li>The backend and DB has been deployed to Heroku if you want to use it without setting up locally just run the above routes with a base URL of <code>https://ancient-bayou-94629.herokuapp.com</code>.

<li>Before commiting your changes go to the <code>API/.gitignore</code> file and open with a text editor.  Near the bottom you have to uncomment the line that deals with ignoring the application-prod.properties file.  We need to have this file in the Heroku repository but not in the main repository because it has the user/pass for our production DB.</li>

<li>If you are satisfied with your changes and everything works completely locally AND with the spring boot application running locally, but connecting to the production database, then you just need to commit your changes then run <code>git push heroku master</code> from within the <code>API/</code> directory.  It won't work if you do it from the root directory because there is a seperate git repo nested inside the API directory that we use to make backend changes.  This nested repo has a remote connection to our Heroku account, but this, the root repo, does not.</li>
