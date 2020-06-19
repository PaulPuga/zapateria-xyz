import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/config";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
//Views
import login from "./views/login";

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
    const developerUser = {
      username: "dev",
      password: "123",
    };
    localStorage.setItem("currentUser", JSON.stringify(developerUser));
  }, []);
  return (
    <Router>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Switch>
              <Route path="/" component={login} />
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
