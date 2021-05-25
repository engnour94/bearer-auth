# bearer-auth

Authentication Server Phase 2: Token (Bearer) Authentication

**Author:** Nour Abu El-Enein


**Links:**

- [Repo Link](https://github.com/engnour94/bearer-auth)
- [GitHub Actions](https://github.com/engnour94/bearer-auth/actions)
- [Deployed Site]()


## Setup

### Install

- Clone the repository from GitHub
- Run the command `npm i express dotenv morgan base-64 bcrypt cors mongoose jsonwebtoken jest @code-fellows/supergoose` to install dependencies
- create .env file with PORT variable and `MONGODB_URI=mongodb:******` and a secret key `SECRET=****`

### Test

- Run the command `npm test` to test and verify the server and the middlewares are working.
- Run the command `npm run lint` for testing lint.

### Running the app
`npm run start`


### Endpoints: 

post `/signin`

post `/signup`

get `/users`

get `/secret`


 ### Returns Object

{

  user {

    "_id": "String",

    "username": "String",

    "password": "String",

  }
  
}



## Documentation

### UML Diagram

![UML Lab7](/class7.jpg)
