# InterMatching
InterMatching is a datingapp where you look for a match based on interests. This can be hobby's, your favourite music, bucketlist goals ect. Look for interests that appeal to you, like them and who knows you might meet your dream match! 

![readme](https://user-images.githubusercontent.com/43657951/59041826-adcfae00-8879-11e9-881e-60e8ce3c687f.png)

## Feature 
The user can create a profile and indicate preferences such as age and gender. Each user places 6 interests with an image on his profile. This can always be changed later. All the data is stored in the MongoDB database.

If you like 4 interests of each other, you are a match! Now you can see the profile from your match, the things you like about each other and say hi.

## Research 
What are my ideas based on? Why have I made certain choices? You can read it in my [Wiki](https://github.com/marissaverdonck/BlokTech_DatingApp/wiki)

## Installation
1. Open up your terminal

2. Go to the file in your computer where you want to install the application

3. Type<br/>
```
Git clone https://github.com/marissaverdonck/BlokTech_DatingApp.git
```

4. Install the dependecies<br/>
```
npm install
```

5. To get the application up and running<br/>
```
npm run start
```

## Usage
Go in to the file where you installed the application and start Nodemon in your terminal
```
nodemon server.js
```
Open a new terminaltab and start Mongodb
```
mongod
```

## Database structure

Every user creates an account. The data is stored in MongoDB. The data consists of a username, age, place of residence, preferences, a profile photo and interests. The interests are placed in arrays, one for the names and one for the photos.

<img width="407" alt="Schermafbeelding 2019-06-05 om 22 41 29" src="https://user-images.githubusercontent.com/43657951/59035836-6d1e6780-886e-11e9-9429-c6468f2c839d.png">




## License
[MIT License](https://github.com/marissaverdonck/BlokTech_DatingApp/blob/master/license)
