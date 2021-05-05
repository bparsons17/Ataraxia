# Ataraxia


---

**Ataraxia** is a mental health application designed to allow users to set goals, journal and interact with a community of people going through similar things.


* Users can **log in** or **sign up** to access functionality the site.
* A user has the ability to **make posts, journals, and goals**.
* Posted goals and journals can be **posted** with their content editable, posts and comments however can not be edited after they have been posted .
* The **community page** allows users to make posts that can be commented on and liked by other users.  



<h2>Try the site live: <a href=https://ataraxia-app.herokuapp.com/>Here</a> <b>|</b> Check out my <a href="https://github.com/bparsons17/Ataraxia">documentation</a></h2>

## How to run the site locally

- Clone the repo
- Use the command ```npm install``` to install all dependencies
- Make a copy of the .env.example file and edit to match local db configuration
- Create the database and user in psql
  * Run all migrations with ```npx dotenv sequelize db:migrate```
  * Seed all data with ```npx dotenv sequelize db:seed:all```
- Use the start script ```npm start``` to run the server

## Technologies used in Ataraxia
<p align="left">
<a href="https://flask.palletsprojects.com/en/1.1.x/">
<img src="https://img.shields.io/badge/Flask-v1.12-blue">
<a/>

<a href="https://www.sqlalchemy.org/">
<img src="https://img.shields.io/badge/SQLAlchemy-v1.3-blue">
<a/>
  
<a href="https://reactjs.org/">  
<img src="https://img.shields.io/badge/React-v17-blue">
<a/>
 
 <a href="https://www.docker.com/">  
<img src="https://img.shields.io/badge/Docker-v3-blue">
<a/>

<a href="https://www.heroku.com/">
<img src="https://img.shields.io/badge/Heroku-hosting-blue">
<a/>
</p>


**Flask** was used for my backend and it reduced a ton of boiler plate 
code, freeing me to implement more features. 

**pyenv** was my software registry, and within it I installed many packages;
some notable examples include:
* 
* 
* 
* 

**React** is the view engine of choice! 

**Heroku** is the web hosting app of our choice that allowed us to 
run our app on the cloud! 

**Honorable Mentions** are the developement tools that made life 
much more enjoyable! 
* Postman made route testing very easy and fun!
* Postbird, its wonderful GUI made all the difference!

   

</details>


## Challenges throughout the development process
I faced a few challenges while I was building Ataraxia:

1. I struggled to get the data to persist like it should at first. I was able to solve that by changing some of code in my redux store.
2. The like feature has been difficult for me so far.


## Developer

<img alt="Developer" align="right" src="https://user-images.githubusercontent.com/70561117/103400187-079d6600-4af9-11eb-8d20-00c8f88e3936.png" width="20%" />
<table style="width:100%">
  <tr>
 zz
    <th><a href="https://github.com/bparsons17" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/67128124?s=460&v=4" height="auto" width="100"></a></th>
  </tr>
  <tr>
    <td>Brandon P.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/bparsons17">@bparsons17</a></td>
  </tr>
</table>

<p> <i>Thank you for reading my project README ❤️</i> </p>
