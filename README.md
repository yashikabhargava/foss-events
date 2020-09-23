# Foss-Events


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

#### GitHub Repository Structure

| S.No. | Branch Name | Purpose |
| --------------- | --------------- | --------------- |
| 1. | [master](https://github.com/DSC-JSS-NOIDA/foss-events/tree/master) | contains the frontend code  |
| 2. | [backend](https://github.com/DSC-JSS-NOIDA/foss-events/tree/backend) | contains all backend code |

#### Steps for Contributing
<strong>Frontend</strong>
- Fork and clone the Repo by typing the following commands in the terminal 
```
$ git clone https://github.com/your-username/foss-events.git
$ cd foss-events/Frontend
```
-Open this folder in your favourite IDE.
-Move to `data` folder and open `events.json` file.
-Now to add an event to website, add an object with keys same as listed in existing objects in the file.
-Save and commit your code.
-Push to your fork of the repository , navigate to original repository and make a pull request.

<strong>Backend</strong>
- Fork and clone the Repo by typing the following commands in the terminal 
```
$ git clone https://github.com/your-username/foss-events.git
$ cd foss-events
```
- Change Branch using:
```
$ git checkout backend
$ cd Backend
```
- Get connection string from [Mongo Atlas](https://www.mongodb.com/cloud/atlas) by creating a cluster or you can also use your locally installed mongodb
- You can click [here](https://www.youtube.com/watch?v=KKyag6t98g8&t=792s) to learn how to connect atlas to you project
- Paste the connection string in the `.env.example` file in the `DB_CONNECT` variable
- Rename the file `.env.example` to `.env` 
- Install node dependencies using:
```
$ npm install
```
- To start the server, type:
```
$ node server
```
## Resources
- **Git and Github**:
- **Frontend**:
- **Backend**: [Node.js](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)
