# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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

# Turbo-Up

Overview: carappproject a.k.a TurboUp is as the name implies a car app project, the idea for this was to create react app for the car community in which people could find there vehicle and see what kind of mods would work for their vehicle 

What went well:
-The overall styling for the react app turned out very well especially since this was built on the foundation of the nucamp react project and almost everything was changed which led me to figuring out how react works and what interacts with what in the app

-I'm happy with how everything interacts with each other especially since I was unsure of how everything was going to connect together through all the features and pages and displays

What issues I overcame:
-Ran into an issue in which the smoke gif would not display, to solve this I put a class around all of the containers with the components for each page and called it bg, imported bg to all the pages, created a style for homepage in the components folder, add styling to make it so the gif would take up the whole page, that almost solved it, it only showed up on one page and when I went to cars directory it would not show up, to solve completely all I had to do from there was add !important to the background gif, from there it showed up fine everytime

-Ran into an issue in which a white screen would appear when clicking on any of the vehicles, to fix this I had to backtrack through the code to figure out how pages show up which led me to the app.js and what the path was that is was following, saw that it needed to be put as 
path="directory/:carId" 
element={<CarDetailPage />} />
which instead of it being directory/carId, with that the path to the car detail page worked correctly

-I currently have an unsolved issue in which when I click on the car in the directory it brings up the vehicle instead of the mod/mods for the car, tried many times to change this to what it should be with no luck, will have to come back when I am more proficient in React

What I learned:
-Learned how to connect code for one page with multiple files
-Learned how to use path to link from page to page
-Learned how to pull id's from a file into another file and have them show up on their own seperate pages

What I want to improve:
-I want to the amount of files to be way less than it is now because I ended up not being sure how I would add style and so I created many css files for different components, which I feel is not the intended way of going about it
-I would like to hook up an API to display the vehicles from somewhere that has a list of makes and models 
