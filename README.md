### Preamble
I put a timelock on this project so there is some incomplete implementations you'll see within the code base (e.g., single patient view). I commented areas of that sort as well as possible. Nonetheless you should be able to get a general idea of the direction I was headed in. If you have any questions/comments/concerns please feel free to reach out.

Demos
* Postman API - https://screencast-o-matic.com/watch/cFhrDkbCdH
* Mocha API test - https://screencast-o-matic.com/watch/cFhrDEbCKn
* Full working app - https://screencast-o-matic.com/watch/cFhrDsbCKJ

### Getting started
(after clone, and npm i)

NOTE: commands ran from inside of the app direcotry

Open a terminal and run the server ```cd app/ && npm run server``` - running on :3001

Open a new terminal and run the client ```cd app/ && npm run server``` - running on :3000

Postman collection and environment config exports can be found in ./app/server/postman/. You can import them into Postman and test the express API endpoints through there as well.

NOTE: ctrl + h will toggle dev tools - see ./app/client/src/containers/DevTools.js for more info

### About the bundle

Front End
* react used as view library
* redux used for state management
* material ui used as view support library
* webpack used as bundler and dev server with live reload

API/backend
* express used as api layer
* nodemon used for server instance with live reload
* mocha/chai used for API smoke test ```npm run server-test``` (make sure port is not hogged by other server instances)

### Features
**At a minimum:**
- [x] Instructions on how to use/run your implementation of this exercise.
- [x] Backend API has an endpoint of `/patients` in any language that you choose.
- [x] Endpoint: `/patients` with no arguments returns a valid JSON list of patients.
- [x] Endpoint: `/patients` with the name argument should return a valid list of patients that include that string in their `full_name`
- [x] Frontend includes a main page that displays the description of the application, along with a method of navigating or viewing a patient list.
- [x] Frontend view that shows a list of all patients (Showing the id, name, and mrn ) from the backend API.
- [x] Frontend view that allows the ability to search for a specific string via the Backend API and shows the result.

**Bonus:**
- [ ] Add a Frontend view and Backend endpoint to view one patient specifically by mrn.
  - backend endpoint this there
- [X] Sortability of the patient list.
- [X] Unit testing of any of the above logic.
  - API test
- [X] Anything you could think of that may be valuable in this application.
  - basic routing
  - live reload (server and client)
  - dev tools
***

# Haystack Informatics take-home exercise
The purpose of this exercise is to demonstrate your thought process, implementation, and interpretation of a task similar to that which may occur at Haystack Informatics.  There is no right or wrong way to do this exercise, rather, we would like to simply get a sense for your general coding ability and style.  


While working on this exercise, please consider relevant edge cases and error handling, and leave comments in your code to help describe some of your thought processes.


This exercise consists of two parts:
1. ReactJS implementation of a basic API.
2. Minimal backend API with two endpoints.


## Frontend Application
We are most interested in seeing a ReactJS implementation.  There are 3 particular use cases for the UI that we are looking to see at a minimum:
- Main page - The default state of the application. This should display a brief description of the application, along with a method of navigating or viewing a patient list.
- Patient list - The ability to view the list of patients from the Backend API endpoint.
- Patient list - The ability to search for a specific patient from the Backend API endpoint.


## Backend API
You may use whatever language you feel most comfortable in.  We will provide a basic dataset that will need to be returned as a list or to be filtered for an endpoint.


### Provided dataset
In the `/data` folder there are two files, a [csv file](data/patients.csv) and [json file](data/patients.json).  Choose whichever one of these you prefer, and use it to provide data to the backend endpoints.

The data structure provided is as follows:
- full_name
- first
- last
- gender
- mrn
- id
- birthdate


### Endpoints

| Endpoint | Supported Methods | Description |
| -------- | ----------------- | ----------- |
| /        | GET | Description of the exercise |
| /patients| GET | List of patients          |


#### /
This endpoint should return a brief description about the project, it may be a static value that is returned.


#### /patients
This endpoint should return a list of patients for consumption of the frontend.


**Required use cases for endpoint**


| Argument | Expected output |
| --------- | --------------- |
| _(none)_ | Full list of patients |
| name | Patients `full_name` that match or have a partial match to the string provided |


## Requirements
**At a minimum:**
- [ ] Instructions on how to use/run your implementation of this exercise.
- [ ] Backend API has an endpoint of `/patients` in any language that you choose.
- [ ] Endpoint: `/patients` with no arguments returns a valid JSON list of patients.
- [ ] Endpoint: `/patients` with the name argument should return a valid list of patients that include that string in their `full_name`
- [ ] Frontend includes a main page that displays the description of the application, along with a method of navigating or viewing a patient list.
- [ ] Frontend view that shows a list of all patients (Showing the id, name, and mrn ) from the backend API.
- [ ] Frontend view that allows the ability to search for a specific string via the Backend API and shows the result.

**Bonus:**
- [ ] Add a Frontend view and Backend endpoint to view one patient specifically by mrn.
- [ ] Sortability of the patient list.
- [ ] Unit testing of any of the above logic.
- [ ] Anything you could think of that may be valuable in this application.
