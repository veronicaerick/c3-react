"use strict";

require("bootstrap/dist/css/bootstrap.css");
require("./assets/stylesheet.css");


const React = require("react");


let Router = require("react-router");
let { Route, DefaultRoute, RouteHandler } = Router;

let { Navbar, Nav, NavItem } = require("react-bootstrap");


const Nvd3Index = require("./components/Nvd3Index.jsx");
const C3Index = require("./components/C3Index.jsx");

let Index = React.createClass({

  render: function() {
    return (
      <div style={{height: "100%"}}>
        <Navbar fixedTop fluid style={{marginBottom: 0}} brand={<a href="#">React-d3-libraries</a>}>
          <Nav>
            <NavItem key={1} eventKey={1} href="#/nvd3"> nvd3.js </NavItem>
            <NavItem key={2} eventKey={2} href="#/c3"> c3.js </NavItem>
          </Nav>
        </Navbar>
        <div className={"wrapper"}>
					<RouteHandler/>
        </div>
      </div>
    );
  }
});

let routes = (
  <Route name="index" path="/" handler={Index}>
    <Route name="nvd3" path="/nvd3" handler={Nvd3Index}/>
    <Route name="c3" path="/c3" handler={C3Index}/>
    <DefaultRoute handler={Index}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById("container"));
});


