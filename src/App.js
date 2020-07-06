import React, { useEffect } from "react";
import { connect } from "react-redux";
import short from "short-uuid";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/config";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import service from "./services";

//Views
import login from "./views/login";
import catalogue from "./views/catalogue";
import category from "./views/category";
import products from "./views/products";

import PrivateRoute from "./utils/PrivateRoute";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function init() {
  //Init fake db
  service.general.createDB();
  //Create user
  service.user.createUser({
    id: short.generate(),
    name: "dev",
    email: "dev",
    pass: "123",
  });
  service.user.createUser({
    id: short.generate(),
    name: "admin",
    email: "admin@xyz.com",
    pass: "123",
  });
  if (JSON.parse(localStorage.getItem("category")).length === 0) {
    const categories = [
      {
        id: short.generate(),
        name: "Hombre",
      },
      {
        id: short.generate(),
        name: "Mujer",
      },
      {
        id: short.generate(),
        name: "Niño",
      },
      {
        id: short.generate(),
        name: "Niña",
      },
    ];
    localStorage.setItem("category", JSON.stringify(categories));
  }
  /**
   * Create categories
   */
}

function App() {
  useEffect(() => {
    init();
  }, []);
  return (
    <Router basename="/zapateria-xyz">
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Switch>
              <PrivateRoute path="/category" component={category} />
              <PrivateRoute exact path="/catalogue" component={catalogue} />
              <PrivateRoute path="/products" component={products} />
              <Route exact path="/login" component={login} />
              <Redirect from="/" to="/category" />
            </Switch>
          </SnackbarProvider>
        </ThemeProvider>
      </PersistGate>
    </Router>
  );
}
let mapStateToProps = (state) => ({});
let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
