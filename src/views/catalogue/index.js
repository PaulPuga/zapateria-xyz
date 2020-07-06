import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import catalogue from "./Catalogue";

const Catalogue = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`} component={catalogue} />
      {/* <Route path={`${path}/edit/:id`} component={clientes_edit} />
      <Route path={`${path}/details/:id`} component={clientes_details} /> */}
    </Switch>
  );
};

export default Catalogue;
