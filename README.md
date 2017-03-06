# dowe

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##File Structure

All relevant components are in src, so this is the file structure of src:
```
main.js(entry)
App.vue
router

components
-LandingPage
--AboutUs
--Header

-NavBar
--dropdown

-customComponents
--input
--selection
--button

assets
-hamburger
-calendarGlyph
-messageGlyph
```

```
//things that still need to be done

//landing page
  //landing page styling
  //record and include video of how app functions
  //write how it works section
  //store given user info on db
    //need to create unique user ID to use in user specific route
  //create functionality to authenticate routes in router
  //create footer to include misc information
  //create website logo
  //finish functions for signup in LandingPage/index.vue
  //finish functions for signin in header/index.vue

//NavBar
  //create message dropdown feature
  //finish redirect function in NavBar/index.vue
  //finish toggle messages function in NavBar/index.vue
  //include website logo
  //NavBar styling
  //dropdown menu styling
  //implement functionality to alert for unread messages

//signup
  //need to update the progress header with current stage of signup process
  //need next and back buttons
  //implement data persistence of user info
  //potentially implement store for caching user data on memory
  //personalInfo
    //styling
  //datingPrefs
    //scheduling block creation needs to be started and completed
  //imageUpload
    //everything

    


```