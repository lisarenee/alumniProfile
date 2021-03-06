// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Profile = require("../components/profile");


var Accord = require("../components/child/Accord")
var imageUploader = require("../components/child/ImageUpload")

// var Child3 = require("../components/child/child3")

// var Store = require("../components/store/store")

// var Gchild1 = require("../components/grandchild/gchild1")
// var Gchild2 = require("../components/grandchild/gchild2")

// var Gchild3 = require("../components/grandchild/gchild3")


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Profile}>

      {/* If user selects Info or Chat show the appropriate component */}

      <Route path="profile" component={Profile} />
      <Route path="accord" component={Accord} />
      <Route path="imageUpload" component={imageUpload} />


      {/*<Route path="store" component={Store} />

      <Route path="gchild1" component={Gchild1} />
      <Route path="gchild2" component={Gchild2} />
      <Route path="gchild3" component={Gchild3} />*/}

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Profile} />

    </Route>
  </Router>

);