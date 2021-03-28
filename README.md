# Video Game Selling Site

> The information below includes items from the project prompt
## Motivation
Use the agile process to research, develop, deploy, and present a full stack webstore.  This is intended to give students the experience of designing and deploying a website while researching and learning new information. In addition,it gives students an opportunity to develop proficiency with the technology of their choicewhich will hopefully instill a sense of pride and accomplishment... wait...

## Project Description
For this project teams of 3-4 students will design and implement a webstore using modern web frameworks. This will require the development of a Representational State Transfer (REST) Application Programming Interface (API), a constant integration, constant development (CICD) pipeline, and a persistence layer. The website should be deployed to a Platform as a Service (PaaS) such as Heroku or Google App Engine. 

## Project Board
[Web Store Project Board](https://github.com/users/dignacio0815/projects/1)

## Project Website
[Website](https://video-game-store.herokuapp.com/)

## Running the App
To run the app: `nodemon ./bin/wwww`

To access the database: `docker run -p 8081:8080 -e ADMINER_DEFAULT_SERVER=mysql adminer`

## You will be graded on the following:

**Activities Required**
- [x] Research libraries/frameworks
    - Elixir
       - [Phoenix](https://www.phoenixframework.org/)
    - Java
        - [spring-boot:](https://spring.io)(back end REST)
    - JavaScript
        - [express.js:](https://expressjs.com/)(back end REST)
        - [Node](https://nodejs.org/)
        - [React](https://reactjs.org/)
        - [Vue.js](https://vuejs.org/)
    - PHP
        - [Laravel:](https://laravel.com/)(back end REST)
    - Python
        - [Django:](https://www.djangoproject.com/)(back end REST)
        - [Flask:](http://flask.palletsprojects.com/)(back end REST)
    - Ruby
        - [Ruby-on-rails](https://rubyonrails.org/)
    - Scala
        - [Play](https://www.playframework.com/)
    - TypeScript
        - [Angular](https://angularjs.org/)
        
- [x] Research Database Technologies
    - MongoDB
    - MariaDB
    - MySQL
    - Postgres
    - SQLite
- [x] Develop a wireframe of a website
- [x] Develop users stories and rate them

***

**REST API**
- [x] API must support the following
    - [x] List all items
    - [x] Add new items
    - [x] Remove items
    - [x] Update items
    - [x] Search for items
    - [x] Create new user account
    - [x] User Log in
    - [x] User log out
    - [x] Add items to cart
    
***

**Web front end**
- [x] Landing page
    - The page that shows what your store is about
- [x] Product page
    - A listing of the products
    - Show pictures and brief descriptions. Check Amazon.com or etsy.com for inspiration
- [x] A product detail page
    - The page that lists the descriptions and details of the product
- [x] Shopping cart
    - The page that shows the user details of what they have selected.
    - Quantity, subtotal, etc.
    - The user must be able to make changes to their cart
- [x] Create account page
    - We have all seen these. Ask for a usernameand password
    - Do not allow duplicate usernames
    - enforce simple password rules (minimum length >=6 characters, alphanumeric with at least one special character)
- [x] Log in page
    - Standard username and password page
- [x] User profile page
    - Show the username and relevant detail
***
**Persistence Layer**
- [x] MariaDB
- [x] MySQL
- [x] Information to be stored in  the database:
    - User information
    - Product details
    - Shopping cart information
    
## Sprint 1 ()

**User Story**: Setting up database - Charlie Nguyen
> As a video game shopper, I want to be able to have my credentials, items for sale/bought saved so we could query it later

**Definition Of Done**:
- [x]

Note: This would be used to store items that a user has purchased, put up for sale, and user credentials

***

**User Story**: Login to the System - Denize Ignacio
> As a video game shopper I want to login so I can purchase games and view my history

**Definition Of Done**:
- [x] Purchase/view new/old video games

Note: This is necessary for the site since we want the users to be able to log back in with their data saved

***

**User Story**: Create Account - Cathy Hsu
>As a video game shopper I want to create an account so I can buy video games and keep track of my search history.

**Definition Of Done**:
- [x] Ask for first name, last name, username, password
- [x] Do not allow duplicate usernames 
- [x] Enforce password rules: 
    - At least 6 characters with 1 special character

***

**User Story**: Landing Page - Shawn Deppe
> As a video game shopper  I want to access the home screen  so I can see the what the store is selling

**Definition Of Done**:
- [x] Should include search bar
Note: This will allow the user to navigate through the website

***

## Sprint 2 ()

**User Story**: Product Page - Cathy Hsu
>As a video game shopper  I want to have a product page so I can see all the items I am interested in buying

**Definition Of Done**:
- [x] Display all video games that meet the search criteria


***
**User Story**: Shopping Cart - Charlie Nguyen
>As a video game shopper  I want to have a shopping cart  so I can see the items I have selected

**Definition Of Done**:
- [x] Display items user has selected 
- [x] Should allow users to edit items in the cart

Note: This is necessary for the user to see what items they have selected

***

**User Story**: User Profile Page - Shawn Deppe
> As a video game shopper I want to be able to view my personal information in case I want to make any changes to it.

**Definition Of Done**:
- [x] Display user information
    - first name
    - last name
    - username
    - password
- [ ] Stretch goal: Implement edit user
- [ ] Stretch goal: Give users option to upload profile pic

***


## Sprint 3 ()


**User Story**: Search Functionality - Cathy Hsu
> As a video game shopper I want to search for other video game titles/consoles and filter by category

**Definition Of Done**:
- [x]

Note: This is necessary for the site since we want users to search for other video game titles

***


**User Story**: Product Page- Denize Ignacio
>As a video game shopper I want to be able to view details of a video game.

**Definition Of Done**:
- [x] Clicking on a video game will bring the user to the individual product page

***

**User Story**: Account Details - Shawn 
>As a video game shopper I want to be able to view my account details

**Definition of Done**:
- [x] User information displayed


## Sprint 4 ()

**User Story**: Login Partial - Shawn Deppe
>As a video game shopper I want to be able to see a different navigation bar when I'm logged in.

**Definition Of Done**:
- []

***

**User Story**: Receipt - Cathy Hsu
>As a video game shopper I want to be able to view my receipt of the games I just purchased

**Definition Of Done**:
- [x] After hitting checkout, the user would be display a receipt. 
- [x] The quantity of the game is decreased

***

**User Story**: Add to Cart from Product Page - Denize Ignacio
>As a video game shopper I want to be able to add things to cart

**Definition Of Done**:
- [x] Shopper is able to add items to their cart.

***

**User Story**: Clear Cart
>As a video game shopper, I want my cart to be empty after I purchased my games.

**Definition Of Done**:
- [x] After hitting checkout, the user's cart will be empty.
- [x] Items will also be added to purchased items. 

## Mockups
>- To edit the mockups on Lucid Chart click [here](https://app.lucidchart.com/invitations/accept/72ffae0e-49dd-4de9-873d-e0dbb19fcf92)

![Home and Create](public/img/mockup-home-create.png)
![Login and Landing](public/img/mockup-login-landing.png)
![Profile-Cart](public/img/mockup-profile-cart.png)
![Product](public/img/mockup-product.png)

## ERD Diagram:
