# Foss-Events
<strong>Foss-events displays Open source events going around you. You can add your own event and let others attend it!!!</strong>

### Links
- **Frontend**: https://fossevents.netlify.app/
- **Backend**: https://foss-events.herokuapp.com

## Browser Support
- **Firefox**:	version 4 and up
- **Chrome**:	any version
- **Safari**:	version 5.2 and up
- **Internet Explorer/Edge**:	version 8 and up
- **Opera**:	version 9 and up
<!-- > **Note**: Support for modern mobile browsers is experimental. The website is not responsive in mobile devices until now. -->

## Technology Stack used:

<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>   <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/> <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **IDE**: VS Code
- **Version Control**: Git and GitHub
- **Database**: MongoDb
- **Hosting**: Heroku, Netlify

### GitHub Repository Structure

| S.No. | Branch Name | Purpose |
| --------------- | --------------- | --------------- |
| 1. | [master](https://github.com/DSC-JSS-NOIDA/foss-events/tree/master) | contains the frontend code  |
| 2. | [backend](https://github.com/DSC-JSS-NOIDA/foss-events/tree/backend) | contains all backend code |

## Get Started
### Steps for Contributing
<strong>Frontend</strong>
- Fork and clone the Repo by typing the following commands in the terminal 
```
$ git clone https://github.com/your-username/foss-events.git
$ cd foss-events/Frontend
```
- Open this folder in your favourite IDE.  <br>
- Move to `data` folder and open `events.json` file.<br>
- Now to add an event to website, add an object with keys same as listed in existing objects in the file.<br>
- Save and commit your code.<br>
- Push to your fork of the repository , navigate to original repository and make a pull request.<br>

<strong>Backend</strong>
> **Note**: You must have Nodejs installed 

- Fork and clone the Repo by typing the following commands in the terminal 
```
$ git clone https://github.com/your-username/foss-events.git
$ cd foss-events
```
![fork](https://i.postimg.cc/cHx44NPx/Screenshot-152.png)
![clone](https://i.postimg.cc/qqcPttKW/Screenshot-154.png)
![clone](https://i.postimg.cc/T31sxNtz/Screenshot-162.png)

- Change Branch using:
```
$ git checkout backend
$ cd Backend
```
![branch](https://i.postimg.cc/RVsPgQvX/Screenshot-163.png)

- Get connection string from [Mongo Atlas](https://www.mongodb.com/cloud/atlas) by creating a cluster or you can also use your locally installed mongodb
- You can click [here](https://www.youtube.com/watch?v=KKyag6t98g8&t=792s) to learn how to connect atlas to you project
- Paste the connection string in the `.env.example` file in the `DB_CONNECT` variable
- Rename the file `.env.example` to `.env` 
- Install node dependencies using:
```
$ npm install
```
![install](https://i.postimg.cc/jjQPFtzt/Screenshot-164.png)

- To start the server, type:
```
$ node server
```
![start](https://i.postimg.cc/RCbf8Pn6/Screenshot-165.png)

- Make changes to the code(for ex- add an update route) and save your changes
- Commit your changes using:
```
$ git commit -m "made changes"
```
- Push the changes to the forked repository
- Navigate to the original repository and make a pull request

<strong>Currently working Routes</strong>
  - Get Routes:
      - /event - Displays all the events
      - /event/:title - Displays the deatils of the specific event
  - Post Routes:
      - /users/login - Login Route
      - /users/signup - Signup Route
      - /addevent - Route for adding an event

## Resources
- **Git and Github**: [Git and Github for Beginners](https://www.youtube.com/watch?v=RGOj5yH7evk)
- **Frontend**: [Frontend development for Beginners](https://www.youtube.com/playlist?list=PL9ooVrP1hQOH2k1SANK5rvq_EAgUKTPoK)
- **Backend**: [Node.js for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)
