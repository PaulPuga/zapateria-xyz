import React, { useEffect } from "react";
import { connect } from "react-redux";
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

function App() {
  useEffect(() => {
    //Init fake db
    service.general.createDB();
    service.user.createUser({
      id: "lskjdflñakjse342",
      name: "dev",
      email: "dev",
      pass: "123",
    });
  }, []);
  return (
    <Router>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Switch>
              <PrivateRoute exact path="/category" component={category} />
              <PrivateRoute exact path="/catalogue" component={catalogue} />
              <PrivateRoute exact path="/products" component={products} />
              <Route exact path="/login" component={login} />
              <Redirect from="/" to="category" />
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
