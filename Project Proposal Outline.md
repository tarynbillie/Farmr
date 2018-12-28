# 🥦🥒🥬Farmr - Project Proposal 🥬🥒🥦


## Premise 
>Directly connecting you to your farm supplier. Making "farm to table" more achievable and less time consuming!

### Description
Communication and invoicing takes time out of your day for both the farmer and chef. Farmr makes "farm to table" more achievable. Upon log-in, the user will be able to see what produce the farmer is going to harvest for the upcoming week. The user is able to pick and choose which specific produce they would like to order from the farmer. Once the user has chosen their final pickings for the upcoming week, a notification email asking ther user to log in. 

### Core Features
1. Main website showing, nav, overview on the application, contact, footer etc..
2. User has a profile page, where they can fill out a form of what type of produce they are looking for, submits and gets saved to the database
3. farmer also has a page where they can fill out a form of what they have, submits and gets saved to the database
4. When there are matches, a email gets sent out to both parties and connects them

**Stretch Features**
1. Register/Login system
2. Log-in as user, which shows the user's profile and their farm suppliers (just doing one farm supplier)
3. User is able to click on their farm of choice and see (real time update) what produce is going to be harvested to purchase for the upcoming week
4. User can make special requests by adding a comment to a specific produce. For example, I would prefer this one to be oddly shaped and more red. This will show on the farmers end when they recieve the order
5. Mobile responsive
6. Second pickings that are discounted (less waste for farmer)


### User Stories
User "Justin-Bobby" a.k.a "JB", is a chef at a small hispter resturant. He love's the farm to table concept and has a friend who is a local organic farmer. Once a week, every Monday, JB logs into Farmr and looks at what is available for him to order. JB selectes what he wants delivered depending on what is actually available. JB selects 10lbs of Bok Choy for $3/lbs, 6 bunches of salad turnip for $3/bunch(8), 48 kohl robi for $0.75/each. JB will then be able to see a break down of what he wants to order, he's able to leave comments on each product if he chooses, to ask for a speicifc shape or preferred color. He's also able to delete if his mind changes. Once JB submits his order, the order is pushed to the farmrs login/or email. The farmer will then be able to review and respond to the user if there is any conflicts or just to confirm it was recieved. 

### Tech-Stack

- Visual Studio Code
- SASS/BEM
- React
- Node
- MAMP
- mongoDB
- NPM packages including:
-cors
-react-router-dom
-express
-body-parser
-SendGrid
-mysql2?
-sequelize?
-sequelize-cli?

**Description of Data**: 
The farmers data will be coming from a database (mongoDB). In order. This data will include produce, how it's packaged (lbs, bunches, heads), prices, and when it will be ready to harvest/order. This data will be displayed to the user in which they will be able to manipulate on their end. 

### Front-End
 ![test image](/Users/tarynli/Pictures/Nov12011.jpg)

### Server-side:
 - GET /produce
 - PUT /produce
 - GET /order
 - POST /order
 - DELETE /order/deleteItem/:id
 - database schemas (objects)

### Project Timeline

**Fri**: Purposal finished
**Sat**: Set up architecture & router (figure out hwo to incorporate already made excel spreadsheets)
**Sun**: First wireframe, home, about, sign in/modal, user page
**Mon**: Set up database figure out how to transfer existing exel spreadsheet into mongoDB
**Tues**: Set up server and endpoints
**Wed-Wed**: Piece all the spaghetti together
