# Assignment9_Sakshi

This is an assignment for creating a login page, 4 pages with react components, and react-router using REST API folder hierarchy.

Assignment Tasks:
Create a login page using usernames and passwords created in the previous node assignment to login successfully.
Create 4 pages using react components and react-router (Home, About-us, Jobs, Contact) as shown in the lab.
Add a card component on each page giving detail about each page. Use react map() to create a dynamic component at least on one of the pages.
Use CSS and some additional text to make pages pretty.
Upload the assignment on git. Add Readme and gitignore(add node modules in gitignore) and explain the assignment in readme properly.

Backend

controllers/authController.js - This file contains the logic for the login page. It checks the username and password with the ones stored in the database and returns a JWT token if the user is authenticated.
models/user.js - This file defines the schema for the user in the database.
routes/authRoutes.js - This file defines the endpoints for the authentication API.
services/authService.js - This file contains the logic for validating the user credentials and generating JWT token.
server.js - This is the entry point for the backend.

Frontend

public/index.html - This is the root HTML file for the React app.
src/components/About/About.js - This file contains the component for the About page.
src/components/Card/Card.js - This file contains the component for the card that will be used on each page.
src/components/Contact/Contact.js - This file contains the component for the Contact page.
src/components/Home/Home.js - This file contains the component for the Home page.
src/components/Login/Login.js - This file contains the component for the login page.
src/components/NotFound/NotFound.js - This file contains the component for the 404 page.
src/components/Protected/Protected.js - This file contains the component for the protected page that will be accessible only after successful login.
src/components/RouteWrapper/RouteWrapper.js - This file contains the HOC to wrap protected routes.
src/App.js - This file contains the App component.
src/index.js - This is the entry point for the React app.
src/Routes.js - This file contains the routing configuration for the app.


How to run the project?

Clone the repository
Open the terminal and navigate to the backend directory
Run npm install to install the dependencies
Run npm start to start the backend server
Open another terminal and navigate to the frontend directory
Run npm install to install the dependencies
Run npm start to start the feontend server






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
